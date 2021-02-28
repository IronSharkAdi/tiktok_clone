import MusicNoteIcon from '@material-ui/icons/MusicNote'; 
import Ticker from "react-ticker";

export default function VideoFooter({name , description , songName}) {
    return (
        <div className="videofooter">
            <div className="footer_text">
                <h3>{name}</h3>
                <p>{description}</p>
            
            <div className="ticker">
                <div className="footer_logo">
                    <MusicNoteIcon className="musicnote_logo" />
                </div>
                <Ticker mode="smooth">
                    {({index}) =>(
                        <p>{songName}</p>
                    )}
                     </Ticker>
            </div>
            </div>
            <img src="/img/record.png " alt="song_recorder" className="cd_logo" />
        </div>
        
        )
}