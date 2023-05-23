import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import { useEffect, useState } from "react";

interface ISearchInput<T> {
  //   object: T extends {} ? T : never;
  setInputQuery: (query: string) => void;
}

export const SearchInput = <T,>(props: ISearchInput<T>) => {
  const { setInputQuery } = props;
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    setInputQuery(query);
  }, [setInputQuery, query]);

  return (
    <FormControl>
      <InputLabel htmlFor="search" margin="dense" variant="filled">
        Search
      </InputLabel>
      <Input
        id="search"
        name="search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value as any)}
      />
    </FormControl>
  );
};
