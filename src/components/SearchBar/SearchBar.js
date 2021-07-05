import React from 'react';
import './SearchBar.css';
import {SearchIcon, CloseIcon} from '../Icons';
import {getSearchResults} from '../../services/searchApi';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const SearchBar = ({ ...rest }) => {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState(null);
  const [isFocused, setIsFocused] = React.useState(false);

  React.useEffect(() => {
    if(query.length >= 2){
    getSearchResults(query)
      .then(items => {
          const results = items.suggestions?.map(i => ({ 
            title: i.searchterm,
            quantity: i.nrResults
          }));
          setResults(results);
        })
      }
      else{
        setResults(null)
      }
  }, [query]);

  return (
    <div>
      <div className={`search-bar ${isFocused ? "search-bar--focused" : ""} `}>
        <input 
          className="search-bar__input"
          placeholder="Zoeken" 
          onFocus={() => setIsFocused(true)} 
          onBlur={() => setIsFocused(false)}
          value={query}
          onChange={e => setQuery(e.target.value)}
          {...rest} 
          />
         <button className="search-bar__button" hidden={!query} onClick={() => setQuery('')}>
          <CloseIcon/>
        </button>
        <SearchIcon/>
      </div>
      {results? <DropdownMenu items={results} query={query} />: null}
    </div>
  )
}

export default SearchBar;