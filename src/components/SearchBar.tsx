type Props = {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchBar(props: Props) {
  const { query, onChange } = props;
  return (
      <input
        className="border-2 border-gray-300 bg-background h-12 px-5 w-2/6 rounded-lg text-sm focus:outline-none"
        name="search"
        placeholder="Search you drink"
        value={query}
        onChange={onChange}
        type="search"
      />
  );
}

export default SearchBar;
