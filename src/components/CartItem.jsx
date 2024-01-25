import { BiDollar } from "react-icons/bi";

const CartItem = ({ item }) => {
  return (
    <div className="flex cursor-pointer space-x-2 bg-gray-100 p-2 hover:bg-[#DAFFA2]">
      <img className="h-24" src={item.src} />
      <div className="space-y-2">
        <div className="font-bold">{item.title}</div>
        <div className="text-sm text-gray-400">{item.description}</div>
      </div>
      <div className="flex font-bold">
        {item.price}
        <span className="mt-[3px]">
          <BiDollar />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
