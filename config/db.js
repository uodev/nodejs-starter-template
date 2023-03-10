const mongoose = require('mongoose');


const databaseConnection = () => {
    mongoose.set('strictQuery', true)

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected Successfully")
}).catch((err) => {
    console.log(err)
})
}

module.exports = databaseConnection