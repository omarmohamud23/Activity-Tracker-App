const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    
    let Record = sequelize.define('Record', {
        records: {
            type: DataTypes.STRING,
            allowNull: false
        },

        activity:{
            type: DataTypes.STRING,
            allowNull: false
        },

        media:{
            type: DataTypes.OBJECT,
            allowNull: false
        },

        types: {
            type: DataTypes.ARRAY,
            allowNull: false
            
    }
})

Record.sync( {force: false} ).then( ()=>{
    console.log('Synced record table')
})

return Record


}