import React, {Component, Fragment} from 'react';
import './Header.css';  // CSS file for header

class Header extends Component {

    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return <div className='header-flex-container'>
        {
                    <div className='logo-flex-container'>
                            <header className='logo'>Image Viewer</header>
                    </div>
        }
        </div>
    }

}

export default Header;