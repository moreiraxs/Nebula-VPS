interface CardsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Cards({ className = "", children }: CardsProps) {
  return (
    <div className={`bg-[#292924] text-white  border-2 border-[#181815] rounded-lg flex items-start justify-center flex-col p-3 ${className}`}>
      {children ?? <p>ola mundo</p>}
     
    </div>
  );
}