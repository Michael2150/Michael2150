import {Container, Header, Segment} from "semantic-ui-react";
import React from "react";

class AppIntro extends React.Component {
    render() {
        return (
            <Container>
                <div className={"page-intro"}>
                    <Segment basic>
                        <Header size={"huge"} >
                            <Header size={"huge"}>
                                <Header size={"huge"}>
                                    <span> Michael Gerber </span>
                                </Header>
                            </Header>
                        </Header>
                    </Segment>
                </div>
            </Container>
        );
    }
}

export default AppIntro;