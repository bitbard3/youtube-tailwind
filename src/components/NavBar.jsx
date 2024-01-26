import { AccountSection } from "./AccountSection";
import { BrandIcon } from "./BrandIcon";
import { Searchbox } from "./SearchBox";
export const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-between mx-5">
        <div className="  pt-5 flex content-center">
          <div className="mr-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.8}
              stroke="currentColor"
              className="w-6 h-6 -mt-0.5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
          <div className="w-24 h-10">
            <BrandIcon></BrandIcon>
          </div>
        </div>
        <Searchbox></Searchbox>
        <div className="mt-5">
          <AccountSection></AccountSection>
        </div>
      </div>
    </div>
  );
};
