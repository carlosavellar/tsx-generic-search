import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import { Button, Input, InputLabel } from "@mui/material";

interface ISearch {
  setPropertyQuery: (query: string) => void;
}

export const Search = (props: ISearch) => {
  const [query, setQuery] = useState<string>("");
  const { setPropertyQuery } = props;

  useEffect(() => {
    setPropertyQuery(query);
  }, [setPropertyQuery, query]);

  return (
    <div>
      Search
      <FormControl>
        <InputLabel>Search</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          value={query}
          onChange={(event) => setQuery(event.target.value as string)}
        />
        <Button type="submit">go</Button>
      </FormControl>
    </div>
  );
};
