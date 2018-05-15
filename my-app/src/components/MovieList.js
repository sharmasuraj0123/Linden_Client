import React, { Component } from 'react';
import { Menu, Header, Image, List } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';

class MovieList extends Component {
    render() {
        return (
            this.props.movies.map((movie) =>
                <Menu key={movie.name} borderless>
                    <Menu.Item>
                        <Link to={'/' + movie.contentType + '/' + movie.id}>
                            <Header size='small' >
                                {movie.name}
                            </Header>
                        </Link>
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <Image circular
                            src={(movie.lindenMeter >= 75) ? (require("../images/Fall.png")) : (require("../images/Winter.png"))}
                            style={{ width: 25, verticalAlign: 'bottom' }}
                        />
                        <Header size='small'>
                            {movie.lindenMeter + ' %'}
                        </Header>
                    </Menu.Item>
                </Menu>
            )
        );
    }
}

export default withRouter(MovieList);
