import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Card from '../components/Card';
import axios from "axios"


const Container = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`

const Wrapper = styled.div`
`;

const Home = ({ type }) => {

    const [videos, setVideo] = useState([])

    useEffect(() => {
        const fetchVideos = async () => {
            const res = await axios.get(`/videos/${type}`)
            setVideo(res.data)
        }
        fetchVideos()
    }, [type])

    return (
        <Wrapper>
            <Container>
                {videos.map((video) => (
                <Card key={video.id} video = {video}/>
            ))}
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Container>
        </Wrapper>
    )
}

export default Home;
