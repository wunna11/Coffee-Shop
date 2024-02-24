import { useAppSelector } from "../../app/hooks";
import Card from "../../components/Card";
import HeaderGroup from "../../components/HeaderGroup";
import { Coffee, selectCoffee } from "../../features/coffeeSlice";
import { generateRandomArray } from "../../utils/common";

function PopularHotDrink() {
  const data = useAppSelector(selectCoffee);

  const hotCoffess = data.filter((item) => item.type == "hot");
  const coffees = generateRandomArray(hotCoffess, 4);

  return (
    <div>
      <HeaderGroup title="Popular Hot Drink" />
      <div className="grid grid-cols-2 gap-x-4">
        {coffees.map((coffee: Coffee) => (
          <Card
            key={coffee.id}
            id={coffee.id}
            image={coffee.image}
            name={coffee.displayName}
            description={coffee.description}
            price={coffee.detail.map(coffee => coffee.price)[0]}
            detail={coffee.detail}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularHotDrink;
