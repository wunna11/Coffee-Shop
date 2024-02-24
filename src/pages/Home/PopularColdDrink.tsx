import { useAppSelector } from "../../app/hooks";
import Card from "../../components/Card";
import HeaderGroup from "../../components/HeaderGroup";
import { Coffee, selectCoffee } from "../../features/coffeeSlice";
import { generateRandomArray } from "../../utils/common";


function PopularColdDrink() {
  const data = useAppSelector(selectCoffee);

  const icedCoffess = data.filter((item) => item.type == "iced");
  const coffees = generateRandomArray(icedCoffess, 4);

  return (
    <div>
      <HeaderGroup title="Popular Cold Drink" />
      <div className="grid grid-cols-2 gap-x-4">
        {coffees.map((coffee: Coffee) => (
          <Card
            key={coffee.id}
            image={coffee.image}
            name={coffee.displayName}
            description={coffee.description}
            price={coffee.detail.map(coffee => coffee.price)[0]}
            id={coffee.id}
            detail={coffee.detail}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularColdDrink;
