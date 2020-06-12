const bcrypt = require("bcrypt");
const user_medium = require("./user_medium");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "user", {
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        }, {
            underscored: true,
            freezeTableName: true
        }
    );

    User.generateHash = password => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    };

    User.validPassword = (inputPwd, dbPwd) => {
        return bcrypt.compareSync(inputPwd, dbPwd);
    };

    User.associate = models => {
        User.hasMany(models.history, {
            onDelete: "cascade"
        });
        User.hasMany(models.list, {
            onDelete: "cascade"
        });
        User.belongsToMany(models.medium, {
            through: 'user_medium',
            foreignKey: 'userId',
            as: 'media'
        });

    };


    return User;
};