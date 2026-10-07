import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import logo from "../../assets/Blockbuster_logo.png";
import "./Header.css";

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to="/"></Link>
                <img src={logo} alt="logo Blockbuster" />
                <span>Blockbuster</span>
            </div>
            <Nav />
        </header>
    );
};
