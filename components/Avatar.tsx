import useUser from '@/hooks/useUser';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

interface IAvatarProps {
  userId: string
  isLarge?: boolean
  hasBorder?: boolean
}

const Avatar: React.FC<IAvatarProps> = (props) => {
  const router = useRouter()
  const { data: fetchedUser } = useUser(props.userId)

  const handleClick = useCallback((event: any) => {
    event.stopPropagation()

    const url = `/users/${props.userId}`
    router.push(url)
  }, [router, props.userId])

  return (
    <div
      className={`
        ${props.hasBorder ? "border-4 border-slate-950" : ""}
        ${props.isLarge ? "h-32 w-32" : "h-12 w-12"}
        rounded-full
        hover:opacity-90
        transition
        cursor-pointer
        relative
      `}
    >
      <Image
        fill
        style={{
          objectFit: 'cover',
          borderRadius: '100%'
        }}
        alt='Avatar'
        onClick={handleClick}
        src={fetchedUser?.profileImage || '/images/placeholder.png'}
      />
    </div>
  );
};

export default Avatar;
