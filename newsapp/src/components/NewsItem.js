import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props;

    return (
      <div>
        <div className="card" style={{width: "18rem;"}}>
            <img src="https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/ad35/live/b1dc0bd0-3915-11f0-8536-ef1d4afa65b5.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
