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
      <div className='p-2'>{children}</div>
      <div className='flex'>
        <div className='flex flex-col'>
            <div>{users}</div>
            <div>{revenue}</div>
        </div>
        <div>{notification}</div>
      </div>
    </>
  );
}
