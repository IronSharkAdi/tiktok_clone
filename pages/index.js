import Head from 'next/head'
import Video from '../components/Video'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="home">
        <div className="video_container">
          <Video videoUrl="/video/video1.mp4" name="@jalexrosa"  description="Cosplay" songName="wipe" likes="67" shares="56" comments="00" />
          <Video videoUrl="/video/video2.mp4" name="@sssniperwolf"  description="Tik tok dance" songName="Hai phút hơn" likes="89" shares="78" comments="00" />
          <Navbar/>
        </div>
    </div>
  )
}
