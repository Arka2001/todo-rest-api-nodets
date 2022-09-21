<div align="center">
  <h1 align="center">TODO API</h1>

  <p align="center">
    A simple todo api for dummy projects
    <br />
    <!-- <a href="https://mwv-blogapi.herokuapp.com">Deployed Application</a>
    ·
    <a href="https://github.com/mindwebs/blog-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/mindwebs/blog-api/issues">Request Feature</a> -->
  </p>
</div>

## Schema

A TODO has the following fields:

1. **title**: string type
2. **content**: string type
3. **createdAt**: date type (automatically calculated in the backend)
4. **_id**: mongo object id

## Endpoints

1. POST `/api/todos`
Request body should have the fields: _title, content_

2. GET `/api/todos?limit=50&offset=0`
By passing limit and offset in the url, you can control how many todos to return. If no params are passed, 10 todos are returned by default.

3. GET `/api/todos/{id}`
Fetches a todo with the given object id. For example, a GET request on `api/todos/1` will return the todo with `_id = 1`

4. PUT `/api/todos/{id}`
Updates a todo with the given object id. For example, a PUT request on `api/todos/1` will update the todo with `_id = 1`

5. DELETE `/api/todos/{id}`
Deletes a todo with the given object id. For example, a DELETE request on `api/todos/1` will delete the todo with `_id = 1`

## Running the server locally

The first 3 steps below are to set the project up in your local environment, which is to be done just once at the beggining.

#### STEP 1

Cloning the repository

#### STEP 2

Creating a .env file with the same fields as mentioned in the `.env.example` file

#### STEP 3

Installing node packages using the command `npm i`

#### STEP 4

Running the backend server using the command `npm start`.
