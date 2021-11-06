// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}



function updateEmployeeWithKeyAndValue() {
    const employeeUpdate = {...employee};
  
    employeeUpdate['streetAddress'] = '11 Broadway';

  return employeeUpdate;
}


function destructivelyUpdateEmployeeWithKeyAndValue() {
  
  employee.streetAddress = '12 Broadway'

  return employee;

}


function deleteFromEmployeeByKey(employee, key) {
  
    const newEmployee = { ...employee };
  
    delete newEmployee[key] 

    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key){
      delete employee[key]

      return employee
  }