// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [11111111, "Aditi Mewada", 1111, "aditi@test.com", "Executive"],
    [11111112, "Nick Jonas", 1112, "nick@test.com", "Sales"],
    [11111113, "Ram Prasand", 1113, "ram@test.com", "Sales"],
    [11111114, "Lakshman Yadav", 1114, "lakshman@test.com", "Marketing"],
    [11111115, "Joe Goldberg", 1115, "joe@test.com", "Marketing"]
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employeesList') !== null) {
    employees = JSON.parse(localStorage.getItem('employeesList'))
}

// GET DOM ELEMENTS
let employeeForm = document.getElementById('addForm')
let employeeTable = document.getElementById('empTable')
let employeeCount = document.getElementById('empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

// ADD EMPLOYEE
employeeForm.addEventListener('submit', (event) => {
    // PREVENT FORM SUBMISSION
    event.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let id = parseInt(document.getElementById('id').value)
    let name = document.getElementById('name').value
    let extension = parseInt(document.getElementById('extension').value)
    let email = document.getElementById('email').value
    let department = document.getElementById('department').value
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let employee = [id, name, extension, email, department]
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(employee)
    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
    employeeForm.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    employeeForm.id.focus()
})

// DELETE EMPLOYEE
employeeTable.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let parentRowIndex = event.target.parentNode.parentNode.rowIndex
            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(parentRowIndex - 1, 1)
            // BUILD THE GRID
            buildGrid()
        }
    }
})

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    employeeTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let emp of employees) {
        tbody.innerHTML += 
        `
        <tr>
            <td>${emp[0]}</td>
            <td>${emp[1]}</td>
            <td>${emp[2]}</td>
            <td>${emp[3]}</td>
            <td>${emp[4]}</td>
            <td><button class="btn btn-danger delete">x</button></td>
        </tr>
        `
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    employeeTable.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
    employeeCount.value = `(${employees.length})`
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employeesList', JSON.stringify(employees))
}