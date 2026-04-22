// ===============================
// 1. GENERIC STORAGE HELPERS
// ===============================
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getData(key) {
    let stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
}

// ===============================
// 2. PEOPLE
// ===============================
let people = getData("people") || [
    { id: 1, name: "John", surname: "Minter", email: "john@gmail.com", username: "jminter" },
    { id: 2, name: "Jane", surname: "Smith", email: "jane@gmail.com", username: "jsmith" },
    { id: 3, name: "Bob", surname: "Johnson", email: "bob@gmail.com", username: "bjohnson" },
    { id: 4, name: "Alice", surname: "Williams", email: "alice@gmail.com", username: "awilliams" },
    { id: 5, name: "Charlie", surname: "Brown", email: "charlie@gmail.com", username: "cbrown" }
];
saveData("people", people);

function createPerson(name, surname, email, username) {
    let newPerson = {
        id: Date.now(),
        name,
        surname,
        email,
        username
    };
    people.push(newPerson);
    saveData("people", people);
}

// ===============================
// 3. PROJECTS
// ===============================
let projects = getData("projects") || [
    { id: 1, name: "Campus Laundry Booking System" },
    { id: 2, name: "Gym Membership Management App" },
    { id: 3, name: "Food Truck Ordering Platform" }
];
saveData("projects", projects);

function createProject(name) {
    let newProject = {
        id: Date.now(),
        name
    };
    projects.push(newProject);
    saveData("projects", projects);
}

// ===============================
// 4. ISSUES
// ===============================
function getIssues() {
    return getData("issues");
}

function saveIssues(issues) {
    saveData("issues", issues);
}

function createIssue(issueData) {
    let issues = getIssues();
    let newIssue = {
        id: Date.now(),
        ...issueData,
        status: "open"
    };
    issues.push(newIssue);
    saveIssues(issues);
}

function updateIssue(id, updatedData) {
    let issues = getIssues();
    issues = issues.map(issue => {
        if (issue.id === id) {
            let updatedIssue = { ...issue, ...updatedData };
            return applyStatusLogic(updatedIssue);
        }
        return issue;
    });
    saveIssues(issues);
}

function getIssueById(id) {
    let issues = getIssues();
    return issues.find(issue => issue.id === id);
}

function assignIssue(issueId, personId) {
    let issues = getIssues();
    issues.forEach(issue => {
        if (issue.id === issueId) {
            issue.assignedTo = personId;
        }
    });
    saveIssues(issues);
}

// ===============================
// 5. STATUS LOGIC
// ===============================
function applyStatusLogic(issue) {
    let today = new Date();
    let target = new Date(issue.targetDate);

    if (issue.actualDate) {
        issue.status = "resolved";
    } else if (today > target) {
        issue.status = "overdue";
    } else {
        issue.status = "open";
    }
    return issue;
}
