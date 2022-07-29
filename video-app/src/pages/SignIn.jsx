import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
display:flex;
align-items: center;
justify-content: center;
height: calc(100vh - 56px);
color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
display:flex;
align-items: center;
flex-direction: column;
background-color: ${({ theme }) => theme.bgLighter};
border: 1px solid ${({ theme }) => theme.soft};
padding: 20px 50px;
gap: 10px;
`;

const Title = styled.h1`
font-size: 24px;
`;

const Input = styled.input`
border: 1px solid ${({ theme }) => theme.soft};
border-radius: 3px;
padding: 10px;
background-color: transparent;
width: 100%;
color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
border-radius: 3px;
border: none;
padding: 10px 30px;
cursor: pointer;
background-color: ${({ theme }) => theme.soft};
color: ${({ theme }) => theme.textSoft};
`;



const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Input type="email" placeholder='email' />
        <Input type="password" placeholder='password' />
        
        <Link to="/" >
        <Button>Sign in</Button>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Signin
