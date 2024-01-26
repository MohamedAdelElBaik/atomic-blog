import { useContext, createContext, useState } from 'react';

const SearchContext = createContext(null);

function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');

  const value = { searchQuery, setSearchQuery };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  return context;
}

export { SearchProvider, useSearch };
