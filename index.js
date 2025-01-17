require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fnfrn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const userCollection = client.db('BloodBankerDB').collection('users');
        const districtCollection = client.db('BloodBankerDB').collection('district');
        const upazilaCollection = client.db('BloodBankerDB').collection('upazila');

        // district api
        app.get('/district', async (req, res) => {
            const result = await districtCollection.find().toArray()
            res.send(result)
        })

        // upazila api
        app.get('/upazila', async (req, res) => {
            const result = await upazilaCollection.find().toArray()
            res.send(result)
        })


        // jwt api
        // app.get('/user',async (req, res) =>{
        //     const result = await userCollection.find().toArray();
        //     res.send(result)
        // })


        app.post('/jwt', async (req, res) => {
            const user = req.body;
            const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
                expiresIn: '10h'
            });
            res.send({ token });
        })

        // user api
        app.get('/users', async (req, res) => {
            const result = await userCollection.find().toArray()
            res.send(result)
        })

        app.get('/users/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email: email };
            const result = await userCollection.findOne(query);
            res.send(result);
        });

        app.post('/user', async (req, res) => {
            const user = req.body;
            const query = { email: user.email };
            const isExist = await userCollection.findOne(query);
            if (isExist) {
                return res.send({ message: 'user already exist' })
            };
            const result = await userCollection.insertOne(user);
            res.send(result);
        })

        app.put('/user/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };

            const updateDoc = {
                $set: {
                    name: user.name,
                    upazila: user.upazila,
                    district: user.district,
                    bloodGroup: user.bloodGroup
                },
            };

            const result = await userCollection.updateOne(filter, updateDoc);
            res.send(result);
        })
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('BloodBanker Server!')
})

app.listen(port, () => {
    console.log(`BloodBanker listening on port ${port}`)
})