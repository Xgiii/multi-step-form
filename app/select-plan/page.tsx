'use client';

import { useState } from 'react';
import ReactSwitch from 'react-switch';
import Card from '../../components/Card';

function SelectPlan() {
  const [activeCard, setActiveCard] = useState(1);
  const [checked, setChecked] = useState(false);

  return (
    <div className='p-6 md:px-12 md:pt-12'>
      <h1 className='text-3xl text-marine-blue font-bold'>Select Your Plan</h1>
      <p className='text-xl text-cool-gray my-4'>
        You have the option of monthly or yearly billing.
      </p>
      <div className='flex flex-col space-y-4 md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-4'>
        <Card
          label='Arcade'
          active={activeCard === 1}
          onClick={() => setActiveCard(1)}
          iconSrc='/icon-arcade.svg'
          price={checked ? 90 : 9}
          yearly={checked}
        />
        <Card
          label='Advanced'
          active={activeCard === 2}
          onClick={() => setActiveCard(2)}
          iconSrc='/icon-advanced.svg'
          price={checked ? 120 : 12}
          yearly={checked}
        />
        <Card
          label='Pro'
          active={activeCard === 3}
          onClick={() => setActiveCard(3)}
          iconSrc='/icon-pro.svg'
          price={checked ? 150 : 15}
          yearly={checked}
        />
      </div>
      <div className='bg-magnolia flex items-center justify-center space-x-12 rounded-md mt-8 h-12'>
        <h2
          className={`font-bold ${
            !checked ? 'text-marine-blue' : 'text-cool-gray'
          }`}
        >
          Monthly
        </h2>
        <label>
          <ReactSwitch
            onChange={(nextChecked) => setChecked(nextChecked)}
            checked={checked}
            onColor='#02295a'
            offColor='#02295a'
            checkedIcon={false}
            uncheckedIcon={false}
            width={44}
            height={22}
            className='mt-2 outline-none'
          />
        </label>
        <h2
          className={`font-bold ${
            checked ? 'text-marine-blue' : 'text-cool-gray'
          }`}
        >
          Yearly
        </h2>
      </div>
      <div className='flex justify-between pt-[4vh] md:hidden'>
        <button className='text-cool-gray font-bold hover:text-marine-blue'>
          Go Back
        </button>
        <button className='main-btn'>Next Step</button>
      </div>

      <div className='hidden md:flex justify-between items-center md:py-4 lg:py-12'>
        <button className='text-cool-gray font-bold hover:text-marine-blue'>
          Go Back
        </button>
        <button className='main-btn'>Next Step</button>
      </div>
    </div>
  );
}

export default SelectPlan;
