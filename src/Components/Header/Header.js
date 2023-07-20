import LOGO from "../../assets/img/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-item">
        <ul className="header-logo">
          <li className="list-item">
            <img src={LOGO} alt="" />
          </li>
          <li className="list-item search icon">
            <SearchIcon fontSize="large" />
          </li>
        </ul>
      </div>
      <div className="nav-item">
        <ul className="header-list">
          <li className="list-item home icon" >
            <HomeOutlinedIcon fontSize="large" />
          </li>
          <li className="list-item icon">
            <ArticleOutlinedIcon fontSize="large"/>
          </li>
          <li className="list-item icon">
            <FeedOutlinedIcon fontSize="large"/>
          </li>
          <li className="list-item icon">
            <PersonOutlineRoundedIcon fontSize="large"/>
          </li>
        </ul>
      </div>
      <div className="nav-item">
        <ul className="header-list">
          <li className="list-item icon">
            <NotificationsRoundedIcon fontSize="large"/>
          </li>
          <li className="list-item icon">
            <LogoutRoundedIcon fontSize="large"/>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
