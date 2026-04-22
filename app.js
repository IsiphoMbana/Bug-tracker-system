let issues = JSON.parse(localStorage.getItem("issues")) || [];
  

function getStatusBadge(status) {
  if (status === "open") return "badge-warning";
  if (status === "resolved") return "badge-success";
  if (status === "in-progress") return "badge-info";
  if (status === "overdue") return "badge-danger";
  return "badge-secondary";
}

function getPriorityClass(priority) {
  if (priority === "low") return "priority-low";
  if (priority === "medium") return "priority-medium";
  if (priority === "high") return "priority-high";
  if (priority === "critical") return "priority-critical";
  return "";
}

function createIssueCard(issue) {
  let card = `
    <div class="box">
      <div class="issueBox">
        <h5 class="issueTitle">${issue.summary}</h5>
        <p class="issueStatus">
          Status: <span class="${getStatusBadge(issue.status)}">${issue.status.toUpperCase()}</span>
        </p>
        <p class="issuePriority">
          Priority: <span class="${getPriorityClass(issue.priority)}">${issue.priority.toUpperCase()}</span>
        </p>
        <button class="btn btn-primary viewBtn" onclick="viewIssue(${issue.id})">
          View Details →
        </button>
      </div>
    </div>
  `;
  return card;
}

function displayIssuesByStatus() {
  // Filter issues by status
  let openIssues = [];
  let inProgressIssues = [];
  let resolvedIssues = [];
  let overdueIssues = [];

  for (let i = 0; i < issues.length; i++) {
    let issue = issues[i];
    if (issue.status === "open") {
      openIssues.push(issue);
    } else if (issue.status === "in-progress") {
      inProgressIssues.push(issue);
    } else if (issue.status === "resolved") {
      resolvedIssues.push(issue);
    } else if (issue.status === "overdue") {
      overdueIssues.push(issue);
    }
  }

  // Display Open Issues
  let openContainer = document.getElementById("openIssues");
  if (openContainer) {
    let allCards = "";
    for (let i = 0; i < openIssues.length; i++) {
      allCards += createIssueCard(openIssues[i]);
    }
    if (allCards === "") {
      openContainer.innerHTML = "<p class='noIssues'>No open issues</p>";
    } else {
      openContainer.innerHTML = allCards;
    }
  }

  // Display In-Progress Issues
  let inProgressContainer = document.getElementById("inProgressIssues");
  if (inProgressContainer) {
    let allCards = "";
    for (let i = 0; i < inProgressIssues.length; i++) {
      allCards += createIssueCard(inProgressIssues[i]);
    }
    if (allCards === "") {
      inProgressContainer.innerHTML = "<p class='noIssues'>No in-progress issues</p>";
    } else {
      inProgressContainer.innerHTML = allCards;
    }
  }

  // Display Resolved Issues
  let resolvedContainer = document.getElementById("resolvedIssues");
  if (resolvedContainer) {
    let allCards = "";
    for (let i = 0; i < resolvedIssues.length; i++) {
      allCards += createIssueCard(resolvedIssues[i]);
    }
    if (allCards === "") {
      resolvedContainer.innerHTML = "<p class='noIssues'>No resolved issues</p>";
    } else {
      resolvedContainer.innerHTML = allCards;
    }
  }

  // Display Overdue Issues
  let overdueContainer = document.getElementById("overdueIssues");
  if (overdueContainer) {
    let allCards = "";
    for (let i = 0; i < overdueIssues.length; i++) {
      allCards += createIssueCard(overdueIssues[i]);
    }
    if (allCards === "") {
      overdueContainer.innerHTML = "<p class='noIssues'>No overdue issues</p>";
    } else {
      overdueContainer.innerHTML = allCards;
    }
  }
}

function viewIssue(id) {
  localStorage.setItem("selectedIssueId", id);
  window.location.href = "issue.html";
}

function showIssueDetails() {
  let id = localStorage.getItem("selectedIssueId");
  let issue = null;

  for (let i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issue = issues[i];
      break;
    }
  }

  let container = document.getElementById("IssueDetails");
  if (!container) return;

  if (issue) {
    container.innerHTML = `
      <div class="detailBox">
        <div class="detailHeader">
          <h4>Issue #${issue.id}</h4>
        </div>
        <div class="detailContent">
          <h5 class="detailTitle">${issue.summary}</h5>
          <hr class="divider" />
          <div class="detailRow">
            <p><strong>Status:</strong> <span class="${getStatusBadge(issue.status)}">${issue.status.toUpperCase()}</span></p>
            <p><strong>Priority:</strong> <span class="${getPriorityClass(issue.priority)}">${issue.priority.toUpperCase()}</span></p>
          </div>
          <div class="detailDesc">
            <h6>Description</h6>
            <p class="text-muted">Detailed issue description would appear here...</p>
          </div>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="alert alert-warning">
        Issue not found. Please go back and select a valid issue.
      </div>
    `;
  }
}

// Initialize dashboard on page load
displayIssuesByStatus();
