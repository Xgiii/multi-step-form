'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AddOnsCard from '../../components/AddOnsCard';

function AddOnsPage() {
  const [onlineServices, setOnlineServices] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);

  const router = useRouter();

  function nextStepHandler() {
    router.push('/summary');
  }

  function goBackHandler() {
    router.push('/select-plan');
  }

  return (
    <div className='p-6 md:px-12 md:pt-12 space-y-2'>
      <h1 className='text-3xl text-marine-blue font-bold'>Pick add-ons</h1>
      <p className='text-xl text-cool-gray pb-4 md:my-4'>
        Add-ons help enhance your gaming experience.
      </p>
      <AddOnsCard
        active={onlineServices}
        onClick={() => setOnlineServices((prevState) => !prevState)}
        label='Online service'
        price={1}
        yearly={false}
        description='Access to multiplayer games'
      />
      <AddOnsCard
        active={largerStorage}
        onClick={() => setLargerStorage((prevState) => !prevState)}
        label='Larger storage'
        price={2}
        yearly={false}
        description='Extra 1TB of cloud save'
      />
      <AddOnsCard
        active={customizableProfile}
        onClick={() => setCustomizableProfile((prevState) => !prevState)}
        label='Customizable profile'
        price={2}
        yearly={false}
        description='Custom theme on your profile'
      />
      <div className='flex justify-between items-center pt-8 md:py-4 lg:py-10'>
        <button
            onClick={goBackHandler}
          className='text-cool-gray font-bold hover:text-marine-blue'
        >
          Go Back
        </button>
        <button
           onClick={nextStepHandler}
          className='main-btn'
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default AddOnsPage;
