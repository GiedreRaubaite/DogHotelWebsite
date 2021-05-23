import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home/Home';
import Services from './Services/Services';
import { Contact } from './Contact/Contact';
import Album from './Album/Album'
import { Layout } from './components/Layout';
import NavigationBar from './components/NavigationBar';
import { Footer } from './components/Footer';
import GlobalStyle from './globalStyles';


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <Router>
                    <NavigationBar />
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/services" component={Services} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/album" component={Album} />

                        </Switch>
                    </Layout>
                </Router>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;