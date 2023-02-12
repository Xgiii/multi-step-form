'use client';
import Cookies from 'js-cookie';
import Image from 'next/image';
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
  const [confirmedScreen, setConfirmedScreen] = useState(false);

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

  function calculatePrice() {
    let price;

    const onlineServicePrice = yearly ? 10 : 1;
    const largerStoragePrice = yearly ? 20 : 2;
    const customizableProfilePrice = yearly ? 20 : 2;

    if (plan) {
      price =
        (yearly ? plan.yearlyPrice : plan.monthlyPrice) +
        (onlineService ? onlineServicePrice : 0) +
        (largerStorage ? largerStoragePrice : 0) +
        (customizableProfile ? customizableProfilePrice : 0);
    }

    return price;
  }

  function confirmHandler() {
    Cookies.remove('plan');
    Cookies.remove('yearly');
    Cookies.remove('online-service');
    Cookies.remove('larger-storage');
    Cookies.remove('customizable-profile');

    setConfirmedScreen(true);
  }

  function goBackHandler() {
    router.push('/add-ons');
  }

  function changePlanHandler() {
    router.push('/select-plan');
  }

  if (confirmedScreen) {
    return (
      <div className='flex justify-center items-center flex-col py-40 md:pt-32 p-6 space-y-4'>
        <Image
          src='/icon-thank-you.svg'
          alt='thanks icon'
          width={70}
          height={70}
        />
        <h1 className='pb-4 md:mb-0 text-3xl font-bold'>Thank you!</h1>
        <p className='text-cool-gray md:px-24 my-4 text-center'>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    );
  }

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
            <p
              onClick={changePlanHandler}
              className='text-cool-gray underline cursor-pointer'
            >
              Change
            </p>
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
      <div className='flex justify-between px-6 my-4'>
        <p className='text-cool-gray'>
          Total ({yearly ? 'per year' : 'per month'})
        </p>
        <p className='text-xl font-bold text-purplish-blue'>
          +${calculatePrice()}/{yearly ? 'yr' : 'mo'}
        </p>
      </div>{' '}
      <div className='flex justify-between items-center mt-12 md:mt-6 md:py-4 lg:py-10'>
        <button
          onClick={goBackHandler}
          className='text-cool-gray font-bold hover:text-marine-blue'
        >
          Go Back
        </button>
        <button
          onClick={confirmHandler}
          className='text-white bg-purplish-blue px-5 py-2 lg:px-8 lg:py-3 rounded-md'
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default SummaryPage;
