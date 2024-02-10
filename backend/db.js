import { MongoClient } from "mongodb";

const URL = 'mongodb+srv://relax:037225iN@cluster0.q6pgtd0.mongodb.net/relax'

let dbCollection

export const connectToDb = (cb) => {
    MongoClient
        .connect(URL, {useNewUrlParser: true, useUnifiedTopology: true}).then((client) => {
            console.log('connect to MongoDb')
            dbCollection = client.db()
            return cb()
        })
        .catch((err) => {
            console.log(err, 'MongoClient error')
            cb(err)
        })
}
export const getDb = () => dbCollection 