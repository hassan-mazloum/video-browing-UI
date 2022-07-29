import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Comments from '../components/Comments';



// React styled components for layout
const Container = styled.div`
display: flex;
gap: 24px;
`;

const Content = styled.div`
flex: 5;
`;

const VideoWrapper = styled.div`

`;

const Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color: ${({ theme }) => theme.text};

`;

const Details = styled.div`
display: flex;
align-items: center;
justify-content:space-between ;
`;

const Info = styled.span`
color: ${({ theme }) => theme.text};

`;

const Buttons = styled.div`
display: flex;
gap: 20px;
color: ${({ theme }) => theme.text};
`
const Button = styled.button`
border-radius: 3px;
border: none;
padding: 10px 30px;
cursor: pointer;
background-color: ${({ theme }) => theme.bgLighter};
color: ${({ theme }) => theme.textSoft};
// hover effect to change 
&:hover{
    background-color: ${({ theme }) => theme.soft};
}
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 2px solid ${({ theme }) => theme.soft};
`

const Recommendation = styled.div`
flex: 2;
`;




const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          {/* random youtube video for testing purpose */}
          <iframe
            width="100%"
            height="700"
            src="https://www.youtube.com/embed/WE0eEws5HMg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </VideoWrapper>
        <Title> Test Video</Title>
        <Details>
          <Info> Youtube video </Info>
          <Buttons>
            <Button >Disable comments</Button>
          </Buttons>
        </Details>
        <Hr />
        <Comments />
      </Content>
      {/* Video cards appearing on in the recommendations section */}
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  )
}

export default Video