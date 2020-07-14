import React, { Component } from 'react';
import classnames from 'classnames/bind';

// api
import axiosInstance from '../../api';

// constants
import { API_KEY } from '../../constants/api';

// styles
import styles from './SearchResult.module.css';

// components
import PageHeading from '../common/PageHeading';
import Container from '../common/Container';
import Card from '../common/Card';

const cx = classnames.bind(styles);

class SearchResult extends Component {

    state = {
        news: [],
    };

    componentDidMount() {
        const { search } = this.props.location;

        axiosInstance.get(`/everything${ search }&apiKey=${ API_KEY }`)
            .then(response => this.setState({ news: response.data.articles }));
    }

    componentDidUpdate(prevProps) {
        const { search } = this.props.location;

        if (prevProps.location.search === search) return;

        axiosInstance.get(`/everything${ search }&apiKey=${ API_KEY }`)
            .then(response => this.setState({ news: response.data.articles }));
    }

    render() {
        const { news } = this.state;

        return (
            <div>
                <PageHeading title="Search Result" />
                <Container>
                    <div className={cx('content')}>
                        { news.map((n, idx) => {
                            return <Card
                                key={ idx }
                                title={ n.title }
                                img={ n.urlToImage }
                                date={ n.publishedAt }
                                description={ n.description }
                            />;
                        }) }
                    </div>
                </Container>
            </div>
        );
    }
}


export default SearchResult;
