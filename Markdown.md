# Bug Tracking System

## Overview
This is a simple bug tracking system built for coursework.  
It lets us create, assign, update, and view issues linked to projects and people.  
All data is stored in the browser using **localStorage**, so it stays even after refresh.

---

## Features
- Manage **People** (developers) with name, surname, email, and username.
- Manage **Projects** (apps/websites).
- Create and assign **Issues** with summary, description, priority, and dates.
- Status updates: issues can be **open**, **overdue**, or **resolved**.
- Pre‑loaded sample issues for testing (10+ varied issues).
- Issues displayed in a **Kanban board** (Backlog, Ready, In Progress, Done).
- View single issue details.
- Edit existing issues and update their status.

---

## Tech Stack
- **HTML** → pages and forms  
- **CSS / Bootstrap** → styling and layout  
- **JavaScript** → logic for people, projects, and issues  
- **localStorage** → saves data in the browser  
- **Markdown** → documentation  

---

## Pages
- `index.html` → Dashboard with board layout (Backlog, Ready, In Progress, Done).  
- `createticket.html` → Form to create new issues.  
- `people.html` → Manage people (add and list).  
- `projects.html` → Manage projects (add and list).  
- `issue.html` → View single issue details.  
- `editissue.html` → Edit existing issue.  

All pages are linked with a **navbar** for easy navigation.

---

## How to Run
1. Download or clone the project.  
2. Open `index.html` in a browser.  
3. Use the navbar to move between pages.  
4. Create issues, people, and projects using the forms.  
5. Click on an issue card in the dashboard to view details or edit.  
6. Data is saved automatically in localStorage.

---

## Example Workflow
- Add a new issue: *Login page not responding* → Assign to developer ID `1` → Project: *Website* → Priority: High.  
- Update issue: mark as resolved and add resolution notes.  
- Refresh the page: issue data is still there.  

---

## Testing Checklist
- [ ] Add a person → confirm saved.  
- [ ] Add a project → confirm saved.  
- [ ] Create an issue → confirm in board + localStorage.  
- [ ] Assign issue → check developer ID stored.  
- [ ] Update issue → status changes correctly.  
- [ ] Refresh → data persists.  

---

## Future Improvements
- Delete issues directly from the board.  
- Add search/filter by project, priority, or status.  
- Export issues to CSV/Excel.  
- Add profile pictures for people.  

---

## Project Members
- Amonique van Zyl 604294  
- Shihluke Mkhabele 604987  
- Nasisipho Mbana 602139  
- Tawanda Blessing Mudzamba 603984  
