export const SideBarOptions = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center mt-5">
      {icon}
      <span className="text-[10px]">{text}</span>
    </div>
  );
};
