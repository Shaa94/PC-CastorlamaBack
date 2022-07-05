module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Furnitures', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false // permet d'indiquer si une proporité est facultative ou non.
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    material: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue('material').split(',')
      },
      set(types) {
        this.setDataValue('material', types.join())
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false
    },
    accepted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false
    },

  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false
  })
}

