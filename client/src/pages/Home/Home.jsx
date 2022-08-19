import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Keybar from '../../components/Keybar/Keybar'
import VideoCard from '../../components/VideoCard/VideoCard'
import axios from 'axios'
import {
  Container, 
  VideoGallery 
} from './HomeStyle'

const Home = ({ type }) => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <>
      <Container>
          <Sidebar />
          <div>
            <Keybar />
            <VideoGallery>
              {videos.map((video) => (
                <VideoCard key={video._id} video={video} />
              ))}
            </VideoGallery>
          </div>
      </Container>
    </>
  )
}

export default Home