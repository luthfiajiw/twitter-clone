import * as React from 'react';
import Sidebar from './sidebars/Sidebar';
import FollowBar from './sidebars/FollowBar';

interface ILayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = (props) => {
  return (
    <div className='h-screen bg-slate-950'>
      <div className='container h-full mx-auto xl:px-30 max-w-6xl'>
        <div className='grid grid-cols-5 h-full'>
          <Sidebar />
          <div className='
            col-span-4
            lg:col-span-3
            border-x-[1px]
            border-neutral-800
          '>
            {props.children}
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
