'use client';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface Plan {
  id: number;
  label: string;
  iconSrc: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

function SummaryPage() {
  const [plan, setPlan] = useState<Plan | undefined>();
  const [yearly, setYearly] = useState(false);
  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (Cookies.get('yearly')) {
      setYearly(JSON.parse(Cookies.get('yearly')!));
    }
    if (Cookies.get('plan')) {
      setPlan(JSON.parse(Cookies.get('plan')!));
    } else {
      router.push('/');
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

  return (
    <div className='p-6 md:p-4 md:pt-12'>
      <h1 className='text-3xl text-marine-blue font-bold'>Finishing up</h1>
      <p className='text-xl text-cool-gray my-4'>
        Double-check everything looks OK before confirming.
      </p>
      <div className='bg-magnolia p-6 rounded-md'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <h2 className='font-bold text-marine-blue'>
              {plan?.label} ({yearly ? 'Yearly' : 'Monthly'})
            </h2>
            <p className='text-cool-gray underline cursor-pointer'>Change</p>
          </div>
          <p className='font-bold text-marine-blue'>
            ${yearly ? plan?.yearlyPrice : plan?.monthlyPrice}/
            {yearly ? 'yr' : 'mo'}
          </p>
        </div>
        <hr className='text-light-gray my-4' />
        {onlineService && (
          <div className='flex justify-between my-2'>
            <p className='text-cool-gray'>Online Service</p>
            <p className='text-marine-blue'>
              +${yearly ? 10 : 1}/{yearly ? 'yr' : 'mo'}
            </p>
          </div>
        )}
        {largerStorage && (
          <div className='flex justify-between my-2'>
            <p className='text-cool-gray'>Larger Storage</p>
            <p className='text-marine-blue'>
              +${yearly ? 20 : 2}/{yearly ? 'yr' : 'mo'}
            </p>
          </div>
        )}
        {customizableProfile && (
          <div className='flex justify-between my-2'>
            <p className='text-cool-gray'>Customizable Profile</p>
            <p className='text-marine-blue'>
              +${yearly ? 20 : 2}/{yearly ? 'yr' : 'mo'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SummaryPage;
