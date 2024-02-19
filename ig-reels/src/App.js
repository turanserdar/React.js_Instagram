import VideoCard from "./VideoCard";
import "./App.css";

function App() {
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
      <div className="app__videos"> <VideoCard/>
      <VideoCard/>
      <VideoCard/></div>
     
    </div>
  );
}

export default App;
