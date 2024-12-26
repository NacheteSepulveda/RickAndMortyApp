import React from 'react'
import CharacterCardList from '../components/SearchCharacter/CharacterCardlist'
import CharacterInput from '../components/SearchCharacter/CharacterInput'
import CharacterPagination from '../components/SearchCharacter/CharacterPagination'
import { CharacterProvider } from '../components/SearchCharacter/CharacterContext'
import { NavLink } from 'react-router'


function SearchCharacterPage() {
  return (

    <div>
        <NavLink to="/home">
          VUELVE
        </NavLink>


      <CharacterProvider>

                <CharacterPagination/>
                <CharacterInput />
                <CharacterCardList/>
                

      </CharacterProvider>
      
    </div>
  )
}

export default SearchCharacterPage 