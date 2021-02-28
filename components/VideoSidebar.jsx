import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useState } from 'react';

export default function VideoSidebar({likes , comments , shares}){
    const [liked , setLiked] = useState(false)

    return(
        <div className="sidebar">
            <div className="sidebar_button">
                {liked ? (<FavoriteIcon fontSize="large" onClick={(e)=> setLiked(false)} />) : (<FavoriteBorderIcon fontSize="large" onClick={(e)=> setLiked(true)} />)} 
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="sidebar_button" >
                <MessageIcon fontSize="large"/>
                <p>{comments}</p>
            </div>         
            <div className="sidebar_button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}