# Github User Search
[Application Demo](https://gf111721.netlify.app/)

# Purpose
Quick Demo App to show the differences between vanilla react vs modern react that utilizes functional components and 
popular hooks such as useState, useEffect, useReducer, useContext. 

The application leverages the GitHub API to provide an interactivity such as searching GitHub's database to return
lists of users, repos, and specific user data.

Minimal styling has been used.

# Features

Branch basicReactP1
-------------------
1. JSX, Fragment Syntax, JSX Expressions & Conditionals
2. Components, Props, PropTypes, State Management (Passing, Updating, Clearing, etc.)
3. Class Components, Stateless Functional Components
4. HTTP Reqs, Environment Variables
5. Events & Search Functionality
6. React Router 5

Branch p1RefactorToHooks
------------------------
1. Application refactored to use hooks:
  * Class Component Conversions To Functional Components
    * Search using: useState Hook
    * User using: useEffect Hook
    * App using: useContext Hook
  * Contextualized States:
    * User, Repos, Alert
2. New Routes: Home & Not Found
3. Deployed to Netlify (See Application Demo Link @ Top of Page)
