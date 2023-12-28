import { useEffect, useState } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import NavBar from "./Navbar"
import { UserDetailsApi } from "../services/api"
import { logout,isAuthenticated } from "../services/auth"

export default function DashboardPage(){
    const navigate = useNavigate();
    const [flightData, setFlightData] = useState([]);

    const [user,setUser] = useState({name:"",email:"",localId:""})

    useEffect(()=>{
        if(isAuthenticated()){
            UserDetailsApi().then((response)=>{
               
                setUser({
                    name:response.data.users[0].displayName,
                    email:response.data.users[0].email,
                    localId:response.data.users[0].localId,
                })
            })
        }
    },[])

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
    const logoutUser = ()=>{
        logout();
        navigate('/login')
    }

    if (!isAuthenticated()) {
        //redirect user to dashboard
        return <Navigate to="/login" />
    }

    const navigatetoHome = ()=>{
        navigate('/')
    }

    return (
        <div>
            <NavBar logoutUser={logoutUser} />
            <main role="main" className="container mt-5 my-12">
                <div className="container">
                    <div className="text-center mt-5">
                        <h3>Dashboard page</h3>
                        { user.name && user.email && user.localId ?
                            (<div>
                                <strong className="text-bold " >Hi {user.name}, {/* your Firebase ID is {user.localId} */}</strong>
                                <br />
                                <p>Your email is {user.email}</p>
                                <br />
                            </div>)
                            : <p>Loading...</p>
                        }
                    </div>

                </div>
                <ul className="">
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
                <div className="my-8">
                    <button className="btn " onClick={navigatetoHome}>Go To Home</button>
                </div>
            </main>
        </div>
    )
}