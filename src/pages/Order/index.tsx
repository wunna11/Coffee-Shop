import Header from "../../components/Header";
import OrderData from "./OrderData";

export default function Order() {

  return (
    <div className="mx-auto max-w-7xl px-2 py-6 grid gap-y-12 sm:px-6 lg:px-8">
      <Header title="Order History" />
      <OrderData />
    </div>
  );
}
