import * as React from 'react';
import { IconType } from 'react-icons';
import { BsHouseFill, BsBellFill,  } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import SideBarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import SidebarTweetBtn from './SidebarTweetBtn';

export interface NavItem {
  label: string
  href: string
  icon: IconType
}

const Sidebar: React.FunctionComponent = () => {
  const items: NavItem[] = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill
    },
    {
      label: "Profile",
      href: "/users/123",
      icon: FaUser
    },
    {
      label: "Log Out",
      href: "/logout",
      icon: BiLogOut
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
          <SidebarTweetBtn />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
