import styled from 'styled-components';

export const DeleteBtn = styled.button`
// display: flex;
margin-left: 15px;
align-items: center;
padding: 0px 15px;
width: 100px;
height: 30px;
background-color: rgb(250, 250, 250);
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px 5px inset;
cursor: pointer;
  }
  :hover{
    background-color: #869eb1;
    color: white;
    transition: all 0.2s;
  }
`;

export const ContactName = styled.li`
list-style-type: disclosure-closed;
// display: flex;
margin-left: 15px;
align-items: center;
padding: 5px 15px;
border-radius: 5px;

`;