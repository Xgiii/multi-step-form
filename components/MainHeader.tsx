'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import SectionStepGroup from './SectionStepGroup';

function MainHeader() {
  const [step, setStep] = useState(1);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      setStep(1);
    } else if (pathname === '/select-plan') {
      setStep(2);
    } else if (pathname === '/add-ons') {
      setStep(3);
    } else if (pathname === '/summary') {
      setStep(4);
    }
  }, [pathname]);

  return (
    <header className='relative w-full h-[30vh] md:w-[30vw] lg:w-[20vw] md:h-[66vh]'>
      <Image
        src='/bg-sidebar-mobile.svg'
        alt='img'
        className='object-bottom object-cover md:rounded-md md:hidden'
        fill
      />
      <Image
        src='/bg-sidebar-desktop.svg'
        alt='img'
        className='hidden object-bottom object-cover md:rounded-md md:block'
        fill
      />
      <SectionStepGroup step={step} />
    </header>
  );
}

export default MainHeader;
