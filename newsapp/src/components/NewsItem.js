import React from 'react'

const NewsItem = (props) => 
{
    let {title, description, imageurl, newsUrl, author, date} = props;

    return (
        <div className='my-3'>
            <div className="card">
                <img src={!imageurl? "https://cdn.mos.cms.futurecdn.net/xGFuXb9XeSQNBT7sEwehek.jpg": imageurl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
