import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div>
            <div className="card">
                <img src={imageUrl ? imageUrl : "https://www.cnet.com/a/img/resize/58b0b93406d748b5b0de90fd43e84d42f4c50720/hub/2023/01/05/a27a9e48-7f62-4ae1-9ddd-8f5304012750/razer-handheld-gaming-2155.jpg?auto=webp&fit=crop&height=630&width=1200"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>
                        {source}
                    </span>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} On {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}


export default NewsItem
