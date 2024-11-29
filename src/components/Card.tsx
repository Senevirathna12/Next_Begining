const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-[100px] m-[10px] shadow-md border-2 flex justify-items-center items-center w-full">{children}</div>;
};

export default Card;
