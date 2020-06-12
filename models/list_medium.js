module.exports = (sequelize, DataTypes) => {
    const ListMedium = sequelize.define(
        "list_medium", {

        }, {
            underscored: true,
            freezeTableName: true
        }
    );


    ListMedium.associate = (models) => {
        ListMedium.belongsTo(models.list, {
            foreignKey: {
                allowNull: false
            }
        });
        ListMedium.belongsTo(models.medium, {
            foreignKey: {
                allowNull: false
            }
        });
    };



    return ListMedium;
};