import * as React from 'react';
import Sidebar from './layout/Sidebar';

interface ILayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = (props) => {
  return (
    <div className='h-screen bg-slate-950'>
      <div className='container h-full mx-auto xl:px-30 max-w-6xl'>
        <div className='grid grid-cols-4 h-full'>
          <Sidebar />
          <div className='
            col-span-3
            lg:col-span-2
            border-x-[1px]
            border-neutral-800
          '>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
