const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const posts = await Post.bulkCreate(postData);

    for(const comments of commentData) {
        await Comment.create({
            ...comments,
            post_id: posts[Math.floor(Math.random() * posts.length)].id,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    };

    process.exit(0);
};

seedAll();