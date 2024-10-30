import express, { request, response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { neon } from "@neondatabase/serverless";

dotenv.config();

const PORT = process.env.PORT || 8811;
const server = express();

server.use(cors());
server.use(bodyParser.json());

const sql = neon(`${process.env.BACKEND_URL}`);

///////////////////////////////////////////////////////////////////////////////

server.get("/", async (_, response) => {
  const responseG = await sql`SELECT version()`;
  const { version } = responseG[0];
  response.json({ version });
});

///////////////////////////////////////////////////////////////////////////////

server.post("/signup", async (request, response) => {
  const { name, email, password } = request.body;

  try {
    const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;

    if (existingUser.length > 0) {
      return response.status(400).json({ message: "User already exists" });
    }

    const newUser = await sql`
        INSERT INTO users (email, name, password) 
        VALUES (${email}, ${name}, ${password})
        RETURNING id, email
      `;

    response
      .status(201)
      .json({ message: "User created successfully", user: newUser[0] });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Internal server error during create user" });
  }
});

///////////////////////////////////////////////////////////////////////////////

server.post("/login", async (request, response) => {
  const { email, password } = request.body;

  try {
    const user = await sql`SELECT * FROM users WHERE email = ${email}`;
    if (user.length === 0) {
      return response
        .status(400)
        .json({ message: "email or password not match" });
    }

    if (user[0].password !== password) {
      return response.status(400).json({ message: "password not match" });
    }

    response.status(200).json({ message: "Login successful", user: user[0] });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Internal server error during login user" });
  }
});

///////////////////////////////////////////////////////////////////////////////

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
