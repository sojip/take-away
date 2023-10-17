import { CommandDetailsForm } from "./CommandDetailsForm";
import { CartTable } from "./CartTable";
export const Cart = () => {
  return (
    <div
      style={{ paddingTop: "65px", backgroundColor: "#f0f0f0", height: "100%" }}
    >
      {/* <CommandDetailsForm /> */}
      <CartTable />
    </div>
  );
};
