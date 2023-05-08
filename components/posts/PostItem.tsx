import useCurrentUser from '@/hooks/useCurrentUser';
import useLoginModal from '@/hooks/useLoginModal';
import { formatDistanceToNowStrict } from 'date-fns';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import Avatar from '../Avatar';
import { AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';

interface IPostItemProps {
  userId?: string
  data: Record<string, any>
}

const PostItem: React.FC<IPostItemProps> = (props) => {
  const router = useRouter()
  const loginModalState = useLoginModal()

  const { data: currentUser } = useCurrentUser()

  const goToUser = useCallback(
    (event: any) => {
      event.stopPropagation()

      router.push(`/users/${props.data.user.id}`)
    },
    [router, props.data.user.id],
  )

  const goToPost = useCallback(() => {
    router.push(`/posts/${props.data.id}`)
  }, [router, props.data.user.id])

  const onLike = useCallback((event: any) => {
    event.stopPropagation()

    loginModalState.onOpen()
  }, [loginModalState])

  const createdAt = useMemo(() => { 
    if (!props.data?.createdAt) {
      return null
    }

    return formatDistanceToNowStrict(new Date(props.data.createdAt))
  }, [props.data?.createdAt])

  return (
    <div
      onClick={goToPost}
      className='
        border-b-[1px]
        border-neutral-700
        p-5
        cursor-pointer
        hover:bg-neutral-800
        transition
      '
    >
      <div className='flex flex-row items-start gap-3'>
        <Avatar userId={props.data.user.id} />
        <div className='flex flex-col'>
          <div className='flex flex-row items-center gap-2'>
            <p
            onClick={goToUser}
              className='
                text-white
                font-semibold
                cursor-pointer
                hover:underline
              '
            >
              {props.data.user.name}
            </p>
            <span 
              onClick={goToUser}
              className='
                text-neutral-400
                cursor-pointer
                hover:underline
                hidden
                md:block
            '>
              @{props.data.user.username}
            </span>
            <span className='text-neutral-400 text-sm'>
              {createdAt}
            </span>
          </div>
          <p className='text-white mt-1'>
            {props.data.body}
          </p>
          <div className='flex flex-row items-center justify-between mt-3'>
            <div
              className='
                flex
                flex-row
                items-center
                text-neutral-400
                gap-2
                cursor-pointer
                hover:text-sky-500
              '
            >
              <AiOutlineMessage size={20}/>
              <p>
                {props.data.comments?.length || 0}
              </p>
            </div>
            <div
              onClick={onLike}
              className='
                flex
                flex-row
                items-center
                text-neutral-400
                gap-2
                cursor-pointer
                hover:text-red-500
              '
            >
              <AiOutlineHeart size={20}/>
              <p>
                {props.data.likedIds?.length || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
