const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(
  cors({
    origin: [
 
     
    ]
  })
);

app.get('/', (req, res) => {
  res.send('This server is running');
 
});





const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://paymentsss:wo7S9M8orsSzuff2@cluster0.rne3uly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    const database = client.db("EasyPayments");
    const userSCollaction = database.collection("users");

    app.post('/newUser',async(req,res)=>{
      const users=req.body
      const result =await userSCollaction.insertOne(users)
      res.send(result)
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





app.listen(port, () => {
  console.log(`This server is running on port ${port}`);
});
