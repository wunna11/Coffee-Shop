import {
  XMarkIcon,
  TrashIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Cart,
  decreaseItem,
  deleteItem,
  increaseItem,
  loadAllCart,
  selectCart,
} from "../features/cartSlice";
import { Modal } from "flowbite-react";
import { useAppSelector } from "../app/hooks";
import EmptyShoppingCart from "./EmptyShoppingCart";
import CheckoutOrder from "./CheckoutOrder";

type Props = {
  closeModal: () => void;
  showModal: boolean;
};

function ShoppingCart(props: Props) {
  const { closeModal, showModal } = props;
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  const [orderState, setOrderState] = useState(false);

  const dispatch = useDispatch();

  const cartItems = useAppSelector(selectCart);

  const calculateTotPrice = useCallback(() => {
    return cartItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
  }, [cartItems]);

  useEffect(() => {
    const items = localStorage.getItem("cart item");
    const res = JSON.parse(items as string);
    dispatch(loadAllCart(res));
  }, [dispatch]);

  useEffect(() => {
    const subTotalPrice = calculateTotPrice();
    setSubtotal(subTotalPrice);

    const totalPrice = subTotalPrice + 2500;
    setTotal(totalPrice);
  }, [calculateTotPrice, dispatch]);

  if (cartItems.length <= 0) {
    return <EmptyShoppingCart closeModal={closeModal} showModal={true} />;
  }

  if (orderState) {
    return (
      <CheckoutOrder
        closeModal={() => setOrderState(false)}
        showModal={true}
        successCloseModal={closeModal}
        subTotal={subtotal}
        total={total}
      />
    );
  }

  return (
    <Modal show={showModal} onClose={closeModal}>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="w-full max-w-md h-[600px] bg-white border border-gray-200 rounded-3xl shadow overflow-y-auto no-scrollbar">
          <header className="p-4 shadow bg-background backdrop-blur-sm bg-background/30">
            <div className="flex items-center justify-between">
              <h5 className="text-xl font-bold leading-none text-primary">
                Shopping Cart
              </h5>
              <XMarkIcon
                className="w-6 h-6 text-primary cursor-pointer"
                onClick={closeModal}
              />
            </div>
          </header>
          <div className="flow-root sm:px-8 py-4">
            <h3 className="font-bold">Order Items</h3>
            <ul role="list" className="divide-y divide-gray-200">
              {cartItems?.map((item: Cart) => (
                <li className="py-3 sm:py-4" key={item.name}>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="w-16 h-16 rounded-xl"
                        src={item.image}
                        alt="Neil image"
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {item.name} ({item.size.charAt(0).toUpperCase()})
                      </p>
                      <div className="flex flex-start space-x-4 mt-2">
                        <MinusCircleIcon
                          className="w-6 h-6 cursor-pointer"
                          onClick={() => dispatch(decreaseItem(item))}
                        />
                        <p className="text-gray-700 font-bold">
                          {item.quantity}
                        </p>
                        <PlusCircleIcon
                          className="w-6 h-6 cursor-pointer"
                          onClick={() => dispatch(increaseItem(item))}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="items-center text-base font-semibold text-gray-900">
                        {item.price * item.quantity} MMK
                      </div>
                      <div className="flex items-center justify-end cursor-pointer">
                        <TrashIcon
                          className="w-6 h-6 text-red-800"
                          onClick={() => dispatch(deleteItem(item))}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-5">
              <h3 className="font-bold">Payment Summary</h3>
              <div className="flex justify-between py-2">
                <div>
                  <h5>Sub Total</h5>
                  <h5>Delivery Fee</h5>
                </div>
                <div>
                  <h5 className="font-bold">MMK {subtotal}</h5>
                  <h3 className="font-bold">MMK 2500</h3>
                </div>
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
                onClick={() => setOrderState(true)}
              >
                Next
              </button>
            </div>
          </footer>
        </div>
      </div>
    </Modal>
  );
}

export default ShoppingCart;
