import React from 'react';
import {Grid, Menu, Segment, Header, Image, Button, ButtonGroup, Container} from "semantic-ui-react";

class AppHeader extends React.Component {
    MenuItems = [
        {name: 'about', label: '//About_', link: '#about'},
        {name: 'experience', label: '//Experience_', link: '#experience'},
        {name: 'portfolio', label: '//Portfolio_', link: '#portfolio'},
        {name: 'contact', label: '//Contact_', link: '#contact'},
    ];

    render() {
        return (
            <Menu stackable inverted borderless fixed={"top"}>
                <Menu.Item>
                    <Header inverted as='h1' content='My App'>
                        <span className={"roboto"}> Michael Gerber_ </span>
                    </Header>
                </Menu.Item>

                <Menu.Item position={"right"}>
                    {
                        this.MenuItems.map(item => {
                            return (
                                <a href={item.link}>
                                    <Menu.Item
                                        key={item.name}
                                        name={item.name}
                                        active={false}

                                    >
                                                <span className={"roboto"}>
                                                        {item.label}
                                                </span>
                                    </Menu.Item>
                                </a>
                            );
                        })
                    }
                </Menu.Item>



            </Menu>
        );
    }
}
export default AppHeader;