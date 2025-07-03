# Todos App - Frontend UI

## Demo & Snippets

- Include hosted link
- Include images of app if CLI or Client App

---

## Requirements / Purpose

### MVP:

Goal: Create an application in React that allows you to track, add, and delete tasks as well as manage categories of tasks

- [x] Must be able to duplicate tasks
- [x] Must be able to add categories
- [x] Must be able to add new tasks tagged with a task category
- [ ] Must be able to delete tasks
- [ ] Must be able to update tasks automatically by changing the task name and the category
- [x] You must add your own styling (In Progress)

- [ ] (opt.) Create a summary section that lists how many of each type of task there are
- [ ] (opt.) Come up with a feature that allows us to delete and update task categories

![Feature requirements](ui-design/wireframes/todo_UI_req.png)

### Purpose of project:

- To practice integrating a custom built backend API into a client-facing React front-end -> building an intergrated fullstack web application from start to finish.

- Demonstrate original business logic and thoughtful design UI features upon a basic application.

### Techstack (and why):

1. React JS (Vite) - For dynamic, conditional rendering and live updates with database. Data operation heavy - reduced loading times are critical for a good user experience.

2. Typescript - For data validation of any fetched and posted data with backend API

3. SASS/SCSS - For advanced CSS capabilities and readability.

---

## Build Steps

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- The backend Spring Boot API running (see backend README for setup)

### 1. Clone the Repository

```sh
git clone https://github.com/carriegale2710/todos-app.git
cd todos-app/front-end
```

### 2. Install Dependencies

```sh
npm install
# or
yarn install
```

### 3. Configure API Endpoint (if needed)

- By default, the frontend expects the backend API at `http://localhost:8080`.
- If your backend runs on a different port or host, update the API URLs in your frontend code (usually in a `services` or `config` file).

### 4. Run the Frontend App

```sh
npm start
# or
yarn start
```

- The app will open at [http://localhost:3000](http://localhost:3000) by default.

### 5. Using the App

- Make sure your backend API is running and accessible.
- You can now add, edit, delete, and filter tasks and categories through the UI.
- Use [Postman](https://www.postman.com/) or your browser’s dev tools to inspect API requests and responses.

---

**Troubleshooting:**

- If you see errors about failing to fetch data, ensure the backend API is running and CORS is configured if accessing from a different host/port.
- For port conflicts, change the frontend port in `package.json` or with the `PORT` environment variable.

---

---

## Design Goals / Approach

- Design goals
- why did you implement this the way you did?

### UX/UI Design Process

For more details on UX/UI design process, please refer to design this [document](ui-design). You can also view the lofi interactive Figma prototype [here.](https://www.figma.com/proto/4txnsEYq1FF7TvHc0vqp8O/Todos-App?page-id=18%3A122&node-id=54-6624&p=f&viewport=-8623%2C-2162%2C1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=54%3A2287)

28/06/25 - Home Page (App.tsx)
![HomePage wireframe](ui-design/wireframes/HomePage.png)

---

## Features

## React Components

### Categories

- [x] `CategoryForm`: Add category (input + button)
- [x] `CategoryList`: Show all categories
      _(Bonus: edit/delete options)_

### Tasks

- [x] `TaskForm`: Add task (name + category dropdown)
- [x] `TaskList`: Displays tasks (supports filtering)
- [] `Task`:
  - [ ] Complete checkbox
  - [ ] Buttons:
        [ ] **Duplicate**,
        [ ] **Delete**
  - [ ] Editable name & category

### Bonus

- [x] `CategoryFilter`: Dropdown to filter by category - to refactor: separate logic out
- [ ] `SummaryBar`: Shows “Work: 3, Study: 2” etc.

## User Flows + Side Effects 🧭

### TASKS

```
1. View list of tasks:

-> Navigate to TasksPage ->  TaskList
-> taskData is fetched on first mount + if changes occur
-> list of TaskCards with taskData displayed

```

```
2. Add a new task:

-> Click 'add task' button in Tasks/Home Page
-> Opens Modal with a TaskForm
  -> enter task name
  -> pick category (or add new one)
  -> submit
-> taskData sent to DB
-> DB re-fetched + synced to Tasklist context
```

```
3. Edit a task:

Enter new name/category change -> submit
```

```
4. Delete/Archive a task:

-> click delete/archive button
-> (opt): user warning
  -> click yes
→ set isArchived = true
```

```
5. Duplicate a task:

-> click on 'Duplicate' button on the task's TaskCard
-> implement `2. Add a new task` but with copied data

```

### CATEGORIES

```
1. View list of all categories:

-> Navigate to TasksPage ->  CategoryList
-> categoryData is fetched on first mount + if changes occur
-> list of CategoryTags with categoryData displayed

  1.a. bonus: (Adv) filter by category:
  -> click on the "CategoryTag" button
  -> taskList updates to show only those with that category
  -> click again

  1.b bonus: task counts per category:
  -> automatically updates number when changes occur
```

```
2. Add new category:

-> click on "New Category button"
-> Enter category name
-> click submit
-> user comfirmation message
-> new category appears in CategoryList
```

---

## Known issues

- Remaining bugs, things that have been left unfixed:

  - [ ] Update button not functional yet + crashes app.
  - [ ] Delete button only functional in front-end filter, does not call backend yet.
  - [ ] Custom hooks verbose, make DRY but reusing one useFetch hook.
  -

- Features that are buggy / flimsy:

  - [x] Use a free API to show a random quote when you open the app: https://api-ninjas.com/api/quotes
    - Needs to consider errors fetching from external APIs can be dangerous
    - [ ] Move this to backend for better security
  - [x] Implement 'Advanced filter' feature which: (1) lets you filter by more than one category and (2) individual category filters can be toggled on/off.
    - Feedback: Works but overly complex for front-end.
    - [ ] Abstract to back-end.

---

## Future Goals

What are the immediate features you'd add given more time:

- Advanced Tasks viewing and filtering:

  - View list of all archived tasks with option to unarchive
  - Sort tasks by date view similar to google calendar
  - Set up reminders/conditional sorting of tasks in list based on due dates/custom labels

- Advanced task deletion:

  - Select multiple tasks at a time for soft deletion
  - Add user confirmation message before deletion
  - Allow undo buttons immediately after deletion operations to allow for user forgiveness

---

## Change logs

- Write a paragraph labelled with the date every day you work on the project
- Discuss what you've done for the day.
- Be specific about the changes that have happened for that day.

### 01/07/2025 - UI Design assets

- Wireframe diagram to show component nesting on TaskPage.
- Updated mockups of components in Figma.
- Defined userflows by creating interactive Figma prototype to simulate basic functionality.
- View assets in [ui-design](/ui-design) for more info.

### 01/07/2025 - Styling imports (style2)

- Cleaned up documentation in ui-design folder.
- Updated color palette and typography for mixins variables and global styling in `index.scss`
- Imported `normalize.css` for browser rendering consistency.
- Conducted research on design patterns for React.

### 02/07/2025 - Styling + Documentation Refactoring (style2)

- Merged changes from `style2` to main branch

Documentation:

- Used a template to better structure both back-end [README.md](../README.md) and front-end file (this one).
- Moved more UX/UI design related documentation to new [README.md](/ui-design/README.md).
- Trying better naming convention for commit messages eg. docs: message

Styling:

- Refactored scss module files for : Button, TaskCard, TaskList, CategoryList, Header, CategoryTag and Form Modals.
- Used mixins and partials to decouple style classes so for custom themes in future iterations (eg. game vs business theme)
- Removed duplicated code/clutter and remove unused styling classes.
- Fixed alignment and sizing issues with grids and flexboxes.

Features:

- QuotesCard: Deleted the quotes feature as planning to move to backend for security reasons.
- DataSummary: Created this to separate context logic from TaskPage ('making it dumber') _new_
- Button component: Fixed up hover bug for shadows. Refactored how callback functions are passed in.
- CategoryTag: Conditional rendering: Changes to 'Edit' on hover.
- TaskList: Created a `List vs Grid View` feature: Toggle Button changes display layout -> rows vs cards _new_

## What did you struggle with?

- What? Why? How?

1. Refactoring code to be DRY in an efficent way: exploring pros and cons of bottom-up approach (writing messy code then refactoring afterwards.)
2. Dealing with scope creep: needing to go back to basics and prioritise core features rather than over-complicating functionality.
3. Reducing complexity of features of front-end : feedback highlighted too much logic in front-end and need for it to be moved to backend.

---

## Licensing Details

- What type of license are you releasing this under?

---

## Further details, related projects, reimplementations

- Link to backend [Todos API](../README.md).
