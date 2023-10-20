import Dropdown from "./Dropdown";
import "./Navbar.css"
export default function Navbar({changeGrouping,changeOrdering,grouping,ordering}) {
    return (
        <div className="navbar">
            <Dropdown changeGrouping={changeGrouping} changeOrdering={changeOrdering} grouping={grouping} ordering={ordering}/>
        </div>
    );
}