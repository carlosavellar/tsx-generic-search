import {useEffect, useState} from 'react';
import {useDebounce} from '../hooks/useDebounce';
import {Input} from 'reactstrap';

type ISearch = {
	onSearchQuery: (value: string) => void;
};

export const Search = (props: ISearch) => {
	const {onSearchQuery} = props;
	const [query, setQuery] = useState<string>('');
	const debounce = useDebounce(query, 500);

	useEffect(() => {
		onSearchQuery(debounce);
	}, [onSearchQuery, debounce]);

	return (
		<div>
			<Input type='text' value={query} id='search' onChange={event => {
				setQuery(event.target.value as any);
			}} />
		</div>
	);
};
