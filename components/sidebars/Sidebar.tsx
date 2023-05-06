import * as React from 'react';
import { IconType } from 'react-icons';
import { BsHouseFill, BsBellFill,  } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import SideBarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import SidebarTweetBtn from './SidebarTweetBtn';
import useCurrentUser from '@/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';

export interface NavItem {
  label: string
  href: string
  icon: IconType
  auth?: boolean
}

const Sidebar: React.FunctionComponent = () => {
  const { data: currentUser } = useCurrentUser()

  const items: NavItem[] = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
      auth: true
    },
    {
      label: "Profile",
      href: `/users/${currentUser?.id}`,
      icon: FaUser,
      auth: true
    },
  ]

  return (
    <div className='col-span-1 h-full pr-2 md:pr-6'>
      <div className='flex flex-col items-end justify-center'>
        <div className='space-y-4 '>
          <SideBarLogo />
          {items.map(item => {
            return (
              <SidebarItem
                key={item.href}
                item={item}
              />
            )
          })}
          {currentUser && (
            <SidebarItem
              key="/logout"
              onClick={() => signOut()}
              item={{
                label: "Log Out",
                href: "/logout",
                icon: BiLogOut
              }}
            />
          )}
          <SidebarTweetBtn />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
