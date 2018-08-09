import * as React from 'react';
import Footer from './components/footer';
import Prediction from './components/prediction';
import './home.css';

class Home extends React.Component {
    public render() {
        return (
            <div className="home">
                <header className="d-flex justify-content-center home-header">
                    <h2 id="home-title">你的預測</h2>
                    <p id="home-date">13-5-2018</p>
                </header>
                <Prediction />
                <Prediction />
                <Prediction />
                <Prediction />
                <Footer />
            </div>
        )
    }
}

export default Home;