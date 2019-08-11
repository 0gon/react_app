import React, { Component } from 'react';

class Subject extends Component{
  render(){
    return(
      <header>
        <h2><a href="/" onClick={function(e){
          e.preventDefault();
          this.props.onChagePage();
        }.bind(this)}>{this.props.title}</a></h2>
        {this.props.desc}
      </header>
    )
  }
}
export default Subject;
