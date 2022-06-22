import styled from 'styled-components';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    font-size: 18px;
    width: 60%;
    margin-top: 0 16px;
    padding: 10px;  
    border: 1px solid #2F4F4F; 
    border-radius: 8px;
    background-color: #ADD8E6;
  
`;

export const WrapperTabList = styled(TabList)`
    padding: 8px;
    display: flex;
    margin-right: 10px;
    margin-left: 10px;
 
`;




export const WrapperTab = styled(Tab)`
    background-color: #FFFFFF;
    border-radius: 10px;
    border: 1px solid #2F4F4F;
    padding: 10px;
    margin: 8px;
    color:#191970;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    :hover {
        color:#006400;
        cursor: pointer;
        background-color: #00BFFF;
        transition: .2s;
        box-shadow: 0 0 1em #1E90FF;
    }
    &:focus {
        outline: none;
    }
    &.is-selected{
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 1px solid #FFFFFF;
        background-color: #7FFFD4;
    }
`;



export const WrapperTabPanel = styled (TabPanel)`
    padding: 10px;
    border: 1px solid #2F4F4F;
    box-shadow: 0 0 1rem rgba( 2, 3, 2, 0.8 );
    text-align: left;    
    color: #191970;
    font-weight: bold;
    margin-top: -10px;
    display: none;
   
    &.is-selected {
        display: block;
    
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
        border-bottom: 1px solid #191970;
        background-color: #7FFFD4;
    }
`;

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 10px;
`;