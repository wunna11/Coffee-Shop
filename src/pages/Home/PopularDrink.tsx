import { useAppSelector } from "../../app/hooks";
import HeaderGroup from "../../components/HeaderGroup";
import ProductImage from "../../components/ProductImage";
import { Coffee, selectCoffee } from "../../features/coffeeSlice";
import { generateRandomArray } from "../../utils/common";

function PopularDrink() {
  const data = useAppSelector(selectCoffee);
  const coffees = generateRandomArray(data, 5);
  
  return (
    <div>
      <HeaderGroup title="Poplular Drink" />
      <div className="flex md:flex-row gap-x-6 sm:flex-col">
        {coffees.map((coffee: Coffee) => (
          <ProductImage
            key={coffee.id}
            name={coffee.displayName}
            price={coffee.detail.map(coffee => coffee.price)[0]}
            image={coffee.image}
            description={coffee.description}
            id={coffee.id}
            detail={coffee.detail}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularDrink;
