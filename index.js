/** @format */

const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result of the calculation is " + result);
})

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var result = weight / (height * height);
  res.send("Your BMI is " + result);
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

app.post("/form", (req, res) => {
  var name = req.body.name;
  var email = req.body.email;

  res.send(`Your name is ${name}, Your email address is ${email}`);
})

app.listen(3000, () => {
  console.log(`App is running on port 3000`);
});
