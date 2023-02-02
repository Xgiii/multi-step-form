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
    <div className='flex justify-center items-center text-white z-10'>
      <div
        className={`w-8 h-8 flex justify-center items-center border border-white rounded-full font-bold ${
          active && 'bg-light-blue text-marine-blue'
        } `}
      >
        {step}
      </div>
      <div className='flex-col hidden md:flex'>
        <p className='text-cool-gray'>STEP {step}</p>
        <p className='font-bold uppercase'>{label}</p>
      </div>
    </div>
  );
}

export default SectionStepCircle;
