import React, { useState, useEffect } from 'react';

function BookingList() {
  const [flightData, setFlightData] = useState([]);

  useEffect(() => {
    // Fetch the data from your backend API or use the sample data here
    // Replace this with your actual API endpoint or fetch logic
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/booking'); // Replace with your actual API endpoint
        if (response.ok) {
          const data = await response.json();
          setFlightData(data);
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function to fetch data when the component mounts
    fetchData();
  }, []);

  return (
    <div>
      <h2>User Bookings</h2>
      <h2>Flight Details</h2>
      <ul>
        {flightData.map((flight) => (
          <li key={flight._id}>
            {/* <strong>Flight:</strong> {flight.flightName} */}
            <br />
            <strong>Price:</strong> {flight.flight.price?.currency} {flight.flight.price?.total}
            <br />
            <strong>Departure Airport:</strong> {flight.flight.itineraries[0].segments[0].departure.iataCode}
            <br />
            <strong>Arrival Airport:</strong> {flight.flight.itineraries[0].segments[0].arrival.iataCode}
            <br />
            <strong>Time</strong> {flight.departureTime}
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;
