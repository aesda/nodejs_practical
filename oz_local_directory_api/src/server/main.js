import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";
import * as jobRouter from './routes/job.js';


const app = express();

app.use(bodyParser.json());

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});


app.post("/register", (req, res) => {
  const data = req.body;
  console.log(data);
  res.json({"status":"OK", message: `Sussesfully sent to email: ${data.email}` })


});

app.post("/send-code", (req, res) => {
  const body = req.body;
  const email = body.email;
  const code= "12345";
  console.log({email, code });
  res.status(200).json({status:"OK", message: `Code sent to email: ${email}` });



});

app.post("/login", (req, res) => {
  try {
    const body = req.body;
    res.status(200).json({status:"OK", message: `Login successful for email: ${body.email}` });
  }
  catch(error) {
    res.status(500).json({status:"error", message: `something went wrong` });
  }

});
app.post("/forgotPassword", (req, res) => {
  try {
    const body = req.body;
    res.status(200).json({status:"OK", message: `Set new password for email: ${body.email}` });
  }
  catch(error) {
    res.status(500).json({status:"error", message: `something went wrong`, error: error.message });
  }

});

app.post("/changePassword", (req, res) => {
  try {
    const body = req.body;
    res.status(200).json({status:"OK", message: `new password sent to email: ${body.email}` });
  }
  catch(error) {
    res.status(500).json({status:"error", message: `something went wrong`, error: error.message });
  }

});

app.use("/jobs", jobRouter)


ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
