import styled from 'styled-components';

export const AddBtn = styled.button`
display: flex;
margin-top: 15px;
align-items: center;
padding: 0px 15px;
width: 100px;
height: 40px;
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

export const Input = styled.input`
  width: 200px;
  margin-top: 2px;

  align-items: center;
  padding: 0px 15px;
  background-color: rgb(250, 250, 250);
  border-radius: 5px;
`;

export const Form = styled.form`
margin-left: 15px;
`;

export const FormName = styled.p`
margin: 0px;
`;