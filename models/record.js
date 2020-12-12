const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    
    let Record = sequelize.define('Record', {
        records: {
            type: DataTypes.STRING
        },

        activity:{
            type: DataTypes.STRING
        },

        media:{
            type: DataTypes.OBJECT
        },

        types: {
            type: DataTypes.ARRAY
    }
})

Record.sync( {force: true} ).then( ()=>{
    console.log('Synced record table')
})

return Record


}