const express = require("express");
const Amadeus = require("amadeus");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const { MongoClient } = require('mongodb');

const amadeus = new Amadeus({
  clientId: 'ZpWs6GEqzuHYlGRvJSsvImwWAIHRFe0I',
  clientSecret: 'CrcocCa2pgaGFzxl'
});

app.get("/api/flights", async (req, res) => {
  const {
    originLocationCode,
    destinationLocationCode,
    departureDate,
    adults,
    children,
    carrierClass,
    tripType,
  } = req.query;

  try {
    const response = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode,
      destinationLocationCode,
      departureDate,
      adults,
      children,
      travelClass: carrierClass,
      currencyCode:'INR',
      tripType,
    });

    const flights = response.data;
    res.json(flights);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching flight offers." });
  }
});

const uri = 'mongodb+srv://iampragathish:flightbooking@cluster0.irx6cnh.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function start() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas:', err);
  }
}

//db call
start();

//bookings 
app.post('/api/booking', async (req, res) => {
  try {
    const bookingData = req.body;
    const bookingsCollection = client.db('bookings').collection('flights');
    const result = await bookingsCollection.insertOne(bookingData);

    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//retriving the data
app.get('/api/booking', async (req, res) => {
  const { username } = req.query;

  try {
    const bookingsCollection = client.db('bookings').collection('flights');
    const userBookings = await bookingsCollection.find({ username }).toArray();
    res.json(userBookings);
  } catch (error) {
    console.error('Error fetching user bookings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});








const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
