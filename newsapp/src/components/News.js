import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8
    }
    
    static propType = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor(){
        super();
        console.log("hello i am a constructor from teh news component")
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f29ac701211549ec90b2ef92b8e6f6fc&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(data);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

    handleNextClick = async ()=>{
        if (this.state.page + 1 > (Math.ceil(this.state.totalResults/this.props.pageSize)))
        {

        }
        else 
        {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f29ac701211549ec90b2ef92b8e6f6fc&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(data); 
            
            this.setState({
                page:this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }

    handlePrevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f29ac701211549ec90b2ef92b8e6f6fc&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(data); 
        
        this.setState({
            page:this.state.page - 1,
            articles: parsedData.articles
        })
    }

    render() {
        return (
        <div className="container my-3">
            <h1 className="text-center">
                NewsMonkey top headlines
            </h1>
        
            <div className="container d-flex justify-content-between">
                 <button disabled={this.state.page <= 1} type="button" className="btn btn-dark my-4" onClick={this.handlePrevClick}>&larr; Previous page</button>
                 <button disabled={this.state.page + 1 > (Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark my-4" onClick={this.handleNextClick}>Next page &rarr;</button>
            </div>
 
            <div className="row"> 

            {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}> 
                        <NewsItem  title={element.title} description={element.description} imageurl={element.urlToImage} newsUrl={element.url} author={element.author? element.author: "Unknown"} date={element.publishedAt} />
                    </div>  
            })}

            </div>
            <div className="container d-flex justify-content-between">
                 <button disabled={this.state.page <= 1} type="button" className="btn btn-dark my-3" onClick={this.handlePrevClick}>&larr; Previous page</button>
                 <button disabled={this.state.page + 1 > (Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark my-3" onClick={this.handleNextClick}>Next page &rarr;</button>
            </div>
        </div>
        )
    }
}

export default News
