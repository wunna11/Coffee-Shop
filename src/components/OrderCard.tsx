import { useState } from "react";
import OrderDetailCard from "./OrderDetailCard";
import { Cart } from "../features/cartSlice";

type Props = {
  name: string | number;
  totalPrice: number;
  payment: string;
  date: string;
  cartItems: Cart[];
};

function OrderCard(props: Props) {
  const { name, totalPrice, payment, date, cartItems } = props;

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        className="flex bg-white mt-5 space-x-4 w-full p-2 border rounded-lg border-gray-300 cursor-pointer"
        onClick={() => setOpenModal(true)}
      >
        <img
          src="/images/success.png"
          alt=""
          className="h-28 w-28 rounded-xl"
        />

        <div className="flex flex-col space-y-2 space-x-2 w-full">
          <div className="flex justify-between p-2">
            <h1 className="text-lg text-gray-900 font-bold">Order {name}</h1>
            <h3 className="font-extrabold text-gray-900">MMK {totalPrice}</h3>
          </div>
          <h3 className="text-sm text-gray-900">Payment Method: {payment}</h3>
          <h3 className="text-sm text-gray-900">{date}</h3>
        </div>
      </div>

      {openModal && (
        <OrderDetailCard
          closeModal={() => setOpenModal(false)}
          showModal={true}
          total={totalPrice}
          cartItems={cartItems}
        />
      )}
    </>
  );
}

export default OrderCard;
