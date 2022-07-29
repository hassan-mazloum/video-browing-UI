import React from 'react'
import styled from 'styled-components'
import Comment from './Comment';



const Container = styled.div``;



const NewComment = styled.div``;



const Input = styled.input`
border: none;
border-bottom: 1px solid ${({theme})=>theme.soft};
background-color: transparent;
outline: none;
padding: 5px;
width: 100%;
`;



const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Input placeholder='Add a comment...' />
        </NewComment>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </Container>
  )
}

export default Comments