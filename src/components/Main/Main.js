import React from 'react';

import Movies from './Movies/Movies';
import Navigation from './Navigation/Navigation';

class Main extends React.Component {
    render() {
        return(
            <section className="main">
                <Navigation />
                <Movies />
            </section>
        );
    }
}

export default Main;