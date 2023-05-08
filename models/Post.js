const { Model, DataTypes, NOW } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        time_created: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        user_id : {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id'
            }
        }
    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    }
);

module.exports = Post;