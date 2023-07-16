const { Model, DataTypes } = require('sequelize')

class users extends Model {
static init(sequelize){
    super.init({
        nome: DataTypes.STRING,
        senha: DataTypes.STRING
    }, {
        sequelize,
      modelName: 'users',

    })
}
}

module.exports = users