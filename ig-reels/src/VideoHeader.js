import React from 'react'
import './VideoHeader.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
function VideoHeader() {
  return (
    <div className='videoHeader'>
        <ArrowBackIosNewIcon/>
        <h3>Reels</h3>
        <CameraAltIcon/>
    </div>
  )
}

export default VideoHeader