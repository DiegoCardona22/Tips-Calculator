// @types
import { formatCurrency } from "../helpers";

// @helpers
import { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: number) => void;
};

const OrderContents = ({ order, removeItem }: OrderContentsProps) => (
  <div>
    <h2 className="font-black text-4xl">Consumption</h2>

    <div className="space-y-3 mt-5">
      {order.map((orderItem) => (
        <div
          key={orderItem.id}
          className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b"
        >
          <div>
            <p className="text-lg">
              {orderItem.name} - {formatCurrency(orderItem.price)}
            </p>
            <p className="font-black">
              {orderItem.quantity} -{" "}
              {formatCurrency(orderItem.price * orderItem.quantity)}
            </p>
          </div>

          <button
            onClick={() => removeItem(orderItem.id)}
            className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
          >
            X
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default OrderContents;
