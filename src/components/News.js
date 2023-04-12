import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2cd48992787d4dcb82d5f6ed8cd9c3e4&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }
    useEffect(() => {
        document.title = `News - ${props.category}`;
        updateNews();
    }, [])

    const handleNext = async () => {
        if (page + 1 <= Math.ceil(totalResults / props.pageSize)) {
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2cd48992787d4dcb82d5f6ed8cd9c3e4&page=${page + 1}&pageSize=${props.pageSize}`;
            setLoading(true)
            let data = await fetch(url);
            let parsedData = await data.json();
            setPage(page + 1)
            setArticles(parsedData.articles)
            setLoading(false)
        }
    }

    const handlePrevious = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2cd48992787d4dcb82d5f6ed8cd9c3e4&page=${page - 1}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setPage(page - 1)
        setArticles(parsedData.articles)
        setLoading(false)
    }

    return (
        <div className='container my-3'>
            <h1 className="text-center" style={{ margin: '40px 0', marginTop: '100px' }}>Daliy News - {props.category}</h1>
            {loading && <Spinner />}
            <div className="row">
                {!loading && articles.map((element) => {
                    return <div className="col-md-4 my-3" key={element.url}>
                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                })}
            </div>
            <div className="container-my-5 d-flex justify-content-between">
                <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevious}>&larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNext}>Next &rarr;</button>
            </div>
        </div >
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'sports'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
