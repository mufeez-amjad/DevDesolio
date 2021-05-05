import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faRss } from '@fortawesome/free-solid-svg-icons'

import "./Project.css";

class Project extends Component {

  links = () => {
    return (
      <div className="links">
        {this.props.links.blog ? <a href={this.props.links.blog} target="blank" onClick={() => this.props.clickHandler("Blog:" + this.props.name)}><FontAwesomeIcon icon={faRss} /></a> : null}
        {this.props.links.github ? <a href={this.props.links.github} target="blank" onClick={() => this.props.clickHandler("Github:" + this.props.name)}><FontAwesomeIcon icon={faGithub} /></a> : null}
      </div>
    )
  }

  winner = () => {
    const { winner, downloads } = this.props;

    if (winner || downloads)
      return (
        <div className={`pill ${winner ? "winner" : "downloads"}`}>
          {winner ? <em>{winner}</em> : <em>{downloads}</em>}
        </div>        
      )
    }

  render() {
    return (
      <div className="project" style={{color: this.props.winner !== undefined ? 'yellow': ''}}>
        <img src={this.props.image} alt={this.props.name}/>
        <div className="content">
          <div className="heading">
            <h1>{this.props.name}</h1>
            <div className="floatRight">
              {this.winner()}
              {this.links()}
            </div>
          </div>
          <div className="description">{this.props.description}</div>
          <div className="languages">
            {this.props.tools.map((language, index) => (
              <em key={index}>{language}</em>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
