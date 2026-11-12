import { createApp } from "./app.js";

const app = createApp();
const port = 3000;

app.listen(port, (err?: Error) => {
  if (err) {
    console.error("Server error:", err);
    process.exit(1);
    return;
  }
  console.log(`Listening on port ${port}...`);
});