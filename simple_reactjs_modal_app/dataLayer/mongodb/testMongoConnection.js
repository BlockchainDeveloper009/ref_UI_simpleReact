const {mongoose} = require('mongoose');
const uri 
= "mongodb+srv://petsadmin:1030@cluster0.qpmgrng.mongodb.net/sample_mflix?retryWrites=true&w=majority";

const dbName = process.env.MONGODB_DB_NAME;


async function main() {
    // const client = await MongoClient.connect(uri, 
    //     { userNewUrlParser: true, useUnifiedTopology: true,
    //     serverApi: ServerApiVersion.v1});
   
    mongoose.connect(uri, () => {
        console.log('Connected to MongoDb')
    });

    
}

main();
/*
const client = await MongoClient.connect(uri, 
        { userNewUrlParser: true, useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1});
    client.connect(err => {
        const collection = client.db("test").collection("devices");
        const admin = client.db("test").admin();
        console.log(await admin.serverStatus());
        console.log(await admin.listDatabases());
        // perform actions on the collection object
        client.close();
    })

*/
