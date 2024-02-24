import { Modal } from "flowbite-react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { Cart } from "../features/cartSlice";

type Props = {
  closeModal: () => void;
  showModal: boolean;
  total: number;
  cartItems: Cart[];
};

function OrderDetailCard(props: Props) {
  const { closeModal, showModal, total, cartItems } = props;

  return (
    <Modal show={showModal} onClose={closeModal}>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50">
        <div className="w-full max-w-md h-auto[0] max-h-[500px] bg-white border border-gray-200 rounded-3xl shadow overflow-y-auto no-scrollbar">
          <header className="p-4 shadow bg-background backdrop-blur-sm bg-background/30">
            <div className="flex items-center justify-between">
              <h5 className="text-xl font-bold leading-none text-primary">
                Order Detail
              </h5>
              <XMarkIcon
                className="w-6 h-6 text-primary cursor-pointer"
                onClick={closeModal}
              />
            </div>
          </header>
          <div className="flow-root sm:px-8 py-4">
            <h3 className="font-bold">Order Summary</h3>
            <div className="pt-3">
              <div className="flex flex-col justify-between space-y-2 py-2">
                <div className="grid grid-cols-1">
                  {cartItems?.map((item) => (
                    <>
                      <div className="flex justify-between">
                        <div className="flex space-x-4">
                          <h5>{item.quantity}x</h5>
                          <h5>{item.name}</h5>
                        </div>
                        <h5>MMK {item.quantity * item.price}</h5>
                      </div>
                    </>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
              <h5>Sub Total</h5>
              <h5 className="font-bold">MMK {total - 2500}</h5>
            </div>
            <div className="flex justify-between">
              <h5>Deilvery Fee</h5>
              <h5 className="font-bold">MMK 2500</h5>
            </div>
            </div>
          </div>
          <footer className="border border-gray-200 p-4 shadow">
            <div className="flex justify-between">
              <h5 className="font-bold text-primary-400">Total</h5>
              <h5 className="font-bold text-primary-400">MMK {total}</h5>
            </div>
          </footer>
        </div>
      </div>
    </Modal>
  );
}

export default OrderDetailCard;
