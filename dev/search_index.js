var documenterSearchIndex = {"docs":
[{"location":"Feynman_Kac.html#Feynman-Kac-formula","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"","category":"section"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"The Feynman Kac formula is generally stated for terminal condition problems (see e.g. Wikipedia), where $ \\begin{equation} \\partialt u(t,x) + \\mu(x) \\nablax u(t,x) + \\frac{1}{2} \\sigma^2(x) \\Delta_x u(t,x) + f(x, u(t,x))  = 0 \\end{equation} $ with terminal condition u(T x) = g(x), and u colon R^d to R. ","category":"page"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"In this case the FK formula states that for all t in (0T) it holds that","category":"page"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"$","category":"page"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"\\begin{equation} u(t, x) = \\intt^T \\mathbb{E} \\left[ f(X^x{s-t}, u(s, X^x{s-t}))ds \\right] + \\mathbb{E} \\left[ u(0, X^x{T-t}) \\right] \\end{equation} $ where  $ \\begin{equation} Xt^x = \\int0^t \\mu(Xs^x)ds + \\int0^t\\sigma(Xs^x)dBs + x, \\end{equation} $ and B_t is a Brownian motion.","category":"page"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"(Image: Brownian motion - Wikipedia)","category":"page"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"Intuitively, this formula is motivated by the fact that the density of Brownian particles (motion) satisfy the diffusion equation. –>","category":"page"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"The equivalence between the average trajectory of particles and PDEs given by the Feynman-Kac formula allows to overcome the curse of dimensionality that standard numerical methods suffer from, as the approximation error of Monte Carlo integrations decreases as 1sqrtN and is therefore not dependent on the dimensions. On the other hand, the computational complexity of traditional deterministic techniques grows exponentially in the number of dimensions. ","category":"page"},{"location":"Feynman_Kac.html#Forward-non-linear-Feynman-Kac","page":"Feynman Kac formula","title":"Forward non-linear Feynman-Kac","text":"","category":"section"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"How to transform previous equation to an initial value problem?","category":"page"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"Define v(tau x) = u(T-tau x). Observe that v(0x) = u(Tx). Further observe that by the chain rule $ \\begin{equation} \\begin{aligned} \\partial\\tau v(\\tau, x) &= \\partial\\tau u(T-\\tau,x)\\\n                        &= (\\partial\\tau (T-\\tau)) \\partialt u(T-\\tau,x)\\\n                        &= -\\partial_t u(T-\\tau, x) \\end{aligned} \\end{equation} $","category":"page"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"From Eq. (1) we get that  $ \\begin{equation}","category":"page"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"\\partialt u(T - \\tau,x) = \\mu(x) \\nablax u(T - \\tau,x) + \\frac{1}{2} \\sigma^2(x) \\Delta_x u(T - \\tau,x) + f(x, u(T - \\tau,x)) ","category":"page"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"\\end{equation} $ Replacing we get that v satisfies $ \\begin{equation} \\partial\\tau v(\\tau, x) = \\mu(x) \\nablax v(\\tau,x) + \\frac{1}{2} \\sigma^2(x) \\Delta_x v(\\tau,x) + f(x, v(\\tau,x))  \\end{equation} $ and from Eq. (2) we get that","category":"page"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"$","category":"page"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"\\begin{equation} v(\\tau, x) = \\int{T-\\tau}^T \\mathbb{E} \\left[ f(X^x{s- T + \\tau}, v(s, X^x{s-T + \\tau}))ds \\right] + \\mathbb{E} \\left[ v(0, X^x{\\tau}) \\right] \\end{equation} $ By using the substitution rule cdot to cdot -T (shifting by T), then \\cdot \\to - \\cdot $ (inversing) and finally inversing the integral bound we get that  $ \\begin{equation} \\begin{aligned} v(\\tau, x) &= \\int{-\\tau}^0 \\mathbb{E} \\left[ f(X^x{s + \\tau}, v(s + T, X^x{s + \\tau}))ds \\right] + \\mathbb{E} \\left[ v(0, X^x{\\tau}) \\right]\\\n            &= - \\int{\\tau}^0 \\mathbb{E} \\left[ f(X^x{\\tau - s}, v(T-s, X^x{\\tau - s}))ds \\right] + \\mathbb{E} \\left[ v(0, X^x{\\tau}) \\right]\\\n            &= \\int{0}^\\tau \\mathbb{E} \\left[ f(X^x{\\tau - s}, v(T-s, X^x{\\tau - s}))ds \\right] + \\mathbb{E} \\left[ v(0, X^x{\\tau}) \\right] \\end{aligned} \\end{equation} $","category":"page"},{"location":"Feynman_Kac.html#Forward-non-linear-Feynman-Kac-2","page":"Feynman Kac formula","title":"Forward non-linear Feynman Kac","text":"","category":"section"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"Consider the PDE $ \\partialt u(t,x) = \\mu(t, x) \\nablax u(t,x) + \\frac{1}{2} \\sigma^2(t, x) \\Delta_x u(t,x) + f(x, u(t,x)) $ with initial conditions u(0 x) = g(x), where u colon R^d to R. ","category":"page"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"then $ \\begin{equation} u(t, x) = \\int0^t \\mathbb{E} \\left[ f(X^x{t - s}, u(T-s, X^x{t - s}))ds \\right] + \\mathbb{E} \\left[ u(0, X^xt) \\right] \\end{equation} $ with  $ \\begin{equation} Xt^x = \\int0^t \\mu(Xs^x)ds + \\int0^t\\sigma(Xs^x)dBs + x, \\end{equation} $","category":"page"},{"location":"Feynman_Kac.html#Neumann-Boundary-conditions","page":"Feynman Kac formula","title":"Neumann Boundary conditions","text":"","category":"section"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"HighDimPDE.jl can handle Eq. (1) with zero-flux boundary conditions (Neumann boundary conditions) on the domain Omega in R^d, that is  $ \\langle \\nabla_x u(t,x) \\cdot \\vec{n} \\rangle = 0 $ where vecn denotes the outer normal vector associated to Omega. ","category":"page"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"Internally, this is done by reflecting the stochastic particles at the boundary of the domains, as reflected brownian motion instead of standard brownian motions allows to account for Neumann Boundary conditions.","category":"page"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"can be solved with the very same scheme as described above, but slightly changing reflecting the particles trajectory X_t^x on the boundary of Omega.","category":"page"},{"location":"Feynman_Kac.html","page":"Feynman Kac formula","title":"Feynman Kac formula","text":"(Image: )","category":"page"},{"location":"DeepSplitting.html#The-DeepSplitting-algorithm","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"","category":"section"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"Modules = [HighDimPDE]\nPages   = [\"DeepSplitting.jl\"]","category":"page"},{"location":"DeepSplitting.html#HighDimPDE.DeepSplitting","page":"The DeepSplitting algorithm","title":"HighDimPDE.DeepSplitting","text":"DeepSplitting(nn, K, opt, mc_sample)\n\nDeep splitting algorithm.\n\nArguments:\n\nnn: a Flux.Chain, or more generally a functor\nK: the number of Monte Carlo integrations\nopt: optimiser to be use. By default, Flux.ADAM(0.1).\nmc_sample::MCSampling : sampling method for Monte Carlo integrations of the non local term. Can be UniformSampling(a,b), NormalSampling(σ_sampling, shifted), or NoSampling (by default).\n\n\n\n\n\n","category":"type"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"The DeepSplitting algorithm reformulates the PDE as a stochastic learning problem.","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"The algorithm relies on two main ideas:","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"the approximation of the solution u by a parametric function bf u^theta. This function is generally chosen as a (Feedforward) Neural Network, as it is universal approximators.\nthe training of bf u^theta by simulated stochastic trajectories of particles, through the link between linear PDEs and the expected trajectory of associated Stochastic Differential Equations (SDEs), explicitly stated by the Feynman Kac formula.","category":"page"},{"location":"DeepSplitting.html#The-general-idea","page":"The DeepSplitting algorithm","title":"The general idea 💡","text":"","category":"section"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"Consider the PDE","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"partial_t u(tx) = mu(t x) nabla_x u(tx) + frac12 sigma^2(t x) Delta_x u(tx) + f(x u(tx))","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"with initial conditions u(0 x) = g(x), where u colon R^d to R. ","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"Recall that the nonlinear Feynman-Kac formula provides a solution in terms of the mean trajectory of the stochastic trajectory of particles  X^x_t ","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"u(t x) = int_0^t mathbbE left f(X^x_t - s u(T-s X^x_t - s))ds right + mathbbE left u(0 X^x_t) right","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"where ","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"X_t^x = int_0^t mu(X_s^x)ds + int_0^tsigma(X_s^x)dB_s + x","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"The Feynman Kac formula is often expressed for terminal condition problems where u(Tx) = g(x). See Ref. for the equivalence between initial condition problems u(0x) = g(x).","category":"page"},{"location":"DeepSplitting.html#Local-Feynman-Kac-formula","page":"The DeepSplitting algorithm","title":"Local Feynman Kac formula","text":"","category":"section"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"DeepSplitting solves the PDE iteratively over small time intervals by using an approximate Feynman-Kac representation locally.","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"More specifically, considering a small time step dt = t_n+1 - t_n one has that","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"u(t_n+1 X_T - t_n+1) approx mathbbE left f(t X_T - t_n u(t_nX_T - t_n))(t_n+1 - t_n) + u(t_n X_T - t_n)  X_T - t_n+1right","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"may be use a simple version u(t{n+1}, X{T - t_{n+1}}) and then talk about this tower property for conditional expectations","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"Notice the similarities between Eq. (1) and Eq. (3).","category":"page"},{"location":"DeepSplitting.html#Reformulation-as-a-learning-problem","page":"The DeepSplitting algorithm","title":"Reformulation as a learning problem","text":"","category":"section"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"The DeepSplitting algorithm approximates u(t_n+1 x) by a parametric function bf u^theta_n(x). It is advised to let this function be a neural network bf u_theta equiv NN_theta as they are universal approximators.","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"For each time step t_n, the DeepSplitting algorithm ","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"Generates the particle trajectories X_t^x over the whole interval 0T\nSeeks bf u_n+1^theta  by minimising the loss function","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"L(theta) = bf u^theta_n+1(X_T - t_n) - left f(t X_T - t_n-1 bf u_n-1(X_T - t_n-1))(t_n - t_n-1) + bf u_n-1(X_T - t_n-1) right ","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"This way the PDE approximation problem is decomposed into a sequence of separate learning problems. In HighDimPDE.jl the right parameter combination theta is found by iteratively minimizing L using stochastic gradient descent.","category":"page"},{"location":"DeepSplitting.html#Solving-point-wise-or-on-a-hypercube","page":"The DeepSplitting algorithm","title":"Solving point-wise or on a hypercube","text":"","category":"section"},{"location":"DeepSplitting.html#Pointwise","page":"The DeepSplitting algorithm","title":"Pointwise","text":"","category":"section"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"In practice, the DeepSplitting allows to obtain u(tx) on a singular point. This is done exactly as described above, and in this case ...","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"prob = PIDEProblem(g, f, μ_f, σ_f, X0, tspan)","category":"page"},{"location":"DeepSplitting.html#Hypercube","page":"The DeepSplitting algorithm","title":"Hypercube","text":"","category":"section"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"Yet more generally, one wants to solve Eq. (1) on a whole interval (hypercube). This is offered by HighDimPDE.jl, when you specify","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"prob = PIDEProblem(g, f, μ, σ, tspan, u_domain = u_domain)","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"Internally, this is handled by assigning a random variable as the initial point of the particles, i.e.","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"X_t^xi = int_0^t mu(X_s^x)ds + int_0^tsigma(X_s^x)dB_s + xi","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"where xi a random variable uniformly distributed over ab^d. This way, the neural network is trained on the whole interval ab^d instead of a single point.","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"tip: Tip\nApproximating over a hypercube demands K ","category":"page"},{"location":"DeepSplitting.html#Accounting-for-non-localness","page":"The DeepSplitting algorithm","title":"Accounting for non-localness","text":"","category":"section"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"An extension of the DeepSplitting method offers to solve for non-local reaction diffusion equations of the type","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"partial_t u = mu(x) nabla_x u + frac12 sigma^2(x) Delta u + int_Omegaf(xy u(tx) u(ty))dy","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"The non-localness is handled by a plain vanilla Monte Carlo integration.","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"beginaligned\nu(t_n+1 X_T - t_n+1)  approx  mathbbE_X big mathbbE_Y big f(t X_T - t_n Y_X_T - t_n u(t_nX_T - t_n) u(t_nY_X_T - t_n))(t_n+1 - t_n) big \n                             quad + u(t_n X_T - t_n)  X_T - t_n+1big\nendaligned","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"In practice, if you have a non-local model you need to provide the sampling method for Y, which is to be given to the algorithm method: ","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"alg = DeepSplitting(nn,\n                    opt = opt,\n                    mc_sample = mc_sample","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"mc_sample can be whether = UniformSampling(u_domain[1], u_domain[2])) or NormalSampling(σ_sampling, centered).","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"choose in HighDimPDE.jl between two different distributions for Y : Normal with ","category":"page"},{"location":"DeepSplitting.html","page":"The DeepSplitting algorithm","title":"The DeepSplitting algorithm","text":"The approximation error of Monte Carlo integrations decreases as 1sqrtN with N the number of samples, and is therefore not dependent on the dimensions. On the other hand, the computational complexity of traditional deterministic techniques grows exponentially in the number of dimensions. ","category":"page"},{"location":"DeepSplitting.html#References","page":"The DeepSplitting algorithm","title":"References","text":"","category":"section"},{"location":"MLP.html#The-MLP-algorithm","page":"The MLP algorithm","title":"The MLP algorithm","text":"","category":"section"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"Modules = [HighDimPDE]\nPages   = [\"MLP.jl\"]","category":"page"},{"location":"MLP.html#HighDimPDE.MLP","page":"The MLP algorithm","title":"HighDimPDE.MLP","text":"MLP( M=4, L=4, K=10, mc_sample = NoSampling())\n\nMulti level Picard algorithm.\n\nArguments:\n\nL: number of Picard iterations (Level),\nM: number of Monte Carlo integrations (at each level l, M^(L-l)integrations),\nK: number of Monte Carlo integrations for the non local term    \nmc_sample::MCSampling : sampling method for Monte Carlo integrations of the non local term. Can be UniformSampling(a,b), NormalSampling(σ_sampling), or NoSampling (by default).\n\n\n\n\n\n","category":"type"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"The MLP, for Multi-Level Picard iterations, reformulates the PDE problem as a fixed point equation through the Feynman Kac formula. ","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"It relies on Picard iterations to find the fixed point, \nreducing the complexity of the numerical approximation of the time integral through a multilvel Monte Carlo approach.","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"The MLP algorithm overcomes the curse of dimensionality, with a computational complexity that grows polynomially in the number of dimension (see M. Hutzenthaler et al. 2020).","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"warning: `MLP` can only solve for one point at a time\nMLP works only with PIDEProblem defined with x = x option). If you want to solve over an entire domain, you definitely want to check the DeepSplitting algorithm.","category":"page"},{"location":"MLP.html#The-general-idea","page":"The MLP algorithm","title":"The general idea 💡","text":"","category":"section"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"Consider the PDE","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"partial_t u(tx) = mu(t x) nabla_x u(tx) + frac12 sigma^2(t x) Delta_x u(tx) + f(x u(tx))","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"with initial conditions u(0 x) = g(x), where u colon R^d to R. ","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"Recall that the nonlinear Feynman-Kac formula provides a solution in terms of the mean trajectory of the stochastic trajectory of particles  X^x_t ","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"u(t x) = int_0^t mathbbE left f(X^x_t - s u(T-s X^x_t - s))ds right + mathbbE left u(0 X^x_t) right","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"where ","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"X_t^x = int_0^t mu(X_s^x)ds + int_0^tsigma(X_s^x)dB_s + x","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"The Feynman Kac formula is often expressed for terminal condition problems where u(Tx) = g(x). See Ref. for the equivalence between initial condition problems u(0x) = g(x).","category":"page"},{"location":"MLP.html#Picard-Iterations","page":"The MLP algorithm","title":"Picard Iterations","text":"","category":"section"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"The MLP algorithm observes that Eq. (1_ can be viewed as a fixed point equation, i.e. u = phi(u). Introducing a sequence (u_k) defined as u_0 = g and ","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"u_{l+1} = \\phi(u_l),","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"the Banach fixed-point theorem ensures that the sequence converges to the true solution u.","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"Such a technique is known as Picard iterations","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"The integral term can be evaluated by a plain vanilla Monte-Carlo integration","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"u_L  = frac1Msum_i^M mathbbE left f(X^x_t - s_i u_L-1(T-s_i X^x_t - s_i)) right + mathbbE left u(0 X^x_t) right","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"But the MLP uses an extra trick to lower the computational cost of the iteration. ","category":"page"},{"location":"MLP.html#Telescope-sum","page":"The MLP algorithm","title":"Telescope sum","text":"","category":"section"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"The MLP algorithm uses a telescope sum ","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"beginaligned\nu_L = phi(u_L-1) = phi(u_L-1) - phi(u_L-2) + phi(u_L-2) - phi(u_L-3) + dots \n= sum_l=1^L-1 phi(u_l-1) - phi(u_l-2)\nendaligned","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"As l grows, the term phi(u_l-1) - phi(u_l-2) becomes smaller - and demands more calculations. The MLP algorithm usses this fact by evaluating the integral term at level l with M^L-l samples.","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"tip: Tip\nL corresponds to the level of the approximation, i.e. u approx u_L\nM characterises the number of samples for the monte carlo approximation of the time integral","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"beginaligned\nu_L = sum_l=1^L-1 frac1M^L-lsum_i^M^L-l left f(X^x(l i)_t - s_(l i) u(T-s_(l i) X^x(l i)_t - s_(l i))) + 1_N(l) f(X^x(l i)_t - s_(l i) u(T-s_(l i) X^x(l i)_t - s_(l i)))right\n\nqquad + frac1M^Lsum_i^M^L u(0 X^x(l i)_t)\nendaligned","category":"page"},{"location":"MLP.html#Accounting-for-non-localness","page":"The MLP algorithm","title":"Accounting for non-localness","text":"","category":"section"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"Similar to the DeepSplitting algorithm, MLP offers to solve for non-local reaction diffusion equations of the type","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"partial_t u = mu(t x) nabla_x u(t x) + frac12 sigma^2(t x) Delta u(t x) + int_Omegaf(x y u(tx) u(ty))dy","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"The non-localness is again handled by a plain vanilla Monte Carlo integration.","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"beginaligned\nu_L = sum_l=1^L-1 frac1M^L-lsum_i=1^M^L-l frac1Ksum_j=1^K  bigg f(X^x(l i)_t - s_(l i) Z^(lj) u(T-s_(l i) X^x(l i)_t - s_(l i)) u(T-s_li Z^(lj))) + \nqquad \n1_N(l) f(X^x(l i)_t - s_(l i) u(T-s_(l i) X^x(l i)_t - s_(l i)))bigg + frac1M^Lsum_i^M^L u(0 X^x(l i)_t)\nendaligned","category":"page"},{"location":"MLP.html","page":"The MLP algorithm","title":"The MLP algorithm","text":"tip: Tip\nK characterises the number of samples for the Monte Carlo approximation of the last term.\nmc_sample characterises the distribution of the Z variables","category":"page"},{"location":"MLP.html#References","page":"The MLP algorithm","title":"References","text":"","category":"section"},{"location":"index.html#HighDimPDE.jl","page":"Home","title":"HighDimPDE.jl","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"HighDimPDE.jl is a Julia package to solve Highly Dimensional non-linear, non-local PDEs of the form","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"where u colon Omega to R, Omega subset R^d subject to initial and boundary conditions.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"HighDimPDE.jl implements schemes that break down the curse of dimensionality, including","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"the Deep BSDE scheme\nthe Deep Splitting scheme\nthe Multi-Level Picard iterations scheme.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"To make the most out of HighDimPDE.jl, we advise to first have a look at the ","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"documentation on the Feynman Kac formula,","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"as both schemes heavily rely on it.","category":"page"},{"location":"index.html#Algorithm-overview","page":"Home","title":"Algorithm overview","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"Features DeepSplitting MLP\nTime discretization free ❌ ✅\nMesh-free ✅ ✅\nHypercube approximation ✅ ❌\nCPU ✅ ❌","category":"page"}]
}
