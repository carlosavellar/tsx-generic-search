import React, { useEffect, useState } from "react";
import { Input } from "reactstrap";
import { useDebounce } from "../hooks/useDebounce";

interface ISearch {
  onSearchQuery: (value: string) => void;
}

export function Search(props: ISearch): JSX.Element {
  const { onSearchQuery } = props;
  const [query, setQuery] = useState<string>("");
  const debounce = useDebounce(query, 500);

  useEffect(() => {
    onSearchQuery(debounce);
  }, [onSearchQuery, debounce]);

  return (
    <div>
      <Input
        type="text"
        value={query}
        id="search"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setQuery(event.target.value);
        }}
      />
    </div>
  );
}
