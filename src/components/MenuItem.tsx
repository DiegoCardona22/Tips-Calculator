// @types
import { MenuItem as MenuItemType } from "../types";

type MenuItemProps = {
  addItem: (item: MenuItemType) => void;
  item: MenuItemType;
};

const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between rounded-lg"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};

export default MenuItem;
