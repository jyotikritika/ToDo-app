import React from 'react';
import Card from "./Card";

class ToDoApp extends React.Component{

  state={

  }

  render(){
    return(
      <div className="toDoParent">
        <Card />
      </div>
    );
  }
}

export default ToDoApp;