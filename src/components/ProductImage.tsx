import { useState } from "react";
import Modal from "./Modal";
import { Detail } from "../features/coffeeSlice";

type Props = {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  detail: Detail[];
};

function ProductImage(props: Props) {
  const { id, name, price, description, image , detail} = props;

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="mt-5 relative cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <img src={image} alt="" className="xh-52 w-56 rounded-xl" />
        <div className="absolute top-2 left-2">
          <h3 className="text-md text-white font-bold">{name}</h3>
        </div>
        <div className="absolute bottom-4 left-32 text-text font-bold bg-white rounded-lg">
          <h3 className="text-sm px-2 py-1">MMK {price}</h3>
        </div>
      </div>
      {showModal ? (
        <Modal
          closeModal={() => setShowModal(false)}
          showModal={true}
          id={id}
          image={image}
          name={name}
          description={description}
          price={price}
          detail={detail}
        />
      ) : null}
    </>
  );
}

export default ProductImage;
