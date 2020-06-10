module.exports = (sequelize, DataTypes) => {
    const UserMediaList = sequelize.define(
        "user_media_list", {

        }, {
            underscored: true,
            freezeTableName: true
        }
    );

    UserMediaList.associate = (models) => {
        UserMediaList.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
        UserMediaList.belongsTo(models.list, {
            foreignKey: {
                allowNull: false
            }
        });
        UserMediaList.belongsTo(models.media, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return UserMediaList;
};