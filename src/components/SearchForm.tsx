import { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';

export const SearchForm = (props: any) => {
  const { setSearchQuery } = props;
  const [query, setQuery] = useState<string>('');
  const debounceQuery = useDebounce(query, 250);

  useEffect(() => {
    setSearchQuery(debounceQuery);
  }, [debounceQuery, setSearchQuery]);

  return (
    <div>
      <form>
        <label htmlFor="search">Search</label>
        <input
          type="search"
          id="search"
          aria-label="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </form>
    </div>
  );
};
