import React from 'react';
import Task from "./Task";
// import ls from 'local-storage';

class Card extends React.Component{
  
  state={
    taskIdf: 0,
    newTask: {
      idf: -1,
      taskName: "",
      checkedState: false,
    },
    taskArray: [],
    inputAdded: false,
    date: "",
    arraySize: 0,
  }

  componentDidMount(){
    let tasks = localStorage.getItem('taskArray');
    let arrayIdf = localStorage.getItem('arrayIdf');
    arrayIdf === null ? this.setState({arraySize: 0}) : this.setState({arraySize: arrayIdf});
    if(tasks != null) {
      let arrResponse = JSON.parse(localStorage.getItem('taskArray'));
      this.setState({taskArray: arrResponse, arraySize: arrResponse.length});
    }
  }

  // componentWillUnmount(){
  //   this.updateLocalStorage();
  // }

  handleChange= (e)=> {
    console.log("handle change called.");
    let obj = this.state.newTask;
    obj.taskName = e.target.value;
    this.setState({
      newTask: obj, 
      inputAdded: true
    });
  }

  addNewTask=(e)=> {
    e.preventDefault(); //disables default behaviour
    console.log("add new task method called. array size now is: ",this.state.arraySize);
    let obj = this.state.newTask;
    obj.idf = this.state.arraySize;
    this.setState({newTask: obj});
    let arr = this.state.taskArray;
    arr.push(this.state.newTask);
    obj = {
      idf: -1,
      taskName: "",
      checkedState: false,
    };
    this.setState({
      inputAdded: false, 
      newTask: obj,
      taskArray: arr,
      arraySize: this.state.arraySize+1,
    });

    // localStorage.setItem('taskArray', JSON.stringify(this.state.taskArray));
    this.updateLocalStorage();
  }

  deleteTask= (idx)=> {
    console.log("delete task called for task: ", idx);
    let arr = this.state.taskArray;
    arr = arr.filter((item, i) => item.idf !== idx)
    console.log("new array after delete is: ", arr);
    let size = arr.length;
    this.setState({taskArray: arr});
    this.updateLocalStorage();
  }

  toggleCheckbox=(idx)=> {
    console.log("toggle checkbox called!",idx);
    let arr = this.state.taskArray;
    let elt = arr.findIndex((item) => item.idf === idx);
    let flag = arr[elt].checkedState;
    (!flag) ? flag = true : flag = false;
    arr[elt].checkedState = flag;
    this.setState({taskArray: arr })
    this.updateLocalStorage();
  }

  updateLocalStorage = ()=> {
    console.log("updating local storage!");
    localStorage.setItem('taskArray', JSON.stringify(this.state.taskArray));
    localStorage.setItem('arrayIdf', JSON.stringify(this.state.arraySize))
  }

  render(){
    // console.log("state: ", this.state);

    return(
      <div className="card">
        <div className="dateHeader">
          Todays Date!
        </div>
        <hr />
        <div className="heading">
          To do List
        </div>
        <div className="content">
          {this.state.taskArray.length>0?
            (<div>
              {this.state.taskArray.map((item,i)=>
                <Task 
                  key={i} 
                  idf={item.idf} 
                  taskName={item.taskName} 
                  checkFlag={item.checkedState}
                  toggleCheckbox={this.toggleCheckbox}
                  deleteTask={this.deleteTask}
                  />
                )
              }
            </div>):<div className="listItem">Go and add some new Task!</div>
          }
          <form onSubmit={this.addNewTask} className="addTask">
            <input 
              type="text"
              className="addTask" 
              placeholder="+ add task..."
              value={this.state.newTask.taskName}
              onChange={this.handleChange}
              onFocus={()=>console.log("focused.")}
              onBlur={this.state.inputAdded? this.addNewTask: ()=>console.log("blurred.")}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Card;