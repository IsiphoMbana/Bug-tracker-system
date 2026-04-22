# Issue Tracker Test

## Overview
This is a simple issue tracking system.  
It lets us create, assign, update, and view issues linked to projects and the developers.  
All data is stored in the browser using **localStorage**, so it stays even after refresh.

---

## Features
- Manage **People** (developers) with basic details.
- Manage **Projects** (apps/websites).
- Create and assign **Issues** with summary, description, priority, and dates.
- Status updates: issues can be **open**, **overdue**, or **resolved**.
- Pre‑loaded sample issues for testing.
- Issues displayed in a table for quick viewing.

---

## Tech Stack
- **HTML** → forms and table layout  
- **CSS** → styling and layout  
- **JavaScript** → logic for people, projects, and issues  
- **localStorage** → saves data in the browser  
- **Markdown** → documentation  

---

## How to Run
1. Download or clone the project.  
2. Open `index.html` in a browser.  
3. Use the form to add issues.  
4. Click **Show Issues** to see them in the table.  
5. Data is saved automatically in localStorage.

---

## Example Workflow
- Add a new issue: *Login page not responding* → Assign to developer ID `1` → Project: *Website* → Priority: High.  
- Update issue: mark as resolved and add resolution notes.  
- Refresh the page: issue data is still there.  

---

## Testing Checklist
- [ ] Add a person → confirm saved.  
- [ ] Add a project → confirm saved.  
- [ ] Create an issue → confirm in table + localStorage.  
- [ ] Assign issue → check developer ID stored.  
- [ ] Update issue → status changes correctly.  
- [ ] Refresh → data persists.  

---

## Future Improvements
- Edit and delete issues directly from the table.  
- Add search/filter by project, priority, or status.  
- Export issues to CSV/Excel.  

---

## Project Members
- Amonique van Zyl 604294
- Shihluke Mkhabele 604987
- Nasisipho Mbana 602139
- Tawanda Blessing Mudzamba 603984

---
