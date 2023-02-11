'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ReactSwitch from 'react-switch';
import Card from '../../components/Card';

const plans = [
  {
    id: 1,
    label: 'Arcade',
    iconSrc: '/icon-arcade.svg',
    monthlyPrice: 9,
    yearlyPrice: 90,
  },
  {
    id: 2,
    label: 'Advanced',
    iconSrc: '/icon-advanced.svg',
    monthlyPrice: 12,
    yearlyPrice: 120,
  },
  {
    id: 3,
    label: 'Pro',
    iconSrc: '/icon-pro.svg',
    monthlyPrice: 15,
    yearlyPrice: 150,
  },
];

interface Plan {
  id: number;
  label: string;
  iconSrc: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

function SelectPlan() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>({
    id: 1,
    label: 'Arcade',
    iconSrc: '/icon-arcade.svg',
    monthlyPrice: 9,
    yearlyPrice: 90,
  });
  const [checked, setChecked] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (Cookies.get('plan')) {
      setSelectedPlan(JSON.parse(Cookies.get('plan')!));
    }
    if (Cookies.get('yearly')) {
      setChecked(JSON.parse(Cookies.get('yearly')!));
    }
  }, []);

  function choosePlanHandler(plan: Plan) {
    setSelectedPlan(plan);
  }

  function priceHandler() {
    setChecked((prevState) => !prevState);
  }

  function nextStepHandler() {
    Cookies.set('yearly', JSON.stringify(checked));
    Cookies.set('plan', JSON.stringify(selectedPlan));
    router.push('/add-ons');
  }

  function goBackHandler() {
    router.push('/');
  }

  return (
    <div className='p-6 md:p-4 md:pt-12'>
      <h1 className='text-3xl text-marine-blue font-bold'>Select Your Plan</h1>
      <p className='text-xl text-cool-gray my-4'>
        You have the option of monthly or yearly billing.
      </p>
      <div className='flex flex-col space-y-4 md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-4'>
        {plans.map((plan) => (
          <Card
            key={plan.id}
            label={plan.label}
            iconSrc={plan.iconSrc}
            price={checked ? plan.yearlyPrice : plan.monthlyPrice}
            onClick={() => choosePlanHandler(plan)}
            active={selectedPlan ? selectedPlan.id === plan.id : true}
            yearly={checked}
          />
        ))}
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
            onChange={priceHandler}
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

      <div className='flex justify-between items-center pt-6 md:py-4 lg:py-12'>
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

export default SelectPlan;
