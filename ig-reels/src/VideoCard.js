import React, { useState } from 'react'
import './VideoCard.css'
import { useRef } from 'react';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

function VideoCard({url, like, shares, channel, avatarSrc,song}) {

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
    <VideoHeader/>
    <video 
    ref={videoRef}
    onClick={onVideoPress}
    className="videoCard__player"
    src={url}
    alt="IG reel video"
    loop
    />

    <VideoFooter
    
      channel={channel}
      url={url}
      shares={shares}
      avatarSrc={avatarSrc}
      song={song}


    />

    </div>
  )
}

export default VideoCard;
 