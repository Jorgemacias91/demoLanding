const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    username : {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull:false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: ["(?=.*[0-9])(?=.*[0-9])"],
          msg:
            "Password must contain at least 1 uppercase alphabetical character and 1 numeric character",
        },
      },
    },
    // profilePic : {
    //   type: DataTypes.STRING,
    //   allowNull:false
    // },
    email: {
      type : DataTypes.STRING,
      allowNull:false
    },
    birth : {
      type: DataTypes.STRING,
      allowNull: false
    },

  },{timestamps : false});
};
