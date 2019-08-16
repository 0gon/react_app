import React, { Component } from 'react';

class TOC extends Component{
    shouldComponentUpdate(newProps, newState){
        console.log("shouldCompoent",newProps, this.props.data)
        if(newProps.data===this.props.data){
            return false;
        }
        return true;
    }
    render(){
        console.log('render active')
        var lists =[]
        var data = this.props.data;
        var i = 0;
        while(i<data.length){
            lists.push(<li key={data[i].id}><a 
                data-id={data[i].id}
                href="/" onClick={
                function(e){
                    e.preventDefault();
                    this.props.onChagePage(e.target.dataset.id);
                }.bind(this)
            }>{data[i].title}</a></li>)
            i++;
        }
      return(
          <div>
              {lists}
          </div>
      )
    }
  }
  export default TOC;
  