# Todo-App

Todo-App is a lightweight, frontend-only Todo application built with React and Vite. It uses the browser's **localStorage** to persist tasks across sessions, and offers basic functionalities such as adding, deleting, and editing tasks, along with a progress gauge to visualize task completion.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

---

## Tech Stack

- **React:** For building the user interface.

- **Vite:** A fast development and build tool.

- **Tailwind CSS:** For utility-first styling.

- **ECharts:** For creating the progress gauge.

- **LocalStorage:** To store task data in the browser.

- **ESLint:** For maintaining code quality and consistency.

---

## Features

- **Task Management:**

  - Add new tasks (with validation to prevent empty entries).
  - Edit existing tasks inline.
  - Delete tasks.
  - Toggle the completion status of tasks.

- **LocalStorage Persistence:**

  - Tasks are stored in the browser's localStorage, ensuring that your data persists even after a page refresh.

- **Progress Visualization:**
  - A dynamic progress gauge powered by ECharts displays the percentage of completed tasks.

---

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/kilicalparslan/todo-app.git
   cd todo-app
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Development Server:**

   ```bash
   npm run dev
   ```

   The app will be available at http://localhost:3000 or on the port specified by Vite.

[Imgur](https://imgur.com/cP0Fi4S)

---

## Usage

- **Adding a Task:**

  - Enter a task description in the input field and click the Add button. The app validates the input to ensure that empty tasks are not added.

- **Editing a Task:**

  - Click on the edit icon to enable inline editing of the task. Confirm the changes to update the task.

- **Toggling Task Completion:**

  - Click on the checkbox-like button to change the completion status of a task. Completed tasks are displayed with a strikethrough.

- **Deleting a Task:**
  - Remove a task by clicking on the trash icon.
