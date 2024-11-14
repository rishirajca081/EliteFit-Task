# Elite Fit Task Manager
## Live Demo: (https://elite-fit-task-weld.vercel.app/)

### Overview
Elite Fit Task Manager is a simple task management tool designed to help users organize and track their tasks effectively. Users can add, view, edit, delete, and categorize tasks based on their priority, due date, and status. The project also provides visual counts for the total, completed, upcoming, and missed tasks.

### Features
- Task Management:Create, edit, and delete tasks with details like title, description, priority, due date, and status.<br/>
- Task Filtering and Sorting: Filter tasks by priority, status (completed, upcoming, missed), and sort by date or priority.<br/>
- Real-Time Count Display: Shows real-time counts for upcoming, missed, completed, and total tasks.<br/>
- Persistent Storage: Uses localStorage to retain tasks between sessions.<br/>


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
Task Structure: Each task has a unique ID, title, description, due date, priority (High, Medium, Low), and status (Completed, Pending).<br/>
Due Date: Users can only select a due date equal to or later than the current date.<br/>
Task Completion: Only tasks marked as "completed" count towards the completed tasks, and tasks with dates in the past are considered "missed."<br/>
Local Storage: Data persists between sessions by saving to localStorage, assuming a single user using the app on the same browser.<br/>
Visual Count: Task counts are recalculated on any change to tasks (adding, deleting, editing, etc.).<br/>

## Technologies Used
ReactJS: Core library for building the user interface.<br/>
Redux: For centralized state management across components.<br/>
JavaScript ES6: Syntax and functionalities to keep the code efficient and readable.<br/>
CSS: For styling the components and achieving a responsive, user-friendly layout.<br/>
## Future Improvements
Additional Task: Implement task due date notifications via email using SMTP.<br/>
User Authentication: Allow multiple users with separate task lists.<br/>
Backend Integration: Store tasks on a backend server for data persistence across different devices.<br/>
