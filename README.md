# Todo List React App

## Overview
This is a simple todo list app built using React. It allows users to add, remove, and mark tasks as completed.

## Setup
1. Make sure you have Node.js installed on your machine.
2. Clone this repository.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install dependencies.
5. Run `npm start` to start the development server.

## Features
- Add new tasks.
- Mark tasks as completed.
- Delete tasks.
- Filter tasks by completed status.

## Folder Structure
.
├── public
│ ├── index.html
│ └── ...
└── src
├── components
│ ├── TodoForm.js
│ ├── TodoList.js
│ └── TodoItem.js
├── App.js
├── index.js
└── ...


## Components
1. **App**: Main component containing the state and logic for managing tasks.
2. **TodoForm**: Component for adding new tasks.
3. **TodoList**: Component for displaying the list of tasks.
4. **TodoItem**: Component representing an individual task.

## State
- `tasks`: An array containing task objects with properties like `id`, `text`, and `completed`.

## Usage
- Enter task text in the input field and press enter or click "Add" to add a new task.
- Click on a task to mark it as completed.
- Click on the delete icon to remove a task.
- Use the filter options to filter tasks by completed status.

## Technologies Used
- React
- HTML
- CSS
- Vercel

## Contributors
- [Utkarsh Sharma](https://github.com/Utkarshalways)

