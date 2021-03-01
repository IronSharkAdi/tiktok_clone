import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Link from 'next/link'


export default function Navbar(){
    return(
        <div className="navbar">
            <div className="nav_icon_text">
                <Link href="/" ><a> <HomeIcon className="nav_icon" fontSize="large" />
                <p className="nav_text" >Home</p> </a></Link> 
            </div>

            <div className="nav_icon_text">
                <Link href="/search"><a> <SearchIcon className="nav_icon" fontSize="large" />
                <p className="nav_text" >Discover</p> </a></Link> 
            </div>
            <div className="nav_icon_text">
                <Link href="/add-post"><a> <AddBoxIcon className="nav_icon" fontSize="large" />
                <p className="nav_text" >Add</p> </a></Link> 
            </div>
            <div className="nav_icon_text">
                <Link href="/inbox"><a> <ChatBubbleOutlineIcon className="nav_icon" fontSize="large" />
                <p className="nav_text" >Inbox</p> </a></Link>
            </div>
            <div className="nav_icon_text">
                <Link href="/profile"><a> <PermIdentityIcon className="nav_icon" fontSize="large" />
                <p className="nav_text" >Me</p> </a></Link>
            </div>
    </div>
    )
}