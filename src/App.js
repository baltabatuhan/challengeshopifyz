import { useEffect, useState } from "react";
import "./css/App.css";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Card from "./components/Card";
import ErrorPage from "./components/Card/ErrorPage";


function App() {
  const [nasa, setNasa] = useState({
    response: {},
    loading: true,
    date: new Date(),
    error: false
  });

  const formattedDate = date => {
    const mydate = date.toLocaleDateString().split("/");
    return `${mydate[2]}-${mydate[0]}-${mydate[1]}`;
  };

  const apiKey = "DwJlsmcEi4JZIyBUKFEJlPMhx28CgmIjTb7Fvh3w";
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedDate(
    nasa.date
  )}`;

  const getNasaData = () => {
    axios
      .get(apiUrl)
      .then(response => {
        setNasa({
          ...nasa,
          response: response.data,
          loading: false,
          error: false,
          errorMessage: ""
        });
      })
      .catch(error =>
        setNasa({
          ...nasa,
          response: {},
          loading: false,
          error: true,
          errorMessage: `Error ${error.response.data.code}: ${error.response.data.msg}`
        })
      );
  };

  const handleDateChange = (date, to = "") => {
    to === "daybefore"
      ? setNasa({
          ...nasa,
          date: new Date(new Date(date).setDate(new Date(date).getDate() - 1)),
          loading: true,
          error: false
        })
      : to === "dayafter"
      ? setNasa({
          ...nasa,
          date: new Date(new Date(date).setDate(new Date(date).getDate() + 1)),
          loading: true,
          error: false
        })
      : setNasa({ ...nasa, date: new Date(date), loading: true, error: false });
  };

  useEffect(getNasaData, [nasa.date]);


  return (
    <div className="App">
    <Header />
    <section className="content">
      <Navigation
        nasa={nasa}
        setNasa={setNasa}
        handleDateChange={handleDateChange}
      />
      <hr />
      {nasa.loading ? (
        <div className="spinner"></div>
      ) : nasa.error ? (
        <ErrorPage nasa={nasa} setNasa={setNasa} />
      ) : (
        <Card nasa={nasa.response} />
      )}
    </section>
    
  </div>
  )
}

export default App;