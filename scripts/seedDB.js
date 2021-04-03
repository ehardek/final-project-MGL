const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/mygamelibrary"
  );

  const userSeed = [
    {
      email: "staikos@optonline.net",
      password: "r3dbull",
      gamelist: [ "47329", "28602", "38763", "18677", "19953"

      ]
    },
    {
      email: "psharpe@mac.com",
      password: "f@cts15",
      gamelist: [ "51823", "34282", "71135", "40627", "40266"

      ]
    },
    {
      email: "andale@yahoo.com",
      password: "b@ttlefi3ld",
      gamelist: [ "46759", "24329", "36574", "28255", "78391"

      ]
    },
    {
      email: "magusnet@icloud.com",
      password: "b1@ckcat",
      gamelist: [ "71198", "36308", "96349", "90627", "13127"

      ]
    },
    {
      email: "hillct@verizon.net",
      password: "8gfs567",
      gamelist: [ "83326", "68939", "29527", "78326", "36827"

      ]
    },
    {
      email: "dunstan@att.net",
      password: "b@ttl3cAts",
      gamelist: [ "13188", "56255", "69639", "39648", "90407"

      ]
    },
    {
      email: "tmccarth@sbcglobal.net",
      password: "gr33nhorn3t",
      gamelist: [ "56543", "33493", "97331", "19717", "56405"

      ]
    },
    {
      email: "smallpaul@aol.com",
      password: "s@ltydog32",
      gamelist: [ "82406", "33823", "36771", "44099", "99565"

      ]
    }
  ]