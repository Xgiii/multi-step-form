'use client'
import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react';

function HomePage() {
  const router = useRouter();

  function nextStepHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push('/select-plan');
  }

  return (
    <>
      <div className='p-6 py-8 md:p-12'>
        <h1 className='text-3xl text-marine-blue font-bold'>Personal info</h1>
        <p className='text-xl text-cool-gray my-4'>
          Please provide your name, email address and phone number.
        </p>
        <form className='space-y-4' onSubmit={nextStepHandler}>
          <div className='flex flex-col'>
            <label htmlFor='name' className='text-marine-blue'>
              Name
            </label>
            <input
              type='text'
              id='name'
              placeholder='e.g. Stephen King'
              className='border border-cool-gray p-3 rounded-md outline-marine-blue'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email' className='text-marine-blue'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              placeholder='e.g. stephen.king@lorem.com'
              className='border border-cool-gray p-3 rounded-md outline-marine-blue'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='phone' className='text-marine-blue'>
              Phone Number
            </label>
            <input
              type='text'
              id='phone'
              placeholder='e.g. +1 234 567 890'
              className='border border-cool-gray p-3 rounded-md outline-marine-blue'
            />
          </div>
          <div className='absolute bottom-[-27vh] left-[-10vw] w-[105vw] h-[10vh] bg-white md:hidden'>
            <div className='flex justify-end px-[5vw] py-[2vh]'>
              <button className='main-btn'>Next Step</button>
            </div>
          </div>
          <div className='hidden md:flex justify-end md:py-4 lg:py-12'>
            <button className='main-btn'>Next Step</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default HomePage;
