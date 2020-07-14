import React, { Component } from 'react';
import classnames from 'classnames/bind';

// api
import axiosInstance from '../../api';

// constants
import { API_KEY } from '../../constants/api';

// styles
import styles from './Category.module.css';

// components
import Card from '../../components/common/Card';
import Container from '../../components/common/Container';

const cx = classnames.bind(styles);

class Category extends Component {

    state = {
        news: [],
    };

    componentDidMount() {
        const { id } = this.props.match.params;
        axiosInstance.get(`/everything?sources=${id}&apiKey=${API_KEY}`)
            .then(response => this.setState({news: response.data.articles}));
    }

    componentDidUpdate(prevProps) {
        const { id } = this.props.match.params;
        if (prevProps.match.params.id === id) return;

        axiosInstance.get(`/everything?sources=${id}&apiKey=${API_KEY}`)
            .then(response => this.setState({news: response.data.articles}));
    }

    render() {
        const { news } = this.state;

        return (
            <Container>
                <div className={cx('content')}>
                    {news.map((n, idx) => {
                        return <Card
                            key={idx}
                            title={n.title}
                            img={n.urlToImage}
                            date={n.publishedAt}
                            description={n.description}
                        />
                    })}
                </div>
            </Container>
        )
    }
}


export default Category;
