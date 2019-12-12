import React from 'react';

class Task extends React.Component {

  state={
    displayDeleteBtn: false,
  }

  showDeleteBtn= ()=> {
    console.log("mouse on task ",this.props.idf);
    this.setState({displayDeleteBtn : true});
  }

  hideDeleteBtn= ()=> {
    console.log("mouse out of task", this.props.idf);
    this.setState({displayDeleteBtn: false});
  }

  render(){
    return(
      <div className="taskContainer"
            onMouseOverCapture = {this.showDeleteBtn}
            onMouseLeave = {this.hideDeleteBtn}>
        <div className="listItem"> 
          <div className = "boxItem">
            <label className = "chckbox">
              <input 
                type="checkbox" 
                onChange={()=>this.props.toggleCheckbox(this.props.idf)}
              />
              <span className = {this.props.checkFlag ? "tickbox" : ""}></span> 
            </label>
          </div>   
          <div 
            className={this.props.checkFlag ? "strikethrough": ""} 
            // onMouseOverCapture = {this.showDeleteBtn}
            // onMouseLeave = {this.hideDeleteBtn}
            >
            {this.props.taskName}
          </div>
        </div>
        <button className={this.state.displayDeleteBtn ? "deleteBtn" : "hideDeleteBtn"}
                onClick={()=>this.props.deleteTask(this.props.idf)}
                >
        </button>
      </div>
    );
  }
}

export default Task;