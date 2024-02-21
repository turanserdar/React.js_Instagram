import VideoCard from "./VideoCard";
import "./App.css";
import { useEffect, useState } from "react";
import db from "./firebase";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


function App() {

  const [reels, setReels]=useState([]);

  useEffect(() => {

      //App Component will run ONCE when it loads, and never again
 
      //  db.collection(db,'reels').onSnapshot(snapshot=>(

      //   setReels(snapshot.docs.map(doc=>doc.data()))
     

   
    const reelsRef = collection(db, 'reels');

  (async () => {
    const reelsSnapshot = await getDocs(reelsRef);
    setReels(reelsSnapshot.docs.map(doc => doc.data()));
  })();

  },[]);




  return (
    //BEM naming convetion
    <div className="app">
      <h1>Serdar </h1>
      <div className="app__top">
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
        />
        <h1>Reels</h1>
      </div>
      <div className="app__videos"> 

      {reels.map(({avatarSrc,channel,song,url,likes,shares})=>(<VideoCard
       channel= {channel}
       avatarSrc={avatarSrc}
       song={song}
       url={url}
       likes={likes}
       shares={shares} 
      />))}
      
    
      {/* <VideoCard
        channel= 'Serdar'
        avatarSrc='https://pics.craiyon.com/2023-05-29/69d183130848490eae6fbb912c584b36.webp'
        song='Test song - ssssangha'
        url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
        likes={950}
        shares={30} 
      />
      <VideoCard
       channel= 'Anonım'
       avatarSrc='https://pics.craiyon.com/2023-09-16/f87b687458d444a29a2e1067782c6dd3.webp'
       song='Test song - ssssangha'
       url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
       likes={950}
       shares={30}
      
      /> */}
      </div> 
     
    </div>
  );
}

export default App;
 