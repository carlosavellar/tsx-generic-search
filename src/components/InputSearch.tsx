import { useEffect, useState } from 'react';

export const InputSearch = (props: any) => {
  const [query, setQuery] = useState<string>('');
  const { setInputSearch } = props;

  useEffect(() => {
    setInputSearch(query);
  }, [setInputSearch, query]);

  return (
    <div>
      <form>
        <label htmlFor="search" className="form-control">
          Search by
        </label>
        <input
          id="search"
          type="search"
          value={query}
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};
