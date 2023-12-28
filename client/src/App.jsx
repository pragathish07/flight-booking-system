
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchFlights from '../src/components/SearchFlights'
import DashboardPage from '../src/components/Dashboard'
import LoginPage from '../src/components/Login'
import RegisterPage from '../src/components/Register'
import PaymentPage from '../src/components/PaymentPage'
import Home from './components/Home';
import { FlightDataProvider } from '../src/components/FlightDataContext';
import BookingList from './components/BookingList';


function App() {
  return (
    <FlightDataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/flights" element={<SearchFlights/>} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/bookings" element={<BookingList />} />
        </Routes>
      </Router>
    </FlightDataProvider>
  );
}

export default App;
