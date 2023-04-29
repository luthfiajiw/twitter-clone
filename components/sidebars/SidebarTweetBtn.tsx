import * as React from 'react';
import { FaFeather } from 'react-icons/fa';

const SidebarTweetBtn: React.FunctionComponent = () => {
  return (
    <div>
      {/* Mobile Ver */}
      <div className='
        mt-6
        lg:hidden
        rounded-full
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center
        bg-sky-500
        hover:bg-opacity-80
        transition
        cursor-pointer
      '>
        <FaFeather size={22} color='white' />
      </div>
      {/* ============== */}

      {/* Desktop Ver */}
      <div className='
        mt-6
        hidden
        lg:block
        px-4
        pt-2
        pb-3
        rounded-full
        bg-sky-500
        hover:bg-opacity-90
        cursor-pointer
        transition
      '>
        <p className='
          hidden
          lg:block
          text-center
          font-semibold
          text-white
          text-[20px]
        '>
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetBtn;
