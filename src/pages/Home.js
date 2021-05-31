import { Button } from 'reactstrap';
import Header from '../partials/Header';
import { useState, useEffect } from 'react';


import {
  Link
} from "react-router-dom";



function Home(){


const [age, setAge] = useState(0);
const [height, setHeight] = useState(0);
const [weight, setWeight] = useState(0);
const [gender, setGender] = useState('male');
const [bmr, setBmr] = useState(0);
const [bmi, setBmi] = useState(0);
const [bodyType, setBodyType] = useState('normal');





const handleHeightChange = (e) => {
   setHeight(e.target.value);
}
const handleAgeChange = (e) => {
     setAge(e.target.value);
}
const handleWeightChange = (e) => {
      setWeight(e.target.value);
}
const handleGenderChange = (e) => {
      setGender(e.target.value);
}

const handleTdeeCalculation = () => {
     let bmr = (gender == 'male') ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age) :  447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
     let heightInMeter = height/100;
     let bmi = weight/(heightInMeter * heightInMeter);
     setBmi(bmi.toFixed(2));
  setBmr(bmr.toFixed(2));
}

useEffect(() => {
  if(bmi <= 18.5){
    setBodyType('Underweight');
  }
   if(bmi > 18.5 && bmi <=24.9){
     setBodyType('Normal');
   }
   if(bmi > 24.9 && bmi <=29.9){
     setBodyType('Overweight');
   }
   if( bmi > 29.9){
     setBodyType('Obese');
   }

}, [bmi]);


  return(
    <>

<Header/>




    <div classNameName="jumbotron text-center">
      <h1>TDEE CALCULATOR</h1>
      <p></p>
    </div>

    <div classNameName="container">
      <div classNameName="row">
      <h2>Enter Your Details</h2>
      <form>
  <div className="form-group">
    <label htmlFor="age">Age:</label>
    <input type="number" onChange={(e) => {handleAgeChange(e)}} className="form-control" id="age" placeholder="Enter Age" name="age" value={age} />
  </div>
  <div className="form-group">
    <label htmlFor="weight">Weight:</label>
    <input type="number" onChange={(e) => {handleWeightChange(e)}} className="form-control" id="weight" placeholder="Enter Weight" name="weight" value={weight} />
  </div>
  <div className="form-group">
    <label htmlFor="height">Height:</label>
    <input type="number" onChange={(e) => {handleHeightChange(e)}}  className="form-control" id="height" placeholder="Enter Height" name="height" value={height} />
  </div>

  <div className="form-group">
    <label htmlFor="gender">Gender:</label>
    <select onChange={(e) => {handleGenderChange(e)}}  className="form-control" id="gender" value={gender}>
    <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>

  <button type="button" onClick={() => {handleTdeeCalculation( )}} className="btn btn-primary">Submit</button>
</form>
      </div>
<div className="row">
     BMR = {bmr} <br/>
     BMI = {bmi} <br/>
     Bodytype = {bodyType}
</div>

    </div>
</>

  )
}

export default Home;
