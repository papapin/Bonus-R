import React from 'react'

const NewsItem = (props) => {

    const { title, feed } =   props.item;

    return (
        <div>
            
                <h3>{ title }</h3>
                <div>{ feed }</div>
             
        </div>
    )
}

export default NewsItem

   