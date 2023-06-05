import { useEffect, useState } from "react";

interface IInputSearch {
  setProperty: (property: string) => void;
}

export const InputSearch = (props: IInputSearch) => {
  const { setProperty } = props;
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    setProperty(query);
  }, [setProperty, query]);

  return (
    <>
      <label htmlFor="search">Search by</label>
      <input
        type="search"
        placeholder="search"
        value={query}
        onChange={(event) => setQuery(event.target.value as any)}
      />
    </>
  );
};
