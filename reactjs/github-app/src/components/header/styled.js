import styled from 'styled-components';

export const WrapperHeader = styled.div`
    display:flex;
    justify-content: space-between;
    width: 99%;
    font-weight: bold;
    font-family: Arial;
    margin-left: 5px;
    
    
    input {
        border: 2px solid #ccc;
        border-radius: 5px;
        width: 100%;
        height: 36px;
        margin-right: 4px;
        padding: 10px;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
    }
    
    button{
        background-color: #ccc;
        border: 1px solid #00CED1;
        border-radius: 5px 10px;
        padding: 2px 16px;
        &:hover{
            cursor: pointer;
            box-shadow: 0 0 10px;
            color:#0000CD;
        }
    }
`;