import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FullScreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ListOutLinedIcon from "@mui/icons-material/ListOutlined";
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./navbar.css";

const Navbar = () => {


    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search...." />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        English
                    </div>

                    <div className="item">
                        <FullScreenExitOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlined className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlinedIcon className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ListOutLinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/1967902/pexels-photo-1967902.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="avatar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
