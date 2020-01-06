import React from 'react';
import Card from "./Card";

class ToDoApp extends React.Component{

  state={
    date: "",
    cardsArray: [],
  }

  componentDidMount() {
    
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