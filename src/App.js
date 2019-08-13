import React, { Component } from 'react';
import './App.css';
import TOC from "./components/TOC"
import Subject from "./components/Subject"
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"
import Control from "./components/Control"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      Subject : {title:"WEB", desc:"world wide web"},
      Selected_id : 2,
      mode : "welcome",
      welcome : {title : "welcome", desc:"hellow React"},
      Content : [
        {id: 1 , title: "HTML", desc: "hyper text markup language"},
        {id: 2 , title: "CSS", desc: "CSS"},
        {id: 3 , title: "Javascript", desc: "JS"},
      ],
    }
  }
  render(){
    var _title, _desc , _article= null;
    if(this.state.mode==='welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article =  <ReadContent title={_title} desc={_desc}></ReadContent>;
    }else if(this.state.mode==='read'){
      var i = 0;
      while(i<this.state.Content.length){
        var data = this.state.Content[i]
        if(data.id===this.state.Selected_id){
          _title = data.title;
          _desc = data.desc;
          _article =  <ReadContent title={_title} desc={_desc}></ReadContent>;
          break;
        }
        i++;
      }
    }else if(this.state.mode==='create'){
      _article =  <CreateContent title={_title} desc={_desc}></CreateContent>
    }
    return(
      <div>
        <Subject title={this.state.Subject.title} desc={this.state.Subject.desc}
        onChagePage={function(){
          this.setState({
            mode: 'welcome',
          })
        }.bind(this)}
        ></Subject>
        <TOC data = {this.state.Content} onChagePage={
          function(id){
            this.setState({
              mode : "read",
              Selected_id : Number(id),
            })
          }.bind(this)
        }></TOC>
        <Control onChangeMode={
          function(_mode){
            this.setState({
              mode: _mode,
            })
          }.bind(this)
        }></Control>
       {_article}
      </div>
    )
  }
}
export default App;
