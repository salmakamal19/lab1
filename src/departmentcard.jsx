import * as React from "react"
import "./departmentcard.css";
class DepartmentCardClass extends React.Component{
    constructor(props){
        super(props);
        this.state={  DepartMentName: "Financial", 
            Number_of_students: 20,
            Courses: ["Maths", "Accounting"],};
        }
    

handleIncrement= ()=>{
    console.log(" Number of students"),this.state.Number_of_students;
this.setState((prevState)=>({
    Number_of_students:prevState.Number_of_students+1
}));
};

ComponentDidUpdate(preProps, prevState)
{
    console.log(prevState,"prevState")
    if (prevState.Number_of_students!== this.state.Number_of_students){
        console.log("hello there")
    }
}
    
render() {
    return (
      <div className="card">
        <h2>{this.state.DepartMentName} Department</h2>
        <p><strong>Number of Students:</strong> {this.state.Number_of_students}</p>
        <p><strong>Courses:</strong> {this.state.Courses.join(", ")}</p>
        <button className="increment_button" onClick={this.handleIncrement}>
          Increment
        </button>
      </div>
    );
}}


export default DepartmentCardClass;
    