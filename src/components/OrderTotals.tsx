// @packages
import { useMemo } from "react";

// @types
import { OrderItem } from "../types";

// @helpers
import { formatCurrency } from "../helpers/index";

type OrderTotalsProps = {
  order: OrderItem[];
  placeOrder: () => void;
  tip: number;
};

const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsProps) => {
  const subtotalAmount = useMemo(
    () => order.reduce((acc, curr) => acc + curr.quantity * curr.price, 0),
    [order]
  );

  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);

  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totals And Tips:</h2>
        <p>
          Subtotal To Pay: {""}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>

        <p>
          Tips: {""}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>

        <p>
          Total: {""}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Saver Order
      </button>
    </>
  );
};

export default OrderTotals;
