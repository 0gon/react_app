import React, { Component } from 'react';
class CreateContent extends Component{
  render(){
    return(
      <article>
        <h3>Create</h3>
          <form action='/create_process' method='post' onSubmit={
            function(e){
              e.preventDefault();
              this.props.onSubmit(e.target.title.value, e.target.desc.value);
            }.bind(this)
          }>
              <p>
              <input placeholder='title' type='text' name='title'></input>
              </p>
              <input placeholder='desc' type='text' name='desc'></input>
              <p>
              <input type='submit'></input>
              </p>
          </form>
      </article>
    )
  }
}
export default CreateContent;
