import { XMarkIcon } from "@heroicons/react/24/outline";
import { Modal } from "flowbite-react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

type Props = {
  closeModal: () => void;
  showModal: boolean;
};

function EmptyShoppingCart(props: Props) {
  const { closeModal, showModal } = props;
  const navigate = useNavigate();

  const goToProductPage = () => {
    navigate('/products');
    closeModal();
  }

  return (
    <Modal show={showModal} onClose={closeModal}>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-3xl shadow overflow-y-auto no-scrollbar">
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
          <div className="flex flex-col space-y-4 px-8 py-16 items-center justify-center">
            <img src="/images/empty-cart.png" className="w-64 h-64" />
            <h1 className="font-bold text-primary text-xl">
              Your Cart is empty!
            </h1>
            <Button
              title="Continue Shopping"
              onClick={() => goToProductPage()}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default EmptyShoppingCart;
