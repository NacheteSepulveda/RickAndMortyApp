import React, {createContext, useState, useEffect} from 'react'

export const CharacterContext = createContext()

//TODO LAS CONSTANTES QUE ESTAN AQUI SON GLOBALES


export const CharacterProvider = ({children})=> {
    const [characters, setCharacters] = useState([]);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(false);
        const [page, setPage] = useState(1);
        const [totalPages, setTotalPages] = useState(1);
    
        const [search, setSearch] = useState('');


    
    
        const handleSearch = async (name='',page =1) => {
            try{
                const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`);
                console.log(response);
                const data = await response.json();
                setCharacters(data.results);
                setTotalPages(data.info.pages);
                console.log('TOTAL PAGES', data.info.pages);
            } catch(error){
             setError(error);
            }
        };
        
        useEffect(() => {
            handleSearch(search, page);
          }, [search, page]);

return (
    <CharacterContext.Provider
    value={{characters,
        setCharacters,
        error,
        setError,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        search,
        setSearch
    }}>
        {children}
    </CharacterContext.Provider>
  )
}