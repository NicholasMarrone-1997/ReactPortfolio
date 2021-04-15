import React from 'react';

const Work = (props) => {
    return(
<div className="row">
    <div className="portfolio-pic col-sm-2">
        <h3>{props.title}</h3>
        <img title={props.title}
            src={props.image} alt={props.alt} /> 
        <a href={props.repo}>{props.alt} Repo</a>
        <br></br>
        <a href={props.deployed}>{props.alt} Deployed</a>
      </div>
    </div>
    )
}

export default Work;