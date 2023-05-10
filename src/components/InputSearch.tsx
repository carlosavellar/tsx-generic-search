import { useEffect, useState } from 'react';

interface IInputProps {
  setPropertyType: (searchQuery: string) => void;
}

export const InputSearch = (props: IInputProps) => {
  const { setPropertyType } = props;
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    setPropertyType(query);
  }, [setPropertyType, query]);

  return (
    <>
      <label htmlFor="search">Search</label>
      <input
        value={query}
        type="search"
        placeholder="Search"
        id="search"
        onChange={(event) => {
          setQuery(event.target.value as any);
        }}
      />
    </>
  );
};
