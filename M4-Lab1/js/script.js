// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let employeeForm = document.getElementById('addForm');
let employees = document.getElementById('employees');

// SET A Count VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let totalCount = 0;
let empCount = document.getElementById("empCount");

// ADD EMPLOYEE
employeeForm.addEventListener('submit', (event) => {
    // PREVENT FORM SUBMISSION
    event.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let empId = document.getElementById('id').value;
    let empName = document.getElementById('name').value;
    let empExtension = document.getElementById('extension').value;
    let empEmail = document.getElementById('email').value;
    let empDepartment = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = employees.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let id = newRow.insertCell(0);
    let name = newRow.insertCell(1);
    let extension = newRow.insertCell(2);
    let email = newRow.insertCell(3);
    let department = newRow.insertCell(4);
    let deleteOption = newRow.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    id.appendChild(document.createTextNode(empId));
    name.appendChild(document.createTextNode(empName));
    extension.appendChild(document.createTextNode(empExtension));
    email.appendChild(document.createTextNode(empEmail));
    department.appendChild(document.createTextNode(empDepartment));

    // CREATE THE DELETE BUTTON
    let button = document.createElement('button');
    button.className = 'btn btn-danger delete';
    button.appendChild(document.createTextNode('x'));
    deleteOption.appendChild(button);


    // RESET THE FORM
    employeeForm.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    totalCount += 1;
    empCount.textContent = totalCount;

});

// DELETE EMPLOYEE
employees.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            employees.deleteRow(event.target.parentNode.parentNode.rowIndex);
            totalCount -= 1;
            empCount.textContent = totalCount;
        }
    }
});