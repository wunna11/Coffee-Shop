import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import Modal from "./Modal";
import { Detail } from "../features/coffeeSlice";

type Props = {
  id: string,
  image: string;
  name: string;
  description: string;
  price: number;
  detail: Detail[]
};

function Card(props: Props) {
  const { id, image, name, description, price, detail } = props;
  
  const [showModal, setShowModal] = useState(false);

  const clickShowModal = () => {
    setShowModal(true)
  }

  const clickCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <div
        className="flex bg-white mt-5 space-x-4 w-full p-2 border rounded-lg border-gray-300 cursor-pointer"
        onClick={clickShowModal}
      >
        <img src={image} alt="" className="h-28 w-28 rounded-xl" />
        <div className="flex flex-col space-y-2 w-full">
          <h3 className="text-lg text-gray-900 font-bold">{name}</h3>
          <p className="text-xs text-gray-500 font-bold h-full">
            {description}
          </p>

          <div className="flex justify-between">
            <h1 className="font-extrabold text-gray-900">MMK {price}</h1>
            <PlusCircleIcon className="w-8 h-8" />
          </div>
        </div>
      </div>

      {showModal && (
        <Modal
          closeModal={clickCloseModal}
          showModal={true}
          id={id}
          image={image}
          name={name}
          description={description}
          price={price}
          detail={detail} />
      )}
    </>
  );
}

export default Card;
