import { GrClose } from "react-icons/gr";
const Sidebar = ({ children, isOpen, onClickClose }) => {
  return (
    <div>
      <div
        className={`dark:bg-night showCart fixed right-0 top-0 z-50 h-full w-full transform overflow-y-auto bg-white p-5 transition duration-300 md:w-[50%] lg:w-[35%] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={onClickClose}
          className="absolute right-4 top-4 p-2 font-bold text-black"
        >
          <GrClose />
        </button>
        {children}
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"></div>
      )}
    </div>
  );
};

export default Sidebar;