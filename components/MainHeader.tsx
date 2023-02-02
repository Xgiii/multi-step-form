import Image from 'next/image';
import React from 'react';
import SectionStepGroup from './SectionStepGroup';

function MainHeader() {
  return (
    <header className='relative w-full h-[30vh] md:w-[20vw] md:h-[66vh]'>
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
      <SectionStepGroup />
    </header>
  );
}

export default MainHeader;
