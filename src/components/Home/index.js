import React, { Component } from 'react';
import classnames from 'classnames/bind';
import axios from 'axios';

// styles
import styles from './Home.module.css';

// constants
import { BASE_URL, API_KEY } from '../../constants';

// components
import Container from '../common/Container';
import Card from '../common/Card';
import PageHeading from '../common/PageHeading';

const cx = classnames.bind(styles);

class Home extends Component {

    state = {
        news: [],
    };

    componentDidMount() {
        axios.get(`${ BASE_URL }/top-headlines?country=us&apiKey=${ API_KEY }`)
            .then(response => this.setState({ news: response.data.articles }));
    }

    render() {
        const { news } = this.state;

        return (
            <div className={ cx('home') }>
                <PageHeading title="The Latest News" />
                <Container>
                    <div className={ cx('home__content') }>
                        {news.map(n => {
                            return <Card
                                key={n.publishedAt}
                                img={n.urlToImage}
                                title={n.title}
                                date={n.publishedAt}
                                description={n.description}
                            />
                        })}
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;
