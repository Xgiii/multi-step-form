import React from 'react';

function AddOnsCard(props: {
  description: string;
  onClick: any;
  active: boolean;
  label: string;
  price: number;
  yearly: boolean;
}) {
  return (
    <div
      onClick={props.onClick}
      className={`w-full lg:min-w-[500px] border border-light-gray rounded-md p-4 px-6 cursor-pointer flex items-center justify-between hover:border-purplish-blue ${
        props.active && 'border-purplish-blue bg-magnolia'
      }`}
    >
      <div className='flex space-x-6'>
        <input
          type='checkbox'
          checked={props.active}
          className='scale-150 bg-purplish-blue'
        />
        <div className='flex flex-col'>
          <h2 className='text-xl text-marine-blue font-bold'>{props.label}</h2>
          <p className='text-cool-gray'>{props.description}</p>
        </div>
      </div>
      <p className='text-purplish-blue'>
        +${props.price}/{props.yearly ? 'ye' : 'mo'}
      </p>
    </div>
  );
}

export default AddOnsCard;
