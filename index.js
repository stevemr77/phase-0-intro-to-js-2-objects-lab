const employee = {
    name: "Michael",
    address: "6725 S Langdale St"
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployee = {...obj};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key){
    const newEmployee = {...obj};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
