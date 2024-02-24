import {
  PlusCircleIcon,
  MinusCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Checkbox from "./Checkbox";
import { useEffect, useState } from "react";
import Button from "./Button";
import { CoffeeSize } from "../types";
import { useDispatch } from "react-redux";
import { addItemToCart, loadAllCart } from "../features/cartSlice";
import { Modal as ModalComp } from "flowbite-react";
import { Detail } from "../features/coffeeSlice";

type Props = {
  closeModal: () => void;
  showModal: boolean;
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  detail: Detail[]
};

function Modal(props: Props) {
  const { closeModal, showModal, id, image, name, description, price, detail } = props;
  const dispatch = useDispatch();

  const [size, setSize] = useState("");
  const [counter, setCounter] = useState(0);
  const [itemPrice, setItemPrice] = useState(price);

  useEffect(() => {
    const res = localStorage.getItem("cart item");
    const data = JSON.parse(res as string);
    dispatch(loadAllCart(data));
  }, [dispatch]);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    if (counter <= 0) return;
    setCounter(counter - 1);
  }

  // validation
  const [sizeErr, setSizeErr] = useState("");
  const [qtyErr, setQtyErr] = useState("");

  function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    const cartItem = {
      id: id,
      name: name,
      image: image,
      price: itemPrice,
      size: size,
      quantity: counter,
    };

    if (size === "" || counter == 0) {
      setSizeErr("Size is required!");
      setQtyErr("Qunatity must be at least 1!");
    } else {
      dispatch(addItemToCart(cartItem));
      closeModal();
    }
  }

  return (
    <ModalComp show={showModal} onClose={closeModal}>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <form onSubmit={onSubmit}>
            <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow">
                <div className="relative">
                    <img
                      className="rounded-t-lg h-[260px] w-full object-cover"
                      src={image}
                      alt=""
                    />
                  <div className="absolute right-3 top-3">
                    <XCircleIcon
                      className="w-8 h-8 text-white cursor-pointer"
                      onClick={closeModal}
                    />
                  </div>
                </div>
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary-700">
                    {name}
                  </h5>
                <p className="mb-1 font-normal text-sm text-gray-700">
                  {description}
                </p>
                <p className="mb-3 text-primary-700 font-bold text-lg">
                  MMK {itemPrice}
                </p>
                <hr className="text-gray-700 my-3"></hr>
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-800">
                  Size
                </h5>

                <div className="flex space-x-4">
                  <Checkbox
                    label="Small"
                    value={size}
                    checked={size == CoffeeSize.SMALL}
                    onChange={() => {
                      setSize(CoffeeSize.SMALL)
                      setItemPrice(detail.map(item => item.price)[0])
                    }}
                  />
                  <Checkbox
                    label="Medium"
                    value={size}
                    checked={size == CoffeeSize.MEDIUM}
                    onChange={() => {
                      setSize(CoffeeSize.MEDIUM)
                      setItemPrice(detail.map(item => item.price)[1])
                    }}
                  />
                  <Checkbox
                    label="Large"
                    value={size}
                    checked={size == CoffeeSize.LARGE}
                    onChange={() => {
                      setSize(CoffeeSize.LARGE)
                      setItemPrice(detail.map(item => item.price)[2])
                    }}
                  />
                </div>
                {sizeErr && (
                  <span className="text-red-600 text-xs">{sizeErr}</span>
                )}
                <hr className="text-gray-700 my-3"></hr>
                <div className="flex justify-between">
                  <div className="flex flex-start space-x-4">
                    <MinusCircleIcon
                      className="w-8 h-8 cursor-pointer"
                      onClick={() => decrement()}
                    />
                    <span className="text-xl font-bold">{counter}</span>
                    <PlusCircleIcon
                      className="w-8 h-8 cursor-pointer"
                      onClick={() => increment()}
                    />
                  </div>
                  <Button title="Add to Cart" type="submit" />
                </div>
                {qtyErr && <p className="text-red-600 text-xs">{qtyErr}</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </ModalComp>
  );
}

export default Modal;
