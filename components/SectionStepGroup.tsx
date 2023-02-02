import React from 'react';
import SectionStepCircle from './SectionStepCircle';

function SectionStepGroup({active}: {active: number}) {
  return (
    <div className='flex md:flex-col justify-center items-center space-x-6 pt-10'>
      <SectionStepCircle active={active === 1} step={1} label='Your Info' />
      <SectionStepCircle active={active === 2} step={2} label='Select Plan' />
      <SectionStepCircle active={active === 3} step={3} label='Add-Ons' />
      <SectionStepCircle active={active === 4} step={4} label='Summary' />
    </div>
  );
}

export default SectionStepGroup;
