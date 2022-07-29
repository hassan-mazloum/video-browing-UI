import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Card from '../components/Card';
import axios from "axios"



// React styled components for layout
const Container = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`

const Wrapper = styled.div`
`;

const Home = ({ type }) => {


    // using the useState effect to generate videos from server
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
            {/* videos cards to be displayed on home page from server (when connected) */}
            <Container>
                {videos.map((video) => (
                <Card key={video.id} video = {video}/>
            ))}

            {/* video cards to be displayed on home page */}
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
