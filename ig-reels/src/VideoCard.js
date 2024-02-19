import React, { useState } from 'react'
import './VideoCard.css'
import { useRef } from 'react';

function VideoCard() {

    const[isVideoPlaying, setIsVideoPlaying] = useState(false);

    const videoRef=useRef(null);

    const onVideoPress=() =>{

        if(isVideoPlaying){
            //stop 
            videoRef.current.pause();
            setIsVideoPlaying(false);
            
        }else{
            //play
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    }
  

  return (
    <div className='videoCard'>
      
    <video 
    ref={videoRef}
    onClick={onVideoPress}
    className='videoCard__player'
    src='"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"'
    alt="IG reel video"
    loop
    />

    </div>
  )
}

export default VideoCard;
 