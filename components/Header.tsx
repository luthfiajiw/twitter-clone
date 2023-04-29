import { useRouter } from 'next/router';
import * as React from 'react';
import { useCallback } from 'react';
import { BiArrowBack } from 'react-icons/bi';

interface IHeaderProps {
  label: string
  showBackArrow?: boolean
}

const Header: React.FC<IHeaderProps> = (props) => {
  const router = useRouter()

  const handleBack = useCallback(() => {
    router.back()
  }, [router])

  return (
    <div className='border-b-[1px] border-neutral-700 px-5 pt-4 pb-5'>
      <div className='flex flex-row items-center gap-4'>
        {
          props.showBackArrow && (
            <BiArrowBack
              onClick={handleBack}
              color='white'
              size={22}
              className='cursor-pointer hover:opacity-70 transition pt-0.5'
            />
          )
        }
        <h1 className='text-white text-xl font-semibold'>
          {props.label}
        </h1>
      </div>
    </div>
  );
};

export default Header;
