import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
let lastName = ["Permann", "Ziner", "Kade", "Nutt"];
let firstName = ["Sue", "Dee", "Barry", "Hazel"];

app.get("/", async (req, res) => {
  try {
    let randomNumberLName = Math.floor(Math.random() * 4);
    let randomNumberFName = Math.floor(Math.random() * 4);
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/random"
    );
    const result = response.data.secret;
    res.render("index.ejs", {
      secret: result,
      user: lastName[randomNumberLName] + firstName[randomNumberFName],
    });
  } catch (error) {
    res.render("index.ejs", {
      error: error.message,
      errorStatus: true,
    });
  }
});
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
