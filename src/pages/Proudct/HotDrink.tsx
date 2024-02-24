import { useAppSelector } from "../../app/hooks";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { Detail, selectCoffee } from "../../features/coffeeSlice";

interface Coffee {
  id: string,
  image: string,
  displayName: string,
  description: string,
  price: number,
  detail: Detail[]
}

function HotDrink() {
  const data = useAppSelector(selectCoffee);

  const coffees = data.filter(item => item.type == 'hot');
  
  return (
    <div>
      <Header title="Hot Drink" />
      <div className="grid grid-cols-2 gap-x-4">
        {coffees.map((coffee: Coffee) => (
          <Card
            key={coffee.id}
            id={coffee.id}
            image={coffee.image}
            name={coffee.displayName}
            description={coffee.description}
            price={coffee.price} detail={coffee.detail} />
        ))}
      </div>
    </div>
  );
}

export default HotDrink;
