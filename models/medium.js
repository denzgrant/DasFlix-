const list_medium = require("./list_medium");
const { QueryTypes } = require('sequelize');

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
    Medium.recommendations = async () => {
        return await sequelize.query(
            `select title, count(*) as 'occurrence' from medium
        group by title
        order by 2 desc
        limit 10;  `, { type: QueryTypes.SELECT });
    };


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