export const SearchForm = (props: any) => {
  const { setSearchQuery, query } = props;
  return (
    <div>
      <form>
        <label htmlFor="search">Search</label>
        <input
          type="search"
          id="search"
          aria-label="search"
          value={query}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </form>
    </div>
  );
};
