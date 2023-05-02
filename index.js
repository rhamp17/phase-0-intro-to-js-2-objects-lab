const employee = {
    name: "Ryan",
    streetAddress: "100 Main St",

 

}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
      ...obj,
      [key]: value,
    };
  }
  const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Jeff",
  );
  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj; 
    };
  
const newEmployeeOne = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Jeff",
);

function deleteFromEmployeeByKey(obj, key) {
    delete newEmployeeOne.name.jeff
    return {
        ...obj = key
          }
     
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete newEmployeeOne.name
    return obj;
}
