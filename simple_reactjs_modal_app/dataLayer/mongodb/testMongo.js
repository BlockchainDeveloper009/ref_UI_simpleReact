const {MongoClient, ServerApiVersion} = require('mongodb').MongoClient;

const uri 
= "mongodb+srv://petsadmin:1030@cluster0.qpmgrng.mongodb.net/sample_mflix?retryWrites=true&w=majority";
const dbName = process.env.MONGODB_DB_NAME;


async function main() {
    // const client = await MongoClient.connect(uri, 
    //     { userNewUrlParser: true, useUnifiedTopology: true,
    //     serverApi: ServerApiVersion.v1});

    const client = new MongoClient(uri);
   
        try{
            await client.connect()
            dbName = "sample_mflix"
            const collection = client.db(dbName).collection("devices");
            const admin = client.db(dbName).admin();
            console.log(await admin.serverStatus());
            console.log(await admin.listDatabases());
            // perform actions on the collection object
            client.close();

        }catch(e)
        {
            console.log('--dbConn error--')
            console.log(e)
            console.log('--dbConn errorEND--')
        }

    try{

       

    }catch(e){

        console.log('--dbConn error--')
            console.log(e)
            console.log('--dbConn errorEND--')

    }

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
