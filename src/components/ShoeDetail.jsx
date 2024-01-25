import { BiDollar } from "react-icons/bi";

// import { BiDollar } from "react-icons/bi";

import nike1 from "../assets/n1-min.png";
import Select from "./Select";
import { QTY, SIZES } from "../constant";

const ShoeDetail = () => {
  return (
    <div className="flex select-none flex-col space-y-4 lg:flex-row-reverse dark:text-white">
      {/* Shoe image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className=" flex-center h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img src={nike1} className="animate-float" />
        </div>
      </div>
      <div className="flex-1 space-y-6 ">
        {/* Shoe text details */}
        <div className="text-5xl font-black md:text-9xl">Nike Air max 270</div>
        <div className="font-medium md:text-xl">
          {
            "The Nike Air Max 270 is a lifestyle shoe that's sure to trun heads with its vibrant color gradient."
          }
        </div>
        <div className="flex space-x-6">
          {/* <div className="text-3xl font-extrabold md:text-6xl">100 $</div> */}
          <div className="flex items-center text-3xl font-extrabold md:text-6xl">
            100 <BiDollar />
          </div>
          <Select title={"Qty"} options={QTY} />
          <Select title={"SIZE"} options={SIZES} />
        </div>

        <div className="space-x-10">
          {/* Shoe buttons and links */}
          <button className="btn-press-anim h-14 w-44 rounded bg-black text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white dark:text-black">
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetail;
