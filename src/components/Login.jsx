import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.js';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully!');
      navigate('/home');
    } catch (error) {
      alert(setError(error.message));
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
      <form
        onSubmit={handleLogin}
        className="flex  flex-col justify-center items-center  shadow-2xl p-7 gap-6 w-1/4 rounded-2xl"
      >
        <h2 className="mb-10 text-xl font-bold font-serif">Login Form</h2>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="Email" className="text-lg fonr-bold font-serif">
            Email ID
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="outline-none border-b-2 text-md text-neutral-400 font-semibold"
            required
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="Password" className="text-lg fonr-bold font-serif">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="outline-none border-b-2 text-md text-neutral-400 font-semibold"
            required
          />
        </div>
        <button
          type="submit"
          className="text-md text-white font-snas font-semibold bg-blue-500 p-2 px-5 rounded-lg"
        >
          Login
        </button>
        <p>
          If you don&apos;t have already account
          <Link to="/" className="underline text-md font-bold">
            Register
          </Link>
        </p>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
