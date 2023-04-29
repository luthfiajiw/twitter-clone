import * as React from 'react';
import { NavItem } from './Sidebar';

interface ISidebarItemProps {
  key?: string
  item: NavItem
}

const SidebarItem: React.FunctionComponent<ISidebarItemProps> = (props) => {
  const { item } = props
  const { icon: Icon} = item

  return (
    <div className='flex felx-row items-center'>
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
        p-4
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
