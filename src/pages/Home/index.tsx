import PopularColdDrink from "./PopularColdDrink";
import PopularDrink from "./PopularDrink";
import PopularHotDrink from "./PopularHotDrink";
import SearchDrink from "./SearchDrink";

export default function Home() {

  return (
    <div className='mx-auto max-w-7xl px-2 py-6 grid gap-y-12 sm:px-6 lg:px-8'>
      <SearchDrink />
      <PopularDrink />
      <PopularHotDrink />
      <PopularColdDrink />
    </div>
  );
}
