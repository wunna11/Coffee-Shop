export const generateRandomArray = (data: any, total: number) => {
  //const items = ["item1", "item2", "item3", "item4", "item5"]; // Example array of unique items
  const shuffledItems = data.slice(); // Copy the array
  let currentIndex = shuffledItems.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    temporaryValue = shuffledItems[currentIndex];
    shuffledItems[currentIndex] = shuffledItems[randomIndex];
    shuffledItems[randomIndex] = temporaryValue;
  }

  // Return the first 5 items
  return shuffledItems.slice(0, total);
}

export function filterItems(items: any[], query: string) {
  query = query.toLowerCase();
  
  if (query) {
    return items.filter((item: { displayName: string; description: string; }) =>
      item.displayName.split(" ").some((word: string) => word.toLowerCase().startsWith(query)) ||
      item.description.split(" ").some((word: string) => word.toLowerCase().startsWith(query))
    );
  }
}

export function calculateTotPrice(items: any[]) {
  return items.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
