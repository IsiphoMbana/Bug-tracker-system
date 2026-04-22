function savePeople() {
    localStorage.setItem("people", JSON.stringify(people));
}

function saveProjects() {
    localStorage.setItem("projects", JSON.stringify(projects));
}

function saveIssues() {
    localStorage.setItem("issues", JSON.stringify(issues));
}


// ===============================
// PEOPLE DATA
// ===============================

let people =
[
    { name: "John", surname: "Minter", email: "john@gmail.com", username: "jminter" },
    { name: "Jane", surname: "Smith", email: "jane@gmail.com", username: "jsmith" },
    { name: "Bob", surname: "Johnson", email: "bob@gmail.com", username: "bjohnson" },
    { name: "Alice", surname: "Williams", email: "alice@gmail.com", username: "awilliams" },
    { name: "Charlie", surname: "Brown", email: "charlie@gmail.com", username: "cbrown" }
];


// ===============================
// CREATE PERSON
// ===============================

function createPerson(name, surname, email, username) 
{
    let newPerson = {
        id: Date.now(),
        name,
        surname,
        email,
        username
    };

    people.push(newPerson);
    savePeople(); // FIXED (was saveData)
}


// ===============================
// ASSIGN ISSUE
// ===============================

function assignIssue(issueId, personId) {
    let issues = getIssues();

    for (let issue of issues) 
    {
        if (issue.id === issueId) 
        {
            issue.assignedTo = personId;
        }
    }

    saveIssues(issues);
}


// ===============================
// SAMPLE ISSUES
// ===============================

let sampleIssues = [
  {
    summary: "Login page not responding",
    description: "Users cannot log in after entering credentials.",
    reportedBy: "John Doe",
    dateReported: "2026-04-05",
    project: "Website",
    assignedTo: 1,
    priority: "high",
    targetDate: "2026-04-10",
    actualDate: "2026-04-09",
    resolution: "Fixed authentication API bug"
  },
  {
    summary: "Dashboard loading slowly",
    description: "Admin dashboard takes too long to load data.",
    reportedBy: "Jane Smith",
    dateReported: "2026-03-28",
    project: "Admin Panel",
    assignedTo: 2,
    priority: "medium",
    targetDate: "2026-04-01",
    actualDate: "",
    resolution: ""
  },
  {
    summary: "Profile image upload fails",
    description: "Error occurs when uploading profile pictures.",
    reportedBy: "Mike Johnson",
    dateReported: "2026-04-15",
    project: "User System",
    assignedTo: 3,
    priority: "high",
    targetDate: "2026-05-10",
    actualDate: "",
    resolution: ""
  },
  {
    summary: "Broken navigation links",
    description: "Some navbar links redirect to 404 pages.",
    reportedBy: "Sarah Lee",
    dateReported: "2026-04-02",
    project: "Website",
    assignedTo: 2,
    priority: "medium",
    targetDate: "2026-04-08",
    actualDate: "2026-04-07",
    resolution: "Corrected routing paths"
  },
  {
    summary: "Search function not returning results",
    description: "Search bar returns empty results even for valid queries.",
    reportedBy: "David Kim",
    dateReported: "2026-03-20",
    project: "API",
    assignedTo: 1,
    priority: "high",
    targetDate: "2026-03-30",
    actualDate: "",
    resolution: ""
  },
  {
    summary: "Footer not responsive on mobile",
    description: "Footer layout breaks on small screens.",
    reportedBy: "Emily Stone",
    dateReported: "2026-04-18",
    project: "Frontend",
    assignedTo: 3,
    priority: "low",
    targetDate: "2026-05-05",
    actualDate: "",
    resolution: ""
  },
  {
    summary: "Email notifications delayed",
    description: "System emails are sent with delay of several minutes.",
    reportedBy: "Chris Adams",
    dateReported: "2026-04-01",
    project: "Notification Service",
    assignedTo: 2,
    priority: "medium",
    targetDate: "2026-04-12",
    actualDate: "2026-04-11",
    resolution: "Optimized email queue processing"
  },
  {
    summary: "User roles not updating",
    description: "Changing user roles does not reflect in system.",
    reportedBy: "Anna Brown",
    dateReported: "2026-03-25",
    project: "Admin Panel",
    assignedTo: 1,
    priority: "high",
    targetDate: "2026-04-03",
    actualDate: "",
    resolution: ""
  },
  {
    summary: "Incorrect total in cart",
    description: "Shopping cart calculates wrong totals.",
    reportedBy: "Tom Wilson",
    dateReported: "2026-04-20",
    project: "E-commerce",
    assignedTo: 3,
    priority: "high",
    targetDate: "2026-05-01",
    actualDate: "",
    resolution: ""
  },
  {
    summary: "Password reset email not sent",
    description: "Users do not receive password reset emails.",
    reportedBy: "Lisa Green",
    dateReported: "2026-04-06",
    project: "Authentication",
    assignedTo: 2,
    priority: "high",
    targetDate: "2026-04-09",
    actualDate: "2026-04-08",
    resolution: "Fixed SMTP configuration"
  }
];


// ===============================
// ISSUES STORAGE
// ===============================

function getIssues() {
    return JSON.parse(localStorage.getItem("issues")) || [];
}

function saveIssues(issues) {
    localStorage.setItem("issues", JSON.stringify(issues));
}


// ===============================
// CREATE ISSUE
// ===============================

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


// ===============================
// UPDATE ISSUE
// ===============================

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


// ===============================
// GET SINGLE ISSUE
// ===============================
if (!localStorage.getItem("issues")) {
    localStorage.setItem("issues", JSON.stringify(sampleIssues));
}

function getIssueById(id) {
    let issues = getIssues();
    return issues.find(issue => issue.id === id);
}


// ===============================
// STATUS LOGIC
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


// ===============================
// FORM HANDLING
// ===============================

document.getElementById("issueForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let issueData = {
        summary: document.getElementById("summary").value,
        description: document.getElementById("description").value,
        reportedBy: document.getElementById("reportedBy").value,
        dateReported: document.getElementById("dateReported").value,
        project: document.getElementById("project").value,
        assignedTo: document.getElementById("assignedTo").value,
        priority: document.getElementById("priority").value,
        targetDate: document.getElementById("targetDate").value,
        actualDate: document.getElementById("actualDate").value,
        resolution: document.getElementById("resolution").value
    };

    createIssue(issueData);
    alert("Issue created!");
});


// ===============================
// TEST ISSUE (kept but safe)
// ===============================

