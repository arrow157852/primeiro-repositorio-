import React from 'react'
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';
import { useState } from 'react';

const Header = () => {

    const {getUser} = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () =>{

        if(!usernameForSearch) return;
        return getUser(usernameForSearch);
        
    };

    return (
        <header>
            <S.WrapperHeader>
                <input type="text" placeholder="Digite o username para efetuar a busca..."
                 onChange={(event) => setUsernameForSearch (event.target.value)}/>
                <button type="submit" onClick={submitGetUser}>
                    <span>BUSCAR</span>
                </button>                
            </S.WrapperHeader>            
        </header>
    )
}

export default Header;