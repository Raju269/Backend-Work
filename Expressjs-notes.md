# 🚀 Backend Learning Journey (Node.js + Express + MongoDB)

# 🌟 10. What is Express.js
Your request is incomplete. You wrote:

“Provide more information about”

but didn’t specify *what* you want more information about.

Please reply with a complete question, for example:
- “Provide more information about the dotenv ModuleNotFoundError”
- “Provide more information about my Python error: No module named 'dotenv'”
- or paste the exact error message or code snippet you’re dealing with.

Once you specify the topic or show the error/code, I can give a focused, step‑by‑step explanation or fix.


# 🛣️ 11. Routing in Express
This part is about **routing in Express**—how your backend handles different URLs and HTTP methods.

- **`app.get(path, handler)`**: Handle read-only requests. Example: return a homepage or list of products.  
  `GET /users` → get users.

- **`app.post(path, handler)`**: Handle creating data.  
  `POST /users` → create a new user.

- **`app.put(path, handler)`**: Handle full updates (replace an existing resource).  
  `PUT /users/1` → update all details of user 1.

- **`app.delete(path, handler)`**: Handle deleting data.  
  `DELETE /users/1` → delete user 1.

In code, they look like:

```js
app.get('/users', (req, res) => {...});
app.post('/users', (req, res) => {...});
app.put('/users/:id', (req, res) => {...});
app.delete('/users/:id', (req, res) => {...});
```

# 📥 12. Middleware 
**Middleware (in Express / Node.js)**  

- **What is middleware?**  
  A middleware is a function that runs *between* the incoming request and the final route handler/response. It can read/modify `req` and `res`, and decide whether to continue or stop the request.  

  Signature:  
  ```js
  (req, res, next) => { ... }
  ```

- **`next()` function**  
  `next()` tells Express: “I’m done, move to the next middleware/route.”  
  If you forget `next()`, the request will hang.

- **Types of middleware**  
  1. **Application middleware** – applied to the whole app:  
     ```js
     app.use(loggerMiddleware);
     ```  
  2. **Router middleware** – applied only to specific routes via `express.Router()`.  
  3. **Error middleware** – special middleware with 4 params:  
     ```js
     (err, req, res, next) => { ... }
     ```


# 📦 13. Request & Response
These belong to **Express.js request/response handling**:

- **`req.params`** – Route parameters from the URL path.  
  Example: route `/users/:id` and request `/users/10` → `req.params.id === "10"`.

- **`req.query`** – Query string values after `?`.  
  Example: `/search?q=node&page=2` → `req.query.q === "node"`, `req.query.page === "2"`.

- **`req.body`** – Data sent in the request body (usually in POST/PUT), like JSON or form data. Requires body‑parsing middleware (`express.json()`).

- **`res.send()`** – Sends a response (string, Buffer, or object) and ends the response.

- **`res.json()`** – Sends a JSON response; automatically sets `Content-Type: application/json`.

# 🧾 14. Body Parsing

**Body parsing** in Express means reading the data sent in the HTTP request body (for example, from a form or a JSON API) and converting it into a usable JavaScript object on `req.body`.

By default, Node doesn’t parse the body for you. `express.json()` is a **middleware** that:

- Looks at the incoming request  
- Checks if `Content-Type: application/json`  
- Automatically parses the JSON string into an object  
- Puts the result in `req.body`

Example:

```js
import express from "express";
const app = express();

app.use(express.json()); // enable JSON body parsing

app.post("/user", (req, res) => {
  // if client sends: { "name": "Raju" }
  console.log(req.body.name); // "Raju"
  res.send("User received");
});
```

# 🗂️ 15. Project Structure
This snippet shows a **common backend folder structure** used in Node.js/Express projects:

- **controllers/** – Functions that contain the main logic for each route (what to do when a request comes). They handle business logic, talk to models, and send responses.
- **routes/** – Defines URL paths and HTTP methods (GET, POST, etc.) and connects them to controller functions. Keeps routing separate from logic.
- **models/** – Defines how your data looks and behaves (e.g., Mongoose schemas for MongoDB). Talks directly to the database.
- **config/** – Configuration files like database connection, environment setup, and other reusable settings.

This structure helps keep your code clean, organized, and easier to scale.