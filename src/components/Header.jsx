import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <ul >
                <NavLink to="/" style={{marginRight:"20px"}}>Home</NavLink>
                <NavLink to="/simpleForm" style={{marginRight:"20px"}}>Simple Form</NavLink>
                <NavLink to="/stateForm" style={{marginRight:"20px"}}>Use State Form</NavLink>
                <NavLink to="/refForm" style={{marginRight:"20px"}}>Refference Form</NavLink>
                <NavLink to="/reUsableForm" style={{marginRight:"20px"}}>ReUsable Form</NavLink>
                <NavLink to="/formMaster" style={{marginRight:"20px"}}>Form Master</NavLink>
            </ul>
        </div>
    );
};

export default Header;