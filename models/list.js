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
        List.hasMany(models.user_media_list, {
            onDelete: "cascade"
        });
    };

    return List;
};