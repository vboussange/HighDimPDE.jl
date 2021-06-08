cd(@__DIR__)
using Pkg; Pkg.activate("../.")
using Flux, Zygote, LinearAlgebra, Statistics
# println("Starting Soon!")
include("../src/DeepSplitting.jl")  #latest version of the DeepSplitting scheme

using Random
# Random.seed!(100)

## Basic example
d = 3 # number of dimensions
# one-dimensional heat equation
tspan = (0.0f0,1f0)
dt = 0.1f0  # time step
batch_size = 1000
train_steps = 1000
σ_sampling = 1f0
K = 5

X0 = fill(0.0f0,d)  # initial point

hls = d + 50 #hidden layer size

nn = Flux.Chain(Dense(d,hls,tanh),
                Dense(hls,hls,tanh),
                Dense(hls,1)) # Neural network used by the scheme

opt = Flux.Optimiser(ExpDecay(0.1,
                0.1,
                2000,
                1e-4),
                ADAM() )#optimiser

g(X) = exp.(-0.25f0 * sum(X.^2,dims=1))   # initial condition
a(u) = u - u^3
f(y,z,v_y,v_z,∇v_y,∇v_z,p,t) = a.(v_y) .- a.(v_z) .* Float32(π^(d/2) * σ_sampling^d) # nonlocal nonlinear part of the
μ_f(X,p,t) = 0.0f0 # advection coefficients
σ_f(X,p,t) = sqrt(2f0) # diffusion coefficients
mc_sample(x) = x + CUDA.randn(d,batch_size) * σ_sampling / sqrt(2f0) #montecarlo samples

# defining the problem
prob = PIDEProblem(g, f, μ_f, σ_f, X0, tspan,u_domain=[0,1])

# using the Deep Splitting algorithm
alg = NNPDEDS(nn, K=K, opt = opt )

# solving
sol = solve(prob, alg, mc_sample,
            dt=dt,
            verbose = true,
            abstol=1e-5,
            maxiters = train_steps,
            batch_size=batch_size,
            use_cuda = true)
println("u1 = ", sol.u[end])

sol


