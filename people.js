//this is the data file where we will be creating the data for the developers, the projects and the issues that will be assigned to the developers and the projects
//this is the function that will be used to save the data to the local storage so that when we refresh or close the browser the data will not be lost and we can retrieve it when we open the browser again
function saveData() {
    localStorage.setItem("people", JSON.stringify(people));
    localStorage.setItem("projects", JSON.stringify(projects));
}
//here we created the develepors who will be assigned to handle the issues
let people = 
[
    { id: 1, name: "John", surname: "Minter", email: "john@gmail.com", username: "jminter" },
    { id: 2, name: "Jane", surname: "Smith", email: "jane@gmail.com", username: "jsmith" },
    { id: 3, name: "Bob", surname: "Johnson", email: "bob@gmail.com", username: "bjohnson" },
    { id: 4, name: "Alice", surname: "Williams", email: "alice@gmail.com", username: "awilliams" },
    { id: 5, name: "Charlie", surname: "Brown", email: "charlie@gmail.com", username: "cbrown" }
]//this is hardc code data 
//this is creating people using a function 
function createPerson(name, surname, email, username) 
{
    let newPerson = {
        id: people.length + 1,
        name,
        surname,
        email,
        username
    };

    people.push(newPerson);
    saveData();
}


// here we created a function that will be used to assign the issues to the developers.
function assignIssue(issueId, personId) {
    for (let issue of issues) {
        if (issue.id === issueId) {
            issue.assignedTo = personId;
        }
    }
}
