import React, { useState } from 'react';
import { css } from '@emotion/react';
import Loader from './loader';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';
import { useFlightData } from './FlightDataContext'; 

function BookingContainer() {
  const [selectedTab, setSelectedTab] = useState('Economy Class');
  const [origin, setOrigin] = useState('MAA');
  const [destination, setDestination] = useState('DXB');
  const [departureDate, setDepartureDate] = useState('2023-09-20');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [carrierClass, setCarrierClass] = useState('ECONOMY');
  const [tripType, setTripType] = useState('oneWay');
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [flightsPerPage] = useState(10);
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const fetchFlights = async (e) => {
    e.preventDefault()
    navigate('/flights')
    
    const apiCallTab = selectedTab;
    console.log(selectedTab);
    if(isAuthenticated()){
      /* navigate('/flights') */
    try {
      
      setLoading(true); // Start loading
      const response = await fetch(`http://localhost:8000/api/flights?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departureDate}&adults=${adults}&children=${children}&carrierclassName=${apiCallTab}`);
      const data = await response.json();
      setFlights(data);
    } catch (error) {
      console.error('Error fetching flight offers:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  }else{
    navigate('/login')
  }
  };


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = flights.slice(indexOfFirstFlight, indexOfLastFlight);


  //context 
  const {setFlight} = useFlightData()

  const navigateToPayment = (flight) => {
    navigate('/payment',{ state: { flight: flight }});
    
  };

  const handleTripTypeChange = (event) => {
    console.log('Radio button clicked:', event.target.value);
    console.log('Current tripType:', tripType);
    setTripType(event.target.value);
};


  return (
    <>
    <section className="section__container booking__container">
    <div className="booking__nav">
      <span
        className={selectedTab === 'Economy Class' ? 'active-tab' : 'tab'}
        onClick={() => handleTabClick('Economy Class')}
      >
        Economy Class
      </span>
      <span
        className={selectedTab === 'Business Class' ? 'active-tab' : 'tab'}
        onClick={() => handleTabClick('Business Class')}
      >
        Business Class
      </span>
      <span
        className={selectedTab === 'First Class' ? 'active-tab' : 'tab'}
        onClick={() => handleTabClick('First Class')}
      >
        First Class
      </span>
    </div>
    <form>
      <div className="form__group">
        <span><i className="ri-map-pin-line"></i></span>
        <div className="input__content">
          <div className="input__group">
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
            <label>Location</label>
          </div>
          <p>Where are you going?</p>
        </div>
      </div>

      <div className="form__group">
        <span><i className="ri-calendar-line"></i></span>
        <div className="input__content">
          <div className="input__group">
            <input
              type="text"
              
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <label>Return</label>
          </div>
          <p>Add date</p>
        </div>
      </div>

      <div className="form__group">
        <span><i className="ri-calendar-line"></i></span>
        <div className="input__content">
          <div className="input__group">
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
            <label>Departure</label>
          </div>
          <p>Add date</p>
        </div>
      </div>

      
      <div className="form__group">
        <span><i className="ri-user-3-line"></i></span>
        <div className="input__content">
          <div className="input__group">
            <input
              type="number"
              
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
            />
            <label>Travellers</label>
          </div>
          <p>Add guests</p>
        </div>
      </div>

      <div className="trip-type form__group">
      <div className="input__content">
        <div className="input__group">
        <label>
          <input
            type="radio"
            value="oneWay"
            style={{cursor:'pointer'}}
             checked={tripType === 'oneWay'} 
            onChange={handleTripTypeChange}
          />
          One Way
        </label>
        </div>
        </div>
        <div className="input__content">
        <div className="input__group">
        <label>
          <input
            type="radio"
            value="roundTrip"
            style={{cursor:'pointer'}}
            checked={tripType === 'roundTrip'}
            onChange={handleTripTypeChange}
          />
          Round Trip
        </label>
      </div>
      </div>
      </div>
      <button className="btn" onClick={fetchFlights}><i className="ri-search-line"></i></button>
    </form>

    
      
  </section>

            <div className="flight-list">
            {loading ? (
              <div className="loading-spinner">
                <Loader />
              </div>
            ) : (
              currentFlights.map((flight, index) => (
                <div className="p-10" key={index}>
                <div className="max-w-full bg-white flex flex-col rounded overflow-hidden shadow-lg">
                  <div className="flex flex-row items-baseline flex-nowrap bg-gray-100 p-2">
                    <svg
                      viewBox="0 0 64 64"
                      data-testid="tripDetails-bound-plane-icon"
                      pointerEvents="all"
                      aria-hidden="true"
                      className="mt-2 mr-1"
                      role="presentation"
                      style={{ fill: 'rgb(102, 102, 102)', height: '0.9rem', width: '0.9rem' }}
                    >
                      <path
                        d="M43.389 38.269L29.222 61.34a1.152 1.152 0 01-1.064.615H20.99a1.219 1.219 0 01-1.007-.5 1.324 1.324 0 01-.2-1.149L26.2 38.27H11.7l-3.947 6.919a1.209 1.209 0 01-1.092.644H1.285a1.234 1.234 0 01-.895-.392l-.057-.056a1.427 1.427 0 01-.308-1.036L1.789 32 .025 19.656a1.182 1.182 0 01.281-1.009 1.356 1.356 0 01.951-.448l5.4-.027a1.227 1.227 0 01.9.391.85.85 0 01.2.252L11.7 25.73h14.5L19.792 3.7a1.324 1.324 0 01.2-1.149A1.219 1.219 0 0121 2.045h7.168a1.152 1.152 0 011.064.615l14.162 23.071h8.959a17.287 17.287 0 017.839 1.791Q63.777 29.315 64 32q-.224 2.685-3.807 4.478a17.282 17.282 0 01-7.84 1.793h-9.016z"
                      ></path>
                    </svg>
                    <h1 className="ml-2 uppercase font-bold text-gray-500">departure</h1>
                    <p className="ml-2 font-normal text-gray-500">
                      {new Date(flight.itineraries[0]?.segments[0]?.arrival?.at).toLocaleDateString() || 'N/A'}
                    </p>
                  </div>
                  <div className="mt-2 flex justify-start bg-white p-2">
                    <div className="flex mx-2 ml-6 h-8 px-2 flex-row items-baseline rounded-full bg-gray-100 p-1">
                      <svg
                        viewBox="0 0 64 64"
                        pointerEvents="all"
                        aria-hidden="true"
                        className="etiIcon css-jbc4oa"
                        role="presentation"
                        style={{ fill: 'rgb(102, 102, 102)', height: '12px', width: '12px' }}
                      >
                        <path
                          d="M43.389 38.269L29.222 61.34a1.152 1.152 0 01-1.064.615H20.99a1.219 1.219 0 01-1.007-.5 1.324 1.324 0 01-.2-1.149L26.2 38.27H11.7l-3.947 6.919a1.209 1.209 0 01-1.092.644H1.285a1.234 1.234 0 01-.895-.392l-.057-.056a1.427 1.427 0 01-.308-1.036L1.789 32 .025 19.656a1.182 1.182 0 01.281-1.009 1.356 1.356 0 01.951-.448l5.4-.027a1.227 1.227 0 01.9.391.85.85 0 01.2.252L11.7 25.73h14.5L19.792 3.7a1.324 1.324 0 01.2-1.149A1.219 1.219 0 0121 2.045h7.168a1.152 1.152 0 011.064.615l14.162 23.071h8.959a17.287 17.287 0 017.839 1.791Q63.777 29.315 64 32q-.224 2.685-3.807 4.478a17.282 17.282 0 01-7.84 1.793h-9.016z"
                        ></path>
                      </svg>
                      <p className="font-normal text-sm ml-1 text-gray-500">Economy</p>
                    </div>
                  </div>
                  <div className="mt-2 flex sm:flex-row mx-6 sm:justify-between flex-wrap ">
                    <div className="flex flex-row place-items-center p-2">
                      <img
                        alt="Qatar Airways"
                        className="w-10 h-10"
                        src={flight.itineraries[0]?.segments[0]?.carrierImage || ''}
                        style={{ opacity: 1, transformOrigin: '0% 50% 0px', transform: 'none' }}
                      />
                      <div className="flex flex-col ml-2">
                        <p className="text-xs text-gray-500 font-bold">{flight.itineraries[0]?.segments[0]?.carrierCode || 'N/A'}</p>
                        <div className="text-xs text-gray-500">2*23kg</div>
                      </div>
                    </div>

                    <div className="flex flex-col p-2">
                      <p className="font-bold">
                        {new Date(flight.itineraries[0]?.segments[0]?.departure?.at).toLocaleTimeString('en-US', {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true,
                        }) || 'N/A'}
                      </p>
                      <p className="text-gray-500">
                        <span className="font-bold">{origin}</span> 
                      </p>
                      <p className="text-gray-500"></p>
                    </div>
                    <div className="flex flex-col flex-wrap p-2">
                      <p className="font-bold">
                        {new Date(flight.itineraries[0]?.segments[0]?.arrival?.at).toLocaleTimeString('en-US', {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true,
                        }) || 'N/A'}
                      </p>
                      <p className="text-gray-500">
                        <span className="font-bold">{destination}</span>
                      </p>
                      <p className="text-gray-500"></p>
                    </div>
                  </div>
                  <div className="mt-4 bg-gray-100 flex flex-row flex-wrap md:flex-nowrap justify-between items-baseline ">
                    <div className="flex mx-6 py-4 flex-row flex-wrap" style={{alignSelf: 'flex-end'}}>
                      <svg
                        className="w-12 h-10 p-2 mx-2 self-center bg-gray-400 rounded-full fill-current text-white"
                        viewBox="0 0 64 64"
                        pointerEvents="all"
                        aria-hidden="true"
                        role="presentation"
                      >
                        <path
                          d="M43.389 38.269L29.222 61.34a1.152 1.152 0 01-1.064.615H20.99a1.219 1.219 0 01-1.007-.5 1.324 1.324 0 01-.2-1.149L26.2 38.27H11.7l-3.947 6.919a1.209 1.209 0 01-1.092.644H1.285a1.234 1.234 0 01-.895-.392l-.057-.056a1.427 1.427 0 01-.308-1.036L1.789 32 .025 19.656a1.182 1.182 0 01.281-1.009 1.356 1.356 0 01.951-.448l5.4-.027a1.227 1.227 0 01.9.391.85.85 0 01.2.252L11.7 25.73h14.5L19.792 3.7a1.324 1.324 0 01.2-1.149A1.219 1.219 0 0121 2.045h7.168a1.152 1.152 0 011.064.615l14.162 23.071h8.959a17.287 17.287 0 017.839 1.791Q63.777 29.315 64 32q-.224 2.685-3.807 4.478a17.282 17.282 0 01-7.84 1.793h-9.016z"
                        ></path>
                      </svg>
                      <div className="text-sm mx-2 flex flex-col">
                        <p className="font-bold"> {`${flight.price.total} ${flight.price.currency}`}</p>
                        <p className="text-xs text-gray-500">Price per adult</p>
                      </div>
                      <button
                        className="w-32 h-11 rounded flex border-solid border text-white bg-blue-800 mx-2 justify-center place-items-center"
                        onClick={() => navigateToPayment(flight)}
                      >
                        <div className="">Book</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            

              ))
            )}
          </div>
          <div className="pagination">
            {Array.from({ length: Math.ceil(flights.length / flightsPerPage) }).map((_, index) => (
              <button key={index} onClick={() => paginate(index + 1)} className='tab-btn'>
                {index + 1}
              </button>
            ))}
          </div>
      </>
  );
}

const override = css`
  display: block;
  margin: 0 auto;
`;

export default BookingContainer;
