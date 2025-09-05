import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { register, signIntWithGoogle, updateuser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, name, photo } = Object.fromEntries(formData.entries());

        const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if (!passPattern.test(password)) {
            const msg =
                'Password must have at least 1 uppercase, 1 lowercase, 1 digit, and be at least 6 characters.';
            setError(msg);
            toast.error(msg);
            return;
        }

        register(email, password)
            .then(() => {
                setError(null);
                updateuser({ displayName: name, photoURL: photo })
                    .then(() => {
                        toast.success("Account created successfully! 🎉");
                        navigate('/');
                    })
                    .catch((err) => {
                        setError(err.message);
                        toast.error(err.message);
                    });
                form.reset();
            })
            .catch((err) => {
                setError(err.message);
                toast.error(err.message);
            });
    };

    const handleGoogleSignUp = () => {
        signIntWithGoogle()
            .then(() => {
                toast.success("Signed in with Google ✅");
            })
            .catch((err) => {
                setError(err.message);
                toast.error(err.message);
            });
    };

    return (
        <div className="lg:min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md p-8 shadow-lg bg-secondary-content rounded-lg">
                <h2 className="text-3xl font-bold text-center text-white mb-6">
                    Create an Account
                </h2>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-white mb-1">Name</label>
                        <input name="name" type="text" className="input bg-neutral input-bordered w-full" placeholder="Your name" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white mb-1">Photo URL</label>
                        <input name="photo" type="text" className="input input-bordered bg-neutral w-full" placeholder="Photo URL" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white mb-1">Email</label>
                        <input name="email" type="email" className="input input-bordered bg-neutral w-full" placeholder="example@mail.com" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white mb-1">Password</label>
                        <input name="password" type="password" className="input input-bordered bg-neutral w-full" placeholder="••••••••" required />
                    </div>

                    <button type="submit" className="btn bg-[#e78534] text-white w-full">
                        Register
                    </button>

                    <div className="divider text-sm text-gray-500">OR</div>

                    <button
                        type="button"
                        onClick={handleGoogleSignUp}
                        className="btn w-full flex items-center gap-3 border bg-[#e78534] text-white hover:bg-[#d97520]"
                    >
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google logo"
                            className="w-5 h-5"
                        />
                        Continue with Google
                    </button>

                    <p className="text-sm mt-4 text-center text-gray-300">
                        Already have an account?{' '}
                        <Link to="/login" className="text-[#1A4D2E] font-medium underline">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
