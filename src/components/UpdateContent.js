import React, { Component } from 'react';
class UpdateContent extends Component{
  constructor(props){
    super(props);
    this.state={
      id : this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
    }
    this.inputFormatHandler=this.inputFormatHandler.bind(this);
  }
  inputFormatHandler(e){
    this.setState({
      [e.target.name]:e.target.value,
    })
  }
  render(){
    return(
      <article>
        <h3>Update</h3>
          <form action='#' method='post' onSubmit={
            function(e){
              e.preventDefault();
              this.props.onSubmit(this.state.id,this.state.title,this.state.desc);
            }.bind(this)
          }>
            <input type='hidden' name='id' value={this.state.id}></input>
              <p>
              <input placeholder='title' type='text' name='title'
              value={this.state.title}
              onChange={this.inputFormatHandler}
              ></input>
              </p>
              <input placeholder='desc' type='text' name='desc'
              value={this.state.desc}
              onChange={this.inputFormatHandler}
              ></input>
              <p>
              <input type='submit'></input>
              </p>
          </form>
      </article>
    )
  }
}
export default UpdateContent;
