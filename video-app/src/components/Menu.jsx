import React from 'react';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';




const Container = styled.div`
flex:1;
background-color: ${({ theme }) => theme.bgLighter};
height: 100vh;
color: ${({ theme }) => theme.text};
font-size: 14px;
position: sticky;
top: 0;
`;


const Wrapper = styled.div`
padding: 18px 26px;
margin-top:3em;
`;


const Item = styled.div`
display: flex;
align-items: center;
gap:20px ;
cursor: pointer;
padding: 7.5px 0px;

&:hover{
    background-color: ${({ theme }) => theme.soft};
}
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div`
font-size: 16px;
`;



const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
border-radius: 3px;
font-weight: 500;
margin-top: 10px;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
`;


function Menu({ darkMode, setDarkMode }) {
    return (
        <Container>
            <Wrapper>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }} >
                    < Item >
                        Home
                    </Item>
                </Link>
                <Hr />
                <Login> Sign in to like videos, comment, and subscribe.
                    <Link to="signin" style={{ textDecoration: "none", color: "inherit" }} >
                        <Button><AccountCircleIcon />SIGN IN</Button>
                    </Link>
                </Login>
                <Hr />
                < Item onClick={() => setDarkMode(!darkMode)} >
                    {darkMode ? "Light" : "Dark"} Mode
                </Item>
                <Hr />

            </Wrapper>
        </Container>
    )
}

export default Menu
