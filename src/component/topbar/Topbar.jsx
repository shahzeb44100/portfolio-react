import "./topbar.scss";
import {Person , Mail} from "@material-ui/icons"

export default function Topbar({menuOpen , setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#works" className="logo">ShahZeb</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+923479905282</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>zeb44100@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="humburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="Line1"></span>
                        <span className="Line1"></span>
                        <span className="Line1"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
