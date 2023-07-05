import { useEffect, useState } from "react";

interface ISearch {
  setProperty: (property: string) => void;
}

export const Search = (prop: ISearch) => {
  const { setProperty } = prop;
  const [query, setQuery] = useState<string>("");
  useEffect(() => {
    setProperty(query);
  }, [query, setProperty]);
  return (
    <>
      <label htmlFor="search">Search work</label>
      <input
        id="search"
        placeholder="search for"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </>
  );
};
