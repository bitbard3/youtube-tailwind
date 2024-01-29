import { useRecoilValue } from "recoil";
import { sidebarAtom } from "../store/atoms/sideBarAtom";

export const SideBarOptions = ({ icon, text }) => {
  const sideBar = useRecoilValue(sidebarAtom);
  return (
    <div
      className={`flex flex-col items-center mt-5 ${sideBar ? `` : `hidden`}`}
    >
      {icon}
      <span className="text-[10px]">{text}</span>
    </div>
  );
};
