# Elite Fit Task Manager
## Live Demo: Elite Fit Task Manager

### Overview
Elite Fit Task Manager is a simple task management tool designed to help users organize and track their tasks effectively. Users can add, view, edit, delete, and categorize tasks based on their priority, due date, and status. The project also provides visual counts for the total, completed, upcoming, and missed tasks.

### Features
Task Management:Create, edit, and delete tasks with details like title, description, priority, due date, and status.
Task Filtering and Sorting: Filter tasks by priority, status (completed, upcoming, missed), and sort by date or priority.
Real-Time Count Display: Shows real-time counts for upcoming, missed, completed, and total tasks.
Persistent Storage: Uses localStorage to retain tasks between sessions.


## Setup Instructions
To set up the project locally, follow these steps:

### Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/elite-fit-task-manager.git
cd elite-fit-task-manager
### Install dependencies:

bash
Copy code
npm install
### Run the project:

bash
Copy code
npm start
### Build the project (optional, for deployment):

bash
Copy code
npm run build
Open the project: Go to http://localhost:3000 in your browser to view the app.

## Assumptions Made During Development
Task Structure: Each task has a unique ID, title, description, due date, priority (High, Medium, Low), and status (Completed, Pending).
Due Date: Users can only select a due date equal to or later than the current date.
Task Completion: Only tasks marked as "completed" count towards the completed tasks, and tasks with dates in the past are considered "missed."
Local Storage: Data persists between sessions by saving to localStorage, assuming a single user using the app on the same browser.
Visual Count: Task counts are recalculated on any change to tasks (adding, deleting, editing, etc.).

## Technologies Used
ReactJS: Core library for building the user interface.
Redux: For centralized state management across components.
JavaScript ES6: Syntax and functionalities to keep the code efficient and readable.
CSS: For styling the components and achieving a responsive, user-friendly layout.
## Future Improvements
Additional Task: Implement task due date notifications via email using SMTP.
User Authentication: Allow multiple users with separate task lists.
Backend Integration: Store tasks on a backend server for data persistence across different devices.
