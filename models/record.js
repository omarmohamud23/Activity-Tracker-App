const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    
    let Record = sequelize.define('Record', {
        records: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },

        activity:{
            type: DataTypes.STRING,
            allowNull: false
        },
        medium: {
            types: DataTypes.STRING,
            allowNull:false
        },

        media:{
            type: DataTypes.OBJECT,
            allowNull: false
        },

        types: {
            type: DataTypes.STRING,
            allowNull: false
            
        },
        hours: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
})

Record.sync( {force: false} ).then( ()=>{
    console.log('Synced record table')
})

return Record


}