module.exports = (sequelize, DataTypes) => {
    const Provider = sequelize.define(
        "provider", {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            icon: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            underscored: true,
            freezeTableName: true
        }
    );

    Provider.associate = models => {
        Provider.hasMany(models.media_provider, {
            onDelete: "cascade"
        });
    };

    return Provider;
};