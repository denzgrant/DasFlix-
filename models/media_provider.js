module.exports = (sequelize, DataTypes) => {
    const MediaProvider = sequelize.define(
        "media_provider", {

        }, {
            underscored: true,
            freezeTableName: true
        }
    );

    MediaProvider.associate = (models) => {
        MediaProvider.belongsTo(models.provider, {
            foreignKey: {
                allowNull: false
            }
        });
        MediaProvider.belongsTo(models.media, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return MediaProvider;
};