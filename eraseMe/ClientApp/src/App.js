  //Create React js Application in ASP.Net Core 6


import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
const App = () => {
  const [employees, setEmployees] = useState([]);



  useEffect(() => {
    fetch("api/employee/GetEmployees")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((responseJson) => {
        setEmployees(responseJson);
      });
  }, [])
  

  return (
    <div className="container">
      <h1>Employees</h1>
      <div className="row">
        <div className="col-sm-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>iDEmployee</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((item) => (
                <tr>
                  <td>{item.idEmployee}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default App;