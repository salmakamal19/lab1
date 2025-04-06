import { useState } from "react"
import "./departmentcard.css"; 

function DepartmentCard(){
      const [department, setdepartment] = useState({
        DepartMentName:"Financial",
        Number_of_students:20,
        Courses:["Maths","Accounting"],
    })
    const handleIncrement = () => {
        setdepartment((prevState) => ({
          ...prevState, 
          Number_of_students: prevState.Number_of_students + 1, 
        }));
      };
    
      return(
        <>
        <div className="card">
      <h2>{department.DepartMentName} Department</h2>
      <p><strong>Number of Students:</strong> {department.Number_of_students}</p>
      <p><strong>Courses:</strong> {department.Courses.join(", ")}</p>
      <button className="increment_button" onClick={handleIncrement}>Increment </button>
    </div>
    </>
  
      )};
export default DepartmentCard