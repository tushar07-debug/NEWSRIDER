import React from 'react'

const NewsItems =(props) => {
    let {title, description, imageUrl, newsUrl, author , date,source} = props;  
    return (
      <div className="mx-2 my-3">
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute', right:'0'}}>
        <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
  <img src={!imageUrl?"https://i.insider.com/616db98338c19600183066b9?width=1200&format=jpeg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} <span className="badge rounded-pill bg-success">Latest</span> </h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on { new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
  </div>
</div>       
      </div>
    )
}

export default NewsItems
