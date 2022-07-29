import React from 'react'
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';


// React styled components for layout
const Container = styled.div`
position:sticky;
top: 0;
background-color: ${({ theme }) => theme.bgLighter};
height: 56px;
`

const Wrapper = styled.div`

display: flex;
align-items: center;
justify-content: flex-end;
padding:0px 20px ;
position: relative;
`;


const Search = styled.div`
width: 60%;
position: absolute;
left: 0px;
right: 0px;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
border: 1px solid #ccc;
`;


const Input = styled.input`
border:none;
background-color: transparent;
`


const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
border-radius: 3px;
font-weight: 500;
margin-bottom: 15px;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input />
        </Search>
        <Link to="signin" style={{ textDecoration: "none", color: "inherit" }} >    `
          <Button ><AccountCircleIcon /> SIGN IN</Button>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Navbar