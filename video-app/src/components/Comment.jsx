import React from 'react';
import styled from 'styled-components';
import Mypic from '../img/mypic.jpg'

const Container = styled.div`
display: flex;
gap: 10px;
margin:30px 0px;
`;

const CommentImage = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #999;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({ theme }) => theme.text}
`;

const Name = styled.span`
font-size: 15px;
font-weight: bold;
`;

const Text = styled.span`
font-size: 14px;`

const comment = () => {
    return (
        <Container>
            <CommentImage src={Mypic} />
            <Details>
                <Name>John Smith</Name>
                <Text> Lorem ipsum dolor sit amet consectetur, adipisicing elit. In molestias fugit doloribus laboriosam harum atque quidem amet, laudantium veritatis nam error aliquid ad architecto ipsam, magnam deleniti consequatur, corrupti placeat? </Text>
            </Details>
        </Container>
    )
}

export default comment
