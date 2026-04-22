//here we created the projects(basically the apps and the websites) that will be assigned to the issues
let projects = 
[
  { id: 1, name: "Campus Laundry Booking System" },
  { id: 2, name: "Gym Membership Management App" },
  { id: 3, name: "Food Truck Ordering Platform" }
]
//this is creating projects using a function 
function createProject(name) 
{
    let newProject = {
        id: projects.length + 1,
        name
    };

    projects.push(newProject);
    saveData();
}