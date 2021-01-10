// index.js
    const cron = require("node-cron");
    const express = require("express");
    const fs = require("fs");

    app = express();

    // schedule tasks to be run on the server
    cron.schedule("* * * * *", function() {
      console.log("---------------------");
      console.log("Running Cron Job");

    });

    app.listen("3128");