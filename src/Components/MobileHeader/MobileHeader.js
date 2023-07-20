import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';

import "./MobileHeader.css"

const MobileHeader = () =>{
    return(
        <>
        <div className="mobile-header-container">
            <div className="home icon-ex icon-2"><HomeOutlinedIcon/> </div>
            <div className="icon-2"><ArticleOutlinedIcon/> </div>
            <div className="icon-2"><PersonOutlineRoundedIcon/> </div>
            <div className="icon-2"><SearchIcon/> </div>
            <div className="icon-2"><NewspaperOutlinedIcon/> </div>
        </div>
        </>
    )
}

export default MobileHeader;