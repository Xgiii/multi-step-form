'use client';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import AddOnsCard from '../../components/AddOnsCard';

function AddOnsPage() {
  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);
  const [yearly, setYearly] = useState(false);

  const router = useRouter()

  useEffect(() => {
    if (Cookies.get('yearly')) {
      setYearly(JSON.parse(Cookies.get('yearly')!));
    } else {
      router.push('select-plan')
    }

    if (Cookies.get('online-service')) {
      setOnlineService(JSON.parse(Cookies.get('online-service')!));
    }

    if (Cookies.get('larger-storage')) {
      setLargerStorage(JSON.parse(Cookies.get('larger-storage')!));
    }

    if (Cookies.get('customizable-profile')) {
      setCustomizableProfile(JSON.parse(Cookies.get('customizable-profile')!));
    }
  }, []);

  function nextStepHandler() {
    Cookies.set('online-service', JSON.stringify(onlineService));
    Cookies.set('larger-storage', JSON.stringify(largerStorage));
    Cookies.set('customizable-profile', JSON.stringify(customizableProfile));

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
        active={onlineService}
        onClick={() => setOnlineService((prevState) => !prevState)}
        label='Online service'
        price={yearly ? 10 : 1}
        yearly={yearly}
        description='Access to multiplayer games'
      />
      <AddOnsCard
        active={largerStorage}
        onClick={() => setLargerStorage((prevState) => !prevState)}
        label='Larger storage'
        price={yearly ? 20 : 2}
        yearly={yearly}
        description='Extra 1TB of cloud save'
      />
      <AddOnsCard
        active={customizableProfile}
        onClick={() => setCustomizableProfile((prevState) => !prevState)}
        label='Customizable profile'
        price={yearly ? 20 : 2}
        yearly={yearly}
        description='Custom theme on your profile'
      />
      <div className='flex justify-between items-center pt-8 md:py-4 lg:py-10'>
        <button
          onClick={goBackHandler}
          className='text-cool-gray font-bold hover:text-marine-blue'
        >
          Go Back
        </button>
        <button onClick={nextStepHandler} className='main-btn'>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default AddOnsPage;
