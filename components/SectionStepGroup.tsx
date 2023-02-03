import { useEffect, useState } from 'react';
import SectionStepCircle from './SectionStepCircle';

function SectionStepGroup({step}: {step: number}) {

  return (
    <div className='flex justify-center items-center space-x-6 pt-10 md:flex-col md:space-x-0 md:space-y-4'>
      <SectionStepCircle
        active={step === 1}
        step={1}
        label='Your Info'
      />
      <SectionStepCircle
        active={step === 2}
        step={2}
        label='Select Plan'
      />
      <SectionStepCircle
        active={step === 3}
        step={3}
        label='Add-Ons'
      />
      <SectionStepCircle
        active={step === 4}
        step={4}
        label='Summary'
      />
    </div>
  );
}

export default SectionStepGroup;
