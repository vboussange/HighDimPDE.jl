using HighDimPDE
using Random
using Test
using Flux

# using the DeepSplitting alg
batch_size = 500
train_steps = 500
K = 1

tspan = (0.0,0.5)
σ_sampling = 0.1
dt = 0.1f0  # time step
μ(X,p,t) = 0.0 # advection coefficients
σ(X,p,t) = 0.1 # diffusion coefficients


anal_res = [1.398, 1.9567, 5.3554]
ds = [1,2,5]
atols = [5e-2,1e-1,5e-1]

@testset "DeepSplitting algorithm - CPU" begin
        for i in 1:length(ds)
            d = ds[i]

            hls = d + 50 #hidden layer size

            nn = Flux.Chain(Dense(d,hls,tanh),
                    Dense(hls,hls,tanh),
                    Dense(hls,1)) # Neural network used by the scheme

            opt = Flux.Optimiser(ExpDecay(0.1,
                            0.1,
                            2000,
                            1e-4),
                            ADAM() )#optimiser
            alg = DeepSplitting(nn, K=K, opt = opt )


            X0 = fill(0.,d)  # initial point
            g(X) = 2.0^(d/2)* exp.(-2. * π  * sum( X.^2, dims=1))   # initial condition
            m(x) = - 0.5 * sum(x.^2, dims=1)
            f(y, z, v_y, v_z, ∇v_y, ∇v_z, p, t) = max.(0.0, v_y) .* (m(y) - max.(0.0, v_z) .* m(z) .* (2.0 * π)^(d/2) .* σ_sampling^d .* exp.(0.5 * sum(z.^2, dims = 1) / σ_sampling^2)) # nonlocal nonlinear part of the
            mc_sample(x) = randn(d,batch_size) * σ_sampling #montecarlo samples

            # defining the problem
            prob = PIDEProblem(g, f, μ, σ, X0, tspan, 
                                # u_domain=[-1f0,1f0]
                                )
            # solving
            @time sol = solve(prob, 
                            alg, 
                            mc_sample, 
                            dt=dt, 
                            verbose = true, 
                            abstol=2e-3,
                            maxiters = train_steps,
                            batch_size=batch_size,
                            use_cuda = false)
            @test isapprox(sol.u[end], anal_res[i],atol = atols[i])
            # println("Deep splitting CPU, d = $d, u1 = $(sol.u[end])")
        end
end