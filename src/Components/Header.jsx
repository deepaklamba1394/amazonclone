import './Header.css';
import React from 'react';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';
import {signOut} from 'firebase/auth';

function Header()
{
    const [{basket}] = useStateValue();

return <nav className="header">
    <Link to="/">
    <img src="https://pngimg.com/uploads/amazon/amazon_PNG18.png" alt="" className="header__logo"></img>
    </Link>
    <div className="header__search">
    <input type="text" className="header__searchInput" />
    <SearchIcon className="header__searchIcon"/>
    </div>
    <div className="header__nav">
        <Link className="header__link" to="/login">
        <div className="header__option">
            <span className="header__optionLineOne">Hello {auth.currentUser?.email} </span>
            {!auth.currentUser && <span className="header__optionLineTwo">Sign in</span>}
            </div>
            
        </Link>
        <Link className="header__link"><div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
            </div></Link>
        {/* 3rd link */}
        <Link className="header__link"><div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span clasasName="header__optionLineTwo">Prime</span>
            </div></Link>
        <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
            <ShoppingBasketIcon classname="header_basketIcon"/>
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link>
        {auth.currentUser && <Link to="/" className="header__link">
        <div className="header__optionBasket">
            <span className="header__optionLineOne" onClick={signOut(auth)}>Sign Out</span>
        </div>
        </Link>}
    </div>
</nav>;
}

export default Header;