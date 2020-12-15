const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    
    let Record = sequelize.define('Record', {
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        medium: {
            type: DataTypes.STRING,
            allowNull:false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
            
        },
        hours: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
})

Record.sync( {force: true} ).then( ()=>{
    console.log('Synced record table')
})

return Record


}