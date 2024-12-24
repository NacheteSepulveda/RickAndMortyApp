import React, { useRef, useContext } from 'react'
import { CharacterContext } from './CharacterContext';

function CharacterInput() {

  const { setSearch, setPage } = useContext(CharacterContext); //SETEA LA BUSQUEDA Y LA PAGINA
    
const inputRef = useRef(null);

const handleOnSearch = () => {
        setSearch(inputRef.current.value);
        setPage(1); // Resetear la página al buscar un nuevo personaje.
        console.log('EL VALOR', inputRef.current.value);
    }



  return (
    <div>

      <input 
            type="text"
            placeholder="Buscar personaje"
            ref={inputRef}
            />

            <button
            onClick={handleOnSearch}
            >
                BUSCAR
            </button>

    </div>
  )
}

export default CharacterInput