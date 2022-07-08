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
      set(material) {
        this.setDataValue('material', material.join())
      }
    },
    description: {
      type: DataTypes.TEXT,
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
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        return this.getDataValue('image_url').split(',')
      },
      set(image_url) {
        this.setDataValue('image_url', image_url.join())
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },


  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false
  })
}

