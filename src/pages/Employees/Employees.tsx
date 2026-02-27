
import{ PageWrapper, Card, Label, Value}from "./styles";
import { useContext } from "react";
import { AppLayoutContext } from "../Layout/Layout";
import { v4 } from "uuid";


// import { PageWrapper } from "pages/EmployeeApp/LogIn/styles";
function Employees (){
 
  const { employee } = useContext(AppLayoutContext);
  const employeeCards = employee.map((employeeData) => {
    return (<Card key={v4()}><Label>Name</Label>
        <Value>{employeeData.name}</Value>
        <Label>Surname</Label>
        <Value>{employeeData.lastName}</Value>
        <Label>Age</Label>
        <Value>{employeeData.age}</Value>
        <Label>Position</Label>
        <Value>{employeeData.jobPosition}</Value></Card>
    )
  })
    return(
        < PageWrapper>
   {employeeCards}
        </ PageWrapper>
    )
};

export default Employees;