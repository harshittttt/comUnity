const db = require("../models");

// The below code is only for development stage
// To add some default items in our DB (Campaign collection) and check the api
const item1 = new db.Campaign({
  title: "Flood relief Fort Lauderdale",
  description:
    "Hi my name is Sara and I’m starting a fundraiser for my coworker Ashley and her boyfriend, Eddy who have lost their home and car to the recent “1,000 year flood” in Fort Lauderdale. I am reaching out to you to help raise money to provide relief to them and their dog, Champ. Wednesday night a tree fell through the ceiling to their bedroom and onto their bed. Luckily they weren’t home at the time. ",
  imageUrl:
    "https://images.gofundme.com/rC4s0LSWfvKrR9G2zgvR9HoRG2w=/720x405/https://d2g8igdw686xgo.cloudfront.net/72293847_1681484095663923_r.jpeg",
  required: 700,
  start: "2022-04-22T11:18:54.919Z",
});

const item2 = new db.Campaign({
  title: "Cryptid Genome Project",
  description:
    "We're raising research funding for genetic research. Samples include Bigfoot, Dogman, giants, and others. Object is to prove relatedness and origins of the species. This fundraiser is to complete the study. Massive amounts of data have already been obtained. Donors will be kept abreast of progress with a signed NDA. Thanks so much in advance.",
  imageUrl:
    "https://images.gofundme.com/yqOQ1Cf7jn0SOssQM3YZdUiYDTY=/720x405/https://d2g8igdw686xgo.cloudfront.net/71305499_1677186280343195_r.jpeg",
  required: 22822,
  start: "2022-04-20T11:18:54.919Z",
});

const item3 = new db.Campaign({
  title: "Help Ceidy and her family",
  description:
    "Ceidy Orozco Cordova and her family recently had their rights violated by the Temple City Sheriffs Office in LA County. The Sheriffs office had a warrant for the wrong house entering unlawfully and questioning a minor without a parent present. This led to Ceidy’s two children being unlawfully arrested in their own home.",
  imageUrl:
    "https://images.gofundme.com/TIWd89PdAbFEs8DmDBMna-jbXv0=/720x405/https://d2g8igdw686xgo.cloudfront.net/72307969_1681534839632700_r.jpeg",
  required: 5000,
  start: "2020-12-19T11:18:54.919Z",
});

const item4 = new db.Campaign({
  title: "Help me retire please",
  description:
    "I am a great-grandmother of almost 92, still checking groceries at WinCo. Although I love my customers and the people I work with, I would like to retire. I really need to retire as my eyesight is failing due to macular degeneration. To retire I need to pay off the fifth wheel I live in. If I can do this, I will have enough to pay for the rent of the space, groceries and medications that I need. Anything you can do to help would be much appreciated.",
  imageUrl:
    "https://images.gofundme.com/MNEBxURfYNFCZtuTPNGvZMeTU3I=/720x405/https://d2g8igdw686xgo.cloudfront.net/72067741_1680488442711642_r.jpeg",
  required: 50000,
  start: "2022-04-22T11:19:54.919Z",
});

const defaultItems = [item1, item2, item3, item4];

db.Campaign.find().exec(function (err, results) {
  var count = results.length;

  if (count == 0) {
    db.Campaign.insertMany(defaultItems, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log(
          "Successfully added default items to Campaign collection in DB"
        );
      }
    });
  }
});
// Till here ----------------------------------------------------------------------------------

function hideTransactionID(donors) {
  var i, j;
  text = "";

  for (i = 0; i < donors.length; i++) {
    var S = donors[i].transactionID;
    text = "";
    for (j = 0; j < S.length; j++) {
      if (j > 3 && j < S.length - 3) text = text + "X";
      else text = text + S[j];
    }

    donors[i].transactionID = text;
  }

  return;
}

const show = async (req, res) => {
  try {
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      let showCampaign = await db.Campaign.findById(req.params.id);

      if (showCampaign) {
        hideTransactionID(showCampaign.donors);

        res.status(200).json(showCampaign);
      } else {
        // console.log("Invalid Campaign Id.");
        res.status(404).json({
          message: "Page Not Found",
        });
      }
    } else {
      // console.log("Invalid Campaign Id.");
      res.status(404).json({
        message: "Page Not Found.",
      });
    }
  } catch (err) {
    console.log("Server error.");
    return res.status(500).json({
      message: "Something wrong when getting the campaign",
    });
  }
};

const showAll = async (req, res) => {
  //console.log("success");
  try {
    // Add this code in CreateCampaign Route during production
    // To sort campaign in descending order of dates
    await db.Campaign.find({})
      .sort({ start: -1 })
      .exec(function (err, allCampaign) {
        if (err) console.log(err);
        else {
          //console.log("Sorted");

          var len = allCampaign.length;

          var i;
          for (i = 0; i < len; i++) {
            let currCampaign = allCampaign[i];
            hideTransactionID(currCampaign.donors);
          }

          res.status(200).json(allCampaign);
        }
      });
  } catch (err) {
    console.log("Server error.");
    return res.status(500).json({
      message: "Something went wrong when trying to get all campaign",
    });
  }
};

module.exports = {
  show,
  showAll,
};
