import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"
import Navbar from "../navbar/Navbar";


const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                </div>
                <div className="charts">
                </div>
            </div>
        </div>
    )
}


export default Home