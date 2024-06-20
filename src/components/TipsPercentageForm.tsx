// @packages
import { Dispatch, SetStateAction } from "react";

// @types
type TipsPercentageForm = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};

// @constants
const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

const TipsPercentageForm = ({ setTip, tip }: TipsPercentageForm) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Tips:</h3>
      <form>
        {tipOptions.map((option) => (
          <div key={option.id} className="flex gap-2">
            <label htmlFor={option.id}>{option.label}</label>
            <input
              type="radio"
              name="option"
              value={option.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={option.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default TipsPercentageForm;
