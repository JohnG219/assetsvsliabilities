const mongoose = require('mongoose');

const server = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Backend Connected')
    } catch (error) {
        console.log('Backend Disconnected');
    }
}

module.exports = {server}