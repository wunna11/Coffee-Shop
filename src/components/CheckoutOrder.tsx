import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadAllCart, selectCart } from "../features/cartSlice";
import { Modal as ModalComp } from "flowbite-react";
import { useAppSelector } from "../app/hooks";
import CheckboxPayment from "./CheckboxPayment";
import { Payment } from "../types";
import { addOrder } from "../features/orderSlice";

type Props = {
  closeModal: () => void;
  showModal: boolean;
  successCloseModal: () => void;
  subTotal: number;
  total: number;
};

function CheckoutOrder(props: Props) {
  const { closeModal, showModal, successCloseModal, subTotal, total } = props;
  const [payment, setPayment] = useState("");

  const dispatch = useDispatch();
  const cartItems = useAppSelector(selectCart);

  useEffect(() => {
    const items = localStorage.getItem("cart item");
    const res = JSON.parse(items as string);
    dispatch(loadAllCart(res));
  }, [dispatch]);

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    const checkoutItems = {
      payment: payment,
      paid: true,
      cost: total,
      date: new Date(),
      items: cartItems,
    };

    dispatch(addOrder(checkoutItems));
    dispatch(loadAllCart(0))
    successCloseModal();
  }

  return (
    <ModalComp show={showModal} onClose={closeModal}>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="w-full max-w-md max-h-[600px] h-[auto] bg-white border border-gray-200 rounded-3xl shadow overflow-y-auto no-scrollbar">
          <header className="p-4 shadow bg-background backdrop-blur-sm bg-background/30">
            <div className="flex items-center justify-between">
              <h5 className="text-xl font-bold leading-none text-primary">
                Checkout Order
              </h5>
              <XMarkIcon
                className="w-6 h-6 text-primary cursor-pointer"
                onClick={closeModal}
              />
            </div>
          </header>
          <div className="flow-root sm:px-8 py-4">
            <h3 className="font-bold">Payment Methods</h3>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-4 py-4">
                <CheckboxPayment
                  label="Cash On Delivery"
                  img="/images/cash-payment-icon.png"
                  value={payment}
                  checked={payment == Payment.CASH}
                  onChange={() => setPayment(Payment.CASH)}
                />
                <CheckboxPayment
                  label="KBZ Pay"
                  img="/images/kbz-pay-icon.png"
                  value={payment}
                  checked={payment == Payment.KBZ_PAY}
                  onChange={() => setPayment(Payment.KBZ_PAY)}
                />
                <CheckboxPayment
                  label="Cash On Delivery"
                  img="/images/wave-money-icon.png"
                  value={payment}
                  checked={payment == Payment.WAVE}
                  onChange={() => setPayment(Payment.WAVE)}
                />
              </div>

              <div className="pt-5">
                <h3 className="font-bold">Order Summary</h3>
                <div className="flex flex-col justify-between space-y-2 py-2">
                  <div className="grid grid-cols-1">
                    {cartItems.map((item) => (
                      <div key={item.id}>
                        <div className="flex justify-between">
                          <div className="flex space-x-4">
                            <h5>{item.quantity}x</h5>
                            <h5>
                              {item.name} ({item.size.charAt(0).toUpperCase()})
                            </h5>
                          </div>
                          <h5>MMK {item.quantity * item.price}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <h5>Sub Total</h5>
                    <h5 className="font-bold">MMK {subTotal}</h5>
                  </div>
                  <div className="flex justify-between">
                    <h5>Deilvery Fee</h5>
                    <h5 className="font-bold">MMK 2500</h5>
                  </div>
                </div>
              </div>
              <footer className="p-4 shadow bg-background backdrop-blur-sm bg-background/30 border ">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p>Total</p>
                    <h3 className="font-bold text-primary-600">MMK {total}</h3>
                  </div>
                  <button
                    className="bg-primary w-8/12 p-3 border rounded-lg text-white"
                    type="submit"
                  >
                    Order Now
                  </button>
                </div>
              </footer>
            </form>
          </div>
        </div>
      </div>
    </ModalComp>
  );
}

export default CheckoutOrder;
