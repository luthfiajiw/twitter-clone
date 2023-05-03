import useUsers from '@/hooks/useUsers';
import * as React from 'react';
import Avatar from '../Avatar';

interface IFollowBarProps {
}

const FollowBar: React.FunctionComponent<IFollowBarProps> = (props) => {
  const {data: users = []} = useUsers()

  if (users.length < 1) {
    return null;
  }

  return (
    <div className='px2 md:px-6 py-4 hidden lg:block'>
      <div className='bg-neutral-600 rounded-xl px-4 pt-3 pb-4'>
        <h2 className='text-white text-xl font-semibold'>
          Who to follow
        </h2>
        {/* USER LIST */}
        <div className='flex flex-col gap-6 mt-4'>
          {users.map((user: Record<string, any>) => {
            return (
              <div
                key={user.id}
                className='flex flex-row gap-4'
              >
                <Avatar userId={user.id} />
                <div className='flex flex-col '>
                  <p className='text-white font-semibold'>
                    {user.name}
                  </p>
                  <p className='text-neutral-300 text-sm'>
                    @{user.username}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
