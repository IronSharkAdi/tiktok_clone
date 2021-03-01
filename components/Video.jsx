import { useRef, useState } from "react"
import VideoFooter from './VideoFooter'
import VideoSidebar from "./VideoSidebar"

export default function Video({likes , comments , shares , videoUrl ,name , description , songName }){
  const [playing , setPlaying]  = useState(false)
  const videoPlayStop = useRef(null)

  const handlePlaying = () =>{
      if(playing){
        videoPlayStop.current.pause();
        setPlaying(false)
      } else{
        videoPlayStop.current.play();
        setPlaying(true)
      }
  }


  return(
    <div className="video" style={{}}>
        <video
        id="Video"
         loop 
         onClick={handlePlaying}
         ref={videoPlayStop}
         className="player" 
         src={videoUrl}>
         </video>
        <VideoFooter name={name} description={description} songName={songName} />
        <VideoSidebar likes={likes} shares={shares} comments={comments}  />
        {/* NavigationBar */}   
    </div>
  )
}
