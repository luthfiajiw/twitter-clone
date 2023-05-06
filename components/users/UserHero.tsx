import useUser from '@/hooks/useUser';
import Image from 'next/image';
import * as React from 'react';
import Avatar from '../Avatar';

interface IUserHeroProps {
  userId: string
}

const UserHero: React.FunctionComponent<IUserHeroProps> = (props) => {
  const { data: fetchedUser } = useUser(props.userId)

  return (
    <div className='relative h-44 bg-neutral-700'>
      {fetchedUser?.coverImage && (
        <Image
          src={fetchedUser.coverImage}
          fill
          alt='Cover Image'
          style={{ objectFit: 'cover' }}
        />
      )}
      <div className='absolute -bottom-16 left-4'>
        <Avatar userId={props.userId} isLarge hasBorder />
      </div>
    </div>
  );
};

export default UserHero;
