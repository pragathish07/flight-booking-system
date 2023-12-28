import { ref, set, push, get, query, orderBy, limit } from 'firebase/database';
import { getUserData } from './storage'; // Assuming you have a function to get user data

// Function to store a new booking in the database
export const storeBooking = (user, ticketDetails) => {
  const database = getDatabase(); // Get a reference to the database
  const bookingsRef = ref(database, 'bookings'); // Reference to the "bookings" node

  // Generate a unique key for the new booking
  const newBookingRef = push(bookingsRef);

  // Define the data to be stored in the booking
  const bookingData = {
    user: user, // User information
    ticketDetails: ticketDetails, // Ticket details
    timestamp: Date.now(), // Timestamp for sorting
  };

  // Store the data in the database under the unique key
  return set(newBookingRef, bookingData);
};

// Function to retrieve user's bookings from the database
export const getUserBookings = async () => {
  const database = getDatabase();
  const bookingsRef = ref(database, 'bookings');

  // Assuming you have a way to get the user's ID
  const userId = getUserData().cardHolder;

  // Query to retrieve the user's bookings
  const userBookingsQuery = query(
    bookingsRef,
    orderByChild('cardHolder'), // Assuming user ID is stored in booking data
    equalTo(userId)
  );

  // Retrieve and return the user's bookings
  const snapshot = await get(userBookingsQuery);
  const userBookings = [];
  snapshot.forEach((childSnapshot) => {
    userBookings.push(childSnapshot.val());
  });

  return userBookings;
};

export {database};