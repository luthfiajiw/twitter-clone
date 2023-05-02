import * as React from 'react';
import { NavItem } from './Sidebar';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import useCurrentUser from '@/hooks/useCurrentUser';
import useLoginModal from '@/hooks/useLoginModal';

interface ISidebarItemProps {
  key?: string
  item: NavItem
  onClick?: () => void
}

const SidebarItem: React.FC<ISidebarItemProps> = (props) => {
  const router = useRouter()
  const loginModalState = useLoginModal()
  const { data: currentUser } = useCurrentUser()

  const { item } = props
  const { icon: Icon} = item

  const handleClick = useCallback(() => {
    if (props.onClick) {
      return props.onClick()
    }

    if (props.item.auth && !currentUser) {
      loginModalState.onOpen()
    } else if (props.item.href) {
      router.push(props.item.href)
    }
  }, [props.onClick, props.item.href, router, currentUser, props.item.auth, loginModalState])

  return (
    <div onClick={handleClick} className='flex felx-row items-center'>
      {/* Mobile Ver */}
      <div className='
        relative
        rounded-full
        h-14
        w-14
        flex
        items-center
        justify-center
        p-4
        sm:p-2
        hover:bg-slate-300
        hover:bg-opacity-10
        cursor-pointer
        lg:hidden
        md:hidden
      '>
        <Icon size={22} color='white' />
      </div>
      {/* ============ */}

      {/* Desktop Ver */}
      <div className='
        relative
        hidden
        lg:flex
        md:flex
        items-center
        gap-4
        px-4
        pt-3
        pb-4
        rounded-full
        hover:bg-slate-300
        hover:bg-opacity-10
        cursor-pointer
      '>
        <Icon size={28} color='white' />
        <p className='hidden lg:block text-white text-xl'>
          {item.label}
        </p>
      </div>
    </div>
  );
};

export default SidebarItem;
