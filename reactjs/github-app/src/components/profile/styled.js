import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start; 
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between; 
    padding-top: 78px;
    height: 280px;
    margin: 8px;
    h1{
        font-size: 25px;
        font-weight: bold;
        font-style: italic;
        font-family: Georgia, 'Times New Roman', Times, serif;
        color:darkblue;
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;  
    div{
        margin: 10px;
        text-align: center;
    }
`;

export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;   
    h3{
        margin-right: 10px; 
        font-weight: bold;
        font-size: 18px; 
    }
    a{
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        text-decoration: underline;
        color: blue;
    }
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 260px;
    margin: 8px;
`;

export const WrapperFollowing = styled.img`
    font-weight: bold;
`;