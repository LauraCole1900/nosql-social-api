const mongoose = require("mongoose");
const { Thought, User } = require("../models");

const thoughtSeeds = require("./thoughtSeeds.json");
const userSeeds = require("./userSeeds.json");

const seedDatabase = async () => {
  await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/social-media_db");

  await User.deleteMany({});
  await Thought.deleteMany({});
  
  const users = await User.create(userSeeds);
  
  const user = users[Math.floor(Math.random() * users.length)]

  for (thought of thoughtSeeds) {
    const newThought = await Thought.create({
      ...thought,
      userId: user.id,
      userName: user.userName
    });
  }

  process.exit(0);
};

seedDatabase();