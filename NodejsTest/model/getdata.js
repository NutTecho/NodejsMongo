const mongoose = require('mongoose')
const mongo = require('mongodb')
const dburl = 'mongodb://localhost:27017/test'

mongoose.connect(dburl,{
    useNewUrlParser:true
})

const db = mongoose.connection
const Schema =  mongoose.Schema

const dbSchema = new Schema({
    id:
    {
        type:Schema.ObjectId
    },
    topic:
    {
        type:String,
        required:true
    },
    description:
    {
        type:String,
        required:true
    },
    address:
    {
        type:String,
        required:true
    }

})
const GetData =  module.exports = mongoose.model("getdata",dbSchema)
module.exports.createBlog = function(newBlog,callback)
{
    newBlog.save(callback)
}
module.exports.GetOldData = function(data)
{
    GetData.find(data)
}