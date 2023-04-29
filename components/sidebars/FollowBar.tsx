import * as React from 'react';

interface IFollowBarProps {
}

const FollowBar: React.FunctionComponent<IFollowBarProps> = (props) => {
  return (
    <div className='px2 md:px-6 py-4 hidden lg:block'>
      <div className='bg-neutral-800 rounded-xl px-4 pt-3 pb-4'>
        <h2 className='text-white text-xl font-semibold'>
          Who to follow
        </h2>
      </div>
    </div>
  );
};

export default FollowBar;
