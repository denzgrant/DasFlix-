module.exports = (sequelize, DataTypes) => {
    const Media = sequelize.define(
        "media", {
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
            }
        }, {
            underscored: true,
            freezeTableName: true
        }
    );

    Media.associate = models => {
        Media.hasMany(models.user_media_list, {
            onDelete: "cascade"
        });
    };

    return Media;
};