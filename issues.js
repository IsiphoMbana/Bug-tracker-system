// ===============================
// 1. STORAGE FUNCTIONS
// ===============================

function getIssues() {
    return JSON.parse(localStorage.getItem("issues")) || [];
}

function saveIssues(issues) {
    localStorage.setItem("issues", JSON.stringify(issues));
}


// ===============================
// 2. CREATE ISSUE
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
// 3. UPDATE ISSUE
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
// 4. GET SINGLE ISSUE
// ===============================

function getIssueById(id) {
    let issues = getIssues();
    return issues.find(issue => issue.id === id);
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


// ===============================
// 6. FORM HANDLING (CREATE)
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
