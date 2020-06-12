module.exports = (sequelize, DataTypes) => {
    const List = sequelize.define(
        "list", {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            underscored: true,
            freezeTableName: true
        }
    );

    List.associate = models => {

        List.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });

    };

    return List;
};