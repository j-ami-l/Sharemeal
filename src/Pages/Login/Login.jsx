import React, { use, useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  const location = useLocation()
  const { login, signIntWithGoogle } = useContext(AuthContext)

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then(result => {
        console.log(result);
        navigate(from, { replace: true });
      })
      .catch(err => {
        console.log(err);

      })

  };

  const handleGoogleSignUp = () => {
    signIntWithGoogle()
      .then(result => {
        console.log(result);
        navigate(from, { replace: true });
      })
      .catch(err => {
        console.log(err);

      })
  };

  return (
    <div className="lg:min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-md p-8 shadow-lg bg-secondary-content rounded-lg">
        <h2 className="text-3xl font-bold text-center color-primary mb-6">
          Sign in to Your Account
        </h2>

        {error && (
          <div className="text-red-500 text-sm mb-4 text-center border border-red-300 p-2 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-accent-content mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="input bg-neutral input-bordered w-full"
              placeholder="example@mail.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-accent-content mb-1">Password</label>
            <input
              name="password"
              type="password"
              className="input bg-neutral input-bordered w-full"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <Link to={'/resetPass'} className="link link-hover text-primary className='text-[11px] md:text-[15px]'">Forgot password?</Link>
            <span className='text-[11px] text-primary md:text-[15px]'>
              Don’t have an account?{' '}
              <Link to="/signup" className="text-blue-400 font-medium underline">
                Register
              </Link>
            </span>
          </div>

          <button
            type="submit"
            className="btn bg-[#e78534] text-white w-full "
          >
            Login
          </button>

          <div className="divider text-sm text-gray-500">OR</div>

          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="btn w-full flex items-center bg-neutral gap-3 border hover:bg-[#e78534] hover:text-white"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google logo"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;