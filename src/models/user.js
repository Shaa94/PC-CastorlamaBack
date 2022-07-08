const furniture = require('./furniture');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false // permet d'indiquer si une proporité est facultative ou non.
        },

        firstname: {
            type: DataTypes.STRING,
            allowNull: false // permet d'indiquer si une proporité est facultative ou non.
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false // permet d'indiquer si une proporité est facultative ou non.
        },
        preference: {
            type: DataTypes.TEXT,
            allowNull: false,
            get() {
                return this.getDataValue('preference').split(',')
            },
            set(preference) {
                this.setDataValue('preference', preference.join())
            }
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },

    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
};

Users.hasMany(furniture, {foreignKey: 'id'});
furniture.belongsTo(Users, {foreignKey: 'id'});



