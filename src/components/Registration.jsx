import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebase.js';
import { Link } from 'react-router-dom';
function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert('Signup successful!');
      const user = userCredential.user;
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        username: username,
        email: email,
      });
    } catch (error) {
      alert(setError(error.message));
    }
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
      <form
        onSubmit={handleSignup}
        className="flex  flex-col justify-center items-center  shadow-2xl p-7 gap-6 w-1/4 rounded-2xl"
      >
        <h2 className="mb-10 text-xl font-bold font-serif">Signup Form</h2>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="Username" className="text-lg fonr-bold font-serif">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="outline-none border-b-2 text-md text-neutral-400 font-semibold"
            required
          />
        </div>
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
          Signup
        </button>
        <p>
          If you have already account{' '}
          <Link to="/login" className="underline text-md font-bold">
            Login
          </Link>
        </p>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Registration;
