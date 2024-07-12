import React, { useState } from 'react';
import GenderCheck from './GenderCheck';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
  const [inputs, setInput] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInput({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(inputs.fullName, inputs.username, inputs.password, inputs.confirmPassword, inputs.gender);
      // Handle successful signup, e.g., navigate to another page
    } catch (err) {
      // Handle error (if necessary, though the hook should already handle it)
      console.error('Signup error:', err);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up<span className='text-blue-500'> TawkBox</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type="text"
              placeholder='Random'
              className='w-full input input-bordered h-10'
              value={inputs.fullName}
              onChange={(e) => setInput({ ...inputs, fullName: e.target.value })}
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type="text"
              placeholder='randomxyz'
              className='w-full input input-bordered h-10'
              value={inputs.username}
              onChange={(e) => setInput({ ...inputs, username: e.target.value })}
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type="password"
              placeholder='Enter Password'
              className='w-full input input-bordered h-10'
              value={inputs.password}
              onChange={(e) => setInput({ ...inputs, password: e.target.value })}
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder='Confirm Password'
              className='w-full input input-bordered h-10'
              value={inputs.confirmPassword}
              onChange={(e) => setInput({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>
          <GenderCheck onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
          <Link to={"/login"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            Already have an account?
          </Link>
          <div>
            <button type='submit' className='btn btn-block btn-sm mt-2 border-slate-700' disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
