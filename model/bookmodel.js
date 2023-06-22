const mobgoose = require("mongoose")
const schema = mongoose.schema
const bookmodel = new schema({
    title: { type: string },
    auter: { type: string }
})


module.exports = mongoose.model('datas', bookmodel)