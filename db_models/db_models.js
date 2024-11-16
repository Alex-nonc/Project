const sequelize = require('../db')
const {DataTypes} = require('sequelize')

// ORM-модели для связи с БД

const Contact_data = sequelize.define ('Contact_data', {
    contact_data_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    contact_data_name: {type: DataTypes.STRING, allowNull: false},
    contact_data_email: {type: DataTypes.STRING, unique: true, allowNull: false},
    contact_data_phone: {type: DataTypes.STRING, allowNull: false}
})

const Booking = sequelize.define ('Booking', {
    booking_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    booking_quantity: {type: DataTypes.INTEGER, allowNull: false},
    booking_date: {type: DataTypes.DATE, allowNull: false}
})

const Type_client = sequelize.define ('Type_client', {
    type_client_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type_client: {type: DataTypes.STRING, allowNull: false},
    type_client_price: {type: DataTypes.INTEGER, allowNull: false},
})

const Sign_up = sequelize.define ('Sign_up', {
    sign_up_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    sign_up_phone: {type: DataTypes.STRING, allowNull: false},
    sign_up_email: {type: DataTypes.STRING, unique: true, allowNull: false},
    sign_up_passwd: {type: DataTypes.STRING, allowNull: false},
    sign_up_name: {type: DataTypes.STRING, allowNull: false},
    sign_up_role: {type: DataTypes.STRING, allowNull: false, defaultValue: 'client' },
})

const Comments = sequelize.define ('Comments', {
    comments_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    comments_date: {type: DataTypes.DATE, allowNull: false},
    comments_comment: {type: DataTypes.STRING, allowNull: false}
})

Contact_data.hasOne(Booking)
Booking.belongsTo(Contact_data)

Booking.hasOne(Type_client)
Type_client.belongsTo(Booking)

Sign_up.hasOne(Comments)
Comments.belongsTo(Sign_up)

module.exports = {
    Contact_data,
    Booking,
    Type_client,
    Sign_up,
    Comments
}