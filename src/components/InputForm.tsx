import { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';

export const InputForm = (props: any) => {
  const [query, setQuery] = useState<string>('');
  const { setInputQuery } = props;

  const debounceQuery = useDebounce(query, 250);

  useEffect(() => {
    setInputQuery(debounceQuery);
  }, [debounceQuery, setInputQuery]);
  return (
    <div>
      <form>
        <label htmlFor="search">Search</label>
        <input
          type="search"
          name="search"
          placeholder="Search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
      </form>
    </div>
  );
};
