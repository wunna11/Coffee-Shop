import { useAppSelector } from "../../app/hooks";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { Coffee, selectCoffee } from "../../features/coffeeSlice";

function ColdDrink() {
  const data = useAppSelector(selectCoffee);

  const coffees = data.filter(item => item.type == 'iced');
  
  return (
    <div>
      <Header title="Iced Drink" />
      <div className="grid grid-cols-2 gap-x-4">
        {coffees.map((coffee: Coffee) => (
          <Card
            key={coffee.id}
            image={coffee.image}
            name={coffee.displayName}
            description={coffee.description}
            price={coffee.price}
            id={coffee.id} detail={coffee.detail} />
        ))}
      </div>
    </div>
  );
}

export default ColdDrink;
