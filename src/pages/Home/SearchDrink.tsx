import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import ProductImage from "../../components/ProductImage";
import SearchBar from "../../components/SearchBar";
import { Coffee, selectCoffee } from "../../features/coffeeSlice";
import { filterItems } from "../../utils/common";
import Header from "../../components/Header";

export default function SearchDrink() {
  const coffees = useAppSelector(selectCoffee);
  const [query, setQuery] = useState("");

  const results = filterItems(coffees, query);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const NoItem = () => {
    return (
      <div className="flex flex-col space-y-2 items-center justify-center">
        <img src="/images/no-item.png" className="w-12 h-12" />
        <h1 className="font-bold text-primary text-md">Your Cart is empty!</h1>
      </div>
    );
  };

  return (
    <div>
      <SearchBar query={query} onChange={handleChange} />
      <div className="mt-5">
        <Header title="Search Coffee" />
      </div>
      {results?.length ? (
      <div className="grid grid-cols-5">
        {results?.map((coffee: Coffee) => (
          <ProductImage
            key={coffee.id}
            name={coffee.displayName}
            price={coffee.price}
            image={coffee.image}
            id={coffee.id}
            description={coffee.description}
            detail={coffee.detail}
          />
        ))}
      </div>
      ): (
          results == undefined ? null : (
            <NoItem />
          )
      )}
    </div>
  );
}
