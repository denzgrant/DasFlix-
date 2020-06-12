const list_medium = require("./list_medium");

module.exports = (sequelize, DataTypes) => {
    const Medium = sequelize.define(
        "medium", {
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            media_type: {
                type: DataTypes.STRING,
                allowNull: false
            },
            external_id: {
                type: DataTypes.STRING,
                allowNull: false
            },
            summary: {
                type: DataTypes.STRING,
                allowNull: false
            },
            icon: {
                type: DataTypes.STRING,
                allowNull: false
            },

        }, {
            underscored: true,
            freezeTableName: true
        }
    );

    Medium.associate = models => {
        Medium.belongsToMany(models.list, {
            through: "list_medium",
            foreignKey: 'mediumId',
            as: 'lists'
        });

        Medium.belongsTo(models.provider, {
            foreignKey: {
                allowNull: false
            }
        });

    };

    return Medium;
};