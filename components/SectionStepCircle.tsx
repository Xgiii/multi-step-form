import React from 'react';

function SectionStepCircle({
  step,
  label,
  active,
}: {
  step: number;
  label: string;
  active?: boolean;
}) {
  return (
    <div className='flex items-center justify-center text-white z-10 md:w-64 md:justify-start md:px-12'>
      <div
        className={`w-8 h-8 flex justify-center items-center border border-white rounded-full font-bold ${
          active && 'bg-light-blue text-marine-blue'
        } `}
      >
        {step}
      </div>
      <div className='flex-col hidden md:flex ml-2'>
        <p className='text-cool-gray tracking-wider'>STEP {step}</p>
        <p className='font-bold uppercase'>{label}</p>
      </div>
    </div>
  );
}

export default SectionStepCircle;
