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
///////////////////////////////////////////////////////////////////////////////

server.get("/", async (_, response) => {
  const responseG = await sql`SELECT version()`;
  const { version } = responseG[0];
  response.json({ version });
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
