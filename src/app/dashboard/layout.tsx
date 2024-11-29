"use client";
import '../globals.css';
type DashboardProp = {
  children: React.ReactNode;
  users : React.ReactNode;
  revenue : React.ReactNode;
  notification : React.ReactNode; 
};

export default function DashboardLayout({ children , users ,revenue,notification  }: DashboardProp) {
  return (
    <>
      <div className='p-2 text-center'>{children}</div>
      <div className='flex w-full'>
        <div className='flex flex-col w-1/2 p-4 gap-4'>
            <div >{users}</div>
            <div>{revenue}</div>
        </div>
        <div className='w-1/2 p-4 flex flex-auto '>{notification}</div>
      </div>
    </>
  );
}
