import ColdDrink from "./ColdDrink";
import HotDrink from "./HotDrink";

function Product() {
  return (
    <div className="mx-auto max-w-7xl px-2 py-6 grid gap-y-12 sm:px-6 lg:px-8">
      <HotDrink />
      <ColdDrink />
    </div>
  )
}

export default Product;