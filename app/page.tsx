'use client'

import Image from 'next/image';
import React, { useRef } from 'react';
import SectionStepGroup from '../components/SectionStepGroup';

function HomePage() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <div className='md:w-[60vw] md:h-[60vh]'>
      <header className='relative w-full h-[30vh] md:w-[20vw] md:h-[70vh]'>
        <Image
          src={
            windowSize.current[0] > 468
              ? '/bg-sidebar-mobile.svg'
              : '/bg-sidebar-desktop.svg'
          }
          alt='img'
          className='object-bottom object-cover md:rounded-md'
          fill
        />
        <SectionStepGroup active={1} />
      </header>
    </div>
  );
}

export default HomePage;
