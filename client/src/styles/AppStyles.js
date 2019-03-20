import styled from "styled-components";




export const HeaderText = styled.h1`
  color: #123C69 !important;
  text-align: center;
  font-size: ${props => props.large ? '5rem' : '2rem'} !important;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  padding: 40px;
`;

export const HeaderTwo = styled.h2`
color: #123C69 ;
text-align: center;
font-size: 30px;
font-family: 'Open Sans', sans-serif;
`;

export const AddButton = styled.div `
background-color: #123C69;
border: none;
color: white;
padding: 10px 28px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
border-radius: 2px;
transition: background 0.2s ease;

  &:hover {
    background: #AC3B61;
    transition: background 0.2s ease;
  }
`