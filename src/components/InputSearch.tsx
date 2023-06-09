import { useEffect, useState } from "react";

interface IInputSearch {
  setProperty: (query: string) => void;
}

export const InputSearch = (props: IInputSearch) => {
  const { setProperty } = props;
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    setProperty(query);
  }, [setProperty, query]);
  return (
    <>
      <label htmlFor="search">Search term:</label>

      <input
        id="search"
        value={query}
        placeholder="search for..."
        onChange={(event) => setQuery(event.target.value as any)}
      />
    </>
  );
};
