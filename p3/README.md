# Basic Ticket Logger
[Application Demo]()

# Purpose
The purpose of this project is to delve into and explore App-Level state with Redux.

The application leverages json-web-server as the backend for a quickly scalable front-end. Front-end fetches
a list of logs from the "database". User can add, edit, & delete logs, as well as, add and delete technicians
from the "database" as well.

Materialize CSS styling has been used.

# Features

Branch p3-init
-------------------
1. Backend - [json-server](https://www.npmjs.com/package/json-server)
2. Frontend React managed with useState() hook.
3. Models: Logs, Technicians
4. Hooks: useState, useEffect, useRef

Branch p3wRedux
-------------------
1. Application refactored to leverage the Redux library for App-State management.