import React from 'react';
class Header extends React.Component {
    render() {
        return (
            <div className="App-Header">
                <div className="Left" >
                    <h1>My Website</h1>
                </div>
                <div className="Middle">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        );
    }
}
export default Header;