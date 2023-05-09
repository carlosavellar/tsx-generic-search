
import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";


export const Search = (props: any) => {
    const { setProperty } = props
    const [query, setQuery] = useState<string>("");
    const debounceQuery = useDebounce(query, 250);


    useEffect(() => {
        setProperty(debounceQuery)
    }, [debounceQuery, setProperty])

    return <div><form>
        <label htmlFor="search">Search</label>
        <input value={query} type="search" id="search" onChange={(event) => setQuery(event.target.value as any)} atia-lable="search" />
    </form></div>
}