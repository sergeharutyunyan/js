import {NavLink} from "react-router-dom";

function Menu(props) {
    return (
        <nav>
            <NavLink style={({isActive}) =>
                isActive ? {color:'lightyellow', textDecoration:'none'} : {}} to='.' end>Home</NavLink>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : 'link'} to='courses'>Courses</NavLink>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : 'link'} to='about'>About</NavLink>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : 'link'} to='contact'>Contact</NavLink>
        </nav>
    );
}

export default Menu;
