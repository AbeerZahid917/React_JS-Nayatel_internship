import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



const News = (props) =>
{    
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0)

    
    const updateNews= async ()=>{
        props.setProgress(10);

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(data);
        
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews()
    }, [])

    const handleNextClick = async ()=>{
        setPage(page + 1);
        updateNews();
    }

    const handlePrevClick = async ()=>{
        setPage(page - 1);
        updateNews();
    }

    const fetchMoreData = async ()=>{
        setPage(page + 1)

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(data);

        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    };


    return (
        <>
        <div className="container my-3">
            <h1 className="text-center">
                NewsMonkey - top headlines on {props.category}
            </h1>
            
            <InfiniteScroll
                dataLength={articles ? articles.length : 0}
                next={fetchMoreData}
                hasMore={articles && articles.length !== totalResults}
                loader={<h4>Loading...</h4>}
                >


            <div className="container">
                <div className="row"> 
                    {articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}> 
                                <NewsItem  title={element.title} description={element.description} imageurl={element.urlToImage} newsUrl={element.url} author={element.author? element.author: "Unknown"} date={element.publishedAt} />
                            </div>  
                    })}
                </div>
            </div>

            </InfiniteScroll>
        </div>
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8
}
    
News.propType = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
