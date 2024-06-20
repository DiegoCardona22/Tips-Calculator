// @packages
import { useState } from "react";

// @types
import { MenuItem, OrderItem } from "../types";

const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExists = order.find((orderItem) => orderItem.id === item.id);

    const updateOrder = (updatedItems: OrderItem[]) => {
      setOrder(updatedItems);
    };

    if (itemExists) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      updateOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      updateOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    const deletedOrder = order.filter((item) => item.id !== id);
    setOrder(deletedOrder);
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder,
  };
};

export default useOrder;
