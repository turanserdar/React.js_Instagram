import React from "react";
import "./VideoFooter.css";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Marquee from "react-fast-marquee";

// import MusicNoteIcon from "@material-ui/icons/MusicNote";

// import ModeCommentIcon from "@material-ui/icons/ModeComment";
// import SendIcon from "@material-ui/icons/Send";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import FavoriteIcon from "@material-ui/icons/Favorite";

function VideoFooter({ likes, shares, channel, avatarSrc, song }) {
  return (
    <div className="videoFooter">
      <br/>
  
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} ◦ <Button>Follow</Button>
        </h3>
       
      </div>

      <div className="videoFooter__ticker">
        <MusicNoteIcon className="videoFooter__icon" />
        {/* <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h1>{song}</h1>
            </>
          )}
        </Ticker> */}
          <Marquee>
      <h1>{song}</h1>
    </Marquee>
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter__actionsLeft">
          <FavoriteIcon fontSize="large" />
          <ModeCommentIcon fontSize="large" />
          <SendIcon fontSize="large" />
          <MoreHorizIcon fontSize="large" />
        </div>

        <div className="videoFooter__actionsRight">
          <div className="videoFooter__stat">
            <FavoriteIcon/>
            <p>{likes}</p>
          </div>
          <div className="videoFooter__stat">
            <ModeCommentIcon/>
              <p>{shares} </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
