'use client';
import SectionStepCircle from './SectionStepCircle';

function SectionStepGroup() {
  return (
    <div className='flex justify-center items-center space-x-6 pt-10 md:flex-col md:space-x-0 md:space-y-4'>
      <SectionStepCircle
        active={window.location.href === 'http://localhost:3000/'}
        step={1}
        label='Your Info'
      />
      <SectionStepCircle
        active={window.location.href === 'http://localhost:3000/select-plan'}
        step={2}
        label='Select Plan'
      />
      <SectionStepCircle
        active={window.location.href === 'http://localhost:3000/add-ons'}
        step={3}
        label='Add-Ons'
      />
      <SectionStepCircle
        active={window.location.href === 'http://localhost:3000/summary'}
        step={4}
        label='Summary'
      />
    </div>
  );
}

export default SectionStepGroup;
