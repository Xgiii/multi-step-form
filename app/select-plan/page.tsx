'use client';

import { useState } from 'react';
import Card from '../../components/Card';

function SelectPlan() {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <div className='p-6 md:p-12'>
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
          price={9}
        />
        <Card
          label='Advanced'
          active={activeCard === 2}
          onClick={() => setActiveCard(2)}
          iconSrc='/icon-advanced.svg'
          price={12}
        />
        <Card
          label='Pro'
          active={activeCard === 3}
          onClick={() => setActiveCard(3)}
          iconSrc='/icon-pro.svg'
          price={15}
        />
      </div>
    </div>
  );
}

export default SelectPlan;
