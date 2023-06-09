import { useRouter } from 'next/router';
import { BsTwitter } from 'react-icons/bs';
import * as React from 'react';


const SideBarLogo: React.FunctionComponent = () => {
  const router = useRouter();

  return (
    <div 
    onClick={() => router.push('/')}
    className='
      mt-1
      mb-4
      rounded-full
      h-14
      w-14
      p-4
      flex
      items-center
      justify-center
      hover:bg-blue-300
      hover:bg-opacity-10
      cursor-pointer
      transition
    '>
      <BsTwitter size={28} color='white' />
    </div>
  );
};

export default SideBarLogo;