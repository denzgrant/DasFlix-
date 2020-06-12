module.exports = (sequelize, DataTypes) => {
    const UserMedium = sequelize.define(
        "user_medium", {

        }, {
            underscored: true,
            freezeTableName: true
        }
    );


    UserMedium.associate = (models) => {
        UserMedium.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
        UserMedium.belongsTo(models.medium, {
            foreignKey: {
                allowNull: false
            }
        });
    };



    return UserMedium;
};