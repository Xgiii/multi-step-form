import Image from 'next/image';

function Card(props: {
  onClick: any;
  active: boolean;
  label: string;
  iconSrc: string;
  price: number;
}) {
  return (
    <div
      onClick={props.onClick}
      className={`w-full lg:w-40 border border-light-gray rounded-md p-6 cursor-pointer flex space-x-4 md:flex-col md:space-y-8 md:space-x-0 ${
        props.active && 'border-purplish-blue bg-magnolia'
      }`}
    >
      <Image src={props.iconSrc} alt='icon' width={48} height={48} />
      <div className='flex flex-col'>
        <h2 className='text-xl text-marine-blue font-bold'>{props.label}</h2>
        <p className='text-cool-gray'>${props.price}/mo</p>
      </div>
    </div>
  );
}

export default Card;
