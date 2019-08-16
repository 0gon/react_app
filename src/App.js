import React, { Component } from 'react';
import './App.css';
import TOC from "./components/TOC"
import Subject from "./components/Subject"
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"
import UpdateContent from "./components/UpdateContent"
import Control from "./components/Control"

class App extends Component{
  constructor(props){
    super(props);
    this.content_max=3;
    this.state = {
      Subject : {title:"WEB", desc:"world wide web"},
      Selected_id : 2,
      mode : "create",
      welcome : {title : "welcome", desc:"hellow React"},
      Content : [
        {id: 1 , title: "HTML", desc: "hyper text markup language"},
        {id: 2 , title: "CSS", desc: "CSS"},
        {id: 3 , title: "Javascript", desc: "JS"},
      ],
    }
  }
  getContent(){
    var i = 0;
      while(i<this.state.Content.length){
        var data = this.state.Content[i]
        if(data.id===this.state.Selected_id){
          return data;
        }
        i++;
      }
  }
  getArticle(){
    var _title, _desc , _article= null;
    if(this.state.mode==='welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article =  <ReadContent title={_title} desc={_desc}></ReadContent>;
    }else if(this.state.mode==='read'){
      var _content = this.getContent();
      _article=<ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    }else if(this.state.mode==='create'){
      _article =  <CreateContent onSubmit={function(_title, _desc){
        this.content_max= this.content_max+1;
        var _content=this.state.Content.concat(
          {id:this.content_max, title:_title, desc:_desc}
        );
        this.setState({
          Content:_content,
          mode: 'read',
          Selected_id: this.content_max,
        })
      }.bind(this)}></CreateContent>
    }else if(this.state.mode==='update'){
      _content = this.getContent();
      _article =  <UpdateContent data={_content} onSubmit={function(_id,_title, _desc){
        var _contents = Array.from(this.state.Content);
        var i = 0;
        while(i<_contents.length){
          if(_contents[i].id===_id){
            _contents[i]={id:_id, title:_title, desc:_desc}
            break;
          }
          i++;
        }
        this.setState({
          Content:_contents,
          mode:'read'
        })
      }.bind(this)}></UpdateContent>
    }
    return _article
  }
  render(){
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
       {this.getArticle()}
      </div>
    )
  }
}
export default App;
