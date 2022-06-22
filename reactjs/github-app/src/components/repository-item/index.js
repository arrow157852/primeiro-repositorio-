import React from 'react'
import * as S from './styled'

const RepositoryItem = ({name, linkToRepo, fullname}) => {
    return (
        <S.WrapperRepoItem>
            <h2>{name}</h2>
            <h4>/----------/</h4>
            
            <a href= {linkToRepo}
               target="_blank"
               rel="noopener noreferrer">
                {fullname}
            </a>
                         
        </S.WrapperRepoItem>
    )
}

export default RepositoryItem