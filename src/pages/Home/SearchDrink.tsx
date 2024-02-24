import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import ProductImage from "../../components/ProductImage";
import SearchBar from "../../components/SearchBar";
import { Coffee, selectCoffee } from "../../features/coffeeSlice";
import { filterItems } from "../../utils/common";


export default function SearchDrink() {

  const coffees = useAppSelector(selectCoffee);
  const [query, setQuery] = useState('');

  const results = filterItems(coffees, query);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <SearchBar
        query={query}
        onChange={handleChange}
      />
      <div className="grid grid-cols-5">
        {results?.map((coffee: Coffee) => (
          <ProductImage
            key={coffee.id}
            name={coffee.displayName}
            price={coffee.price}
            image={coffee.image}
            id={coffee.id}
            description={coffee.description
            } />
        ))}
      </div>
    </div>
  )
}