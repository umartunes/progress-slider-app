import React, { useState } from 'react';

import './App.css';


function App() {
  const [range1, setRange1] = useState(33)
  const [range2, setRange2] = useState(34)
  const [range3, setRange3] = useState(33)

  const handleRange1 = (e) => {

    let oldValue = range1
    let newValue = Number(e.target.value)
    let difference = Number( newValue - oldValue )
    let isNumberIncreased = difference >= 0 
    let numbersToAddOrRemoveInOthers = Math.abs( difference ) 


    // console.log('old value', range1)
    // console.log('new value', newValue)
    // console.log('difference', difference)
    // console.log('isNumberIncreased', isNumberIncreased)

    setRange1(Number(newValue))

    if (isNumberIncreased) {

      if (range2 > 0 && range3 > 0) {
        setRange2((oldNumber) => { return oldNumber - (numbersToAddOrRemoveInOthers / 2) })
        setRange3((oldNumber) => { return oldNumber - (numbersToAddOrRemoveInOthers / 2) })
      } else if (range2 > 0) {
        setRange2((oldNumber) => { return oldNumber - numbersToAddOrRemoveInOthers })
      } else if (range3 > 0) {
        setRange3((oldNumber) => { return oldNumber - numbersToAddOrRemoveInOthers })
      } else {
        console.log("Number should not be processed")
      }

    } else {

      if (range2 < 100 && range3 < 100) {
        setRange2((oldNumber) => { return oldNumber + (numbersToAddOrRemoveInOthers / 2) })
        setRange3((oldNumber) => { return oldNumber + (numbersToAddOrRemoveInOthers / 2) })
      } else if (range2 < 100) {
        setRange2((oldNumber) => { return oldNumber + numbersToAddOrRemoveInOthers })
      } else if (range3 < 100) {
        setRange3((oldNumber) => { return oldNumber + numbersToAddOrRemoveInOthers })
      } else {
        console.log("Number should not be processed")
      }
      
    }

  }

  const handleRange2 = (e) => {

    let oldValue = range2
    let newValue = Number(e.target.value)
    let difference = newValue - oldValue
    let isNumberIncreased = difference >= 0
    let numbersToAddOrRemoveInOthers = Math.abs( difference ) 


    // console.log('old value', range2)
    // console.log('new value', newValue)
    // console.log('difference', difference)
    // console.log('isNumberIncreased', isNumberIncreased)

    setRange2(Number(newValue))

    if (isNumberIncreased) {

      if (range1 > 0 && range3 > 0) {
        setRange1((oldNumber) => { return oldNumber - (numbersToAddOrRemoveInOthers / 2) })
        setRange3((oldNumber) => { return oldNumber - (numbersToAddOrRemoveInOthers / 2) })
      } else if (range1 > 0) {
        setRange1((oldNumber) => { return oldNumber - numbersToAddOrRemoveInOthers })
      } else if (range3 > 0) {
        setRange3((oldNumber) => { return oldNumber - numbersToAddOrRemoveInOthers })
      } else {
        console.log("Number should not be processed")
      }

    } else {

      if (range1 < 100 && range3 < 100) {
        setRange1((oldNumber) => { return oldNumber + (numbersToAddOrRemoveInOthers / 2) })
        setRange3((oldNumber) => { return oldNumber + (numbersToAddOrRemoveInOthers / 2) })
      } else if (range1 < 100) {
        setRange1((oldNumber) => { return oldNumber + numbersToAddOrRemoveInOthers })
      } else if (range3 < 100) {
        setRange3((oldNumber) => { return oldNumber + numbersToAddOrRemoveInOthers })
      } else {
        console.log("Number should not be processed")
      }
      
    }

  }

  const handleRange3 = (e) => {

    let oldValue = range3
    let newValue = Number(e.target.value)
    let difference = newValue - oldValue
    let isNumberIncreased = difference >= 0
    let numbersToAddOrRemoveInOthers = Math.abs( difference ) 

    // console.log('old value', range3)
    // console.log('new value', newValue)
    // console.log('difference', difference)
    // console.log('isNumberIncreased', isNumberIncreased)

    setRange3(Number(newValue))

    if (isNumberIncreased) {

      if (range1 > 0 && range2 > 0) {
        setRange1((oldNumber) => { return oldNumber - (numbersToAddOrRemoveInOthers / 2) })
        setRange2((oldNumber) => { return oldNumber - (numbersToAddOrRemoveInOthers / 2) })
      } else if (range1 > 0) {
        setRange1((oldNumber) => { return oldNumber - numbersToAddOrRemoveInOthers })
      } else if (range2 > 0) {
        setRange2((oldNumber) => { return oldNumber - numbersToAddOrRemoveInOthers })
      } else {
        console.log("Number should not be processed")
      }

    } else {

      if (range1 < 100 && range2 < 100) {
        setRange1((oldNumber) => { return oldNumber + (numbersToAddOrRemoveInOthers / 2) })
        setRange2((oldNumber) => { return oldNumber + (numbersToAddOrRemoveInOthers / 2) })
      } else if (range1 < 100) {
        setRange1((oldNumber) => { return oldNumber + numbersToAddOrRemoveInOthers })
      } else if (range2 < 100) {
        setRange2((oldNumber) => { return oldNumber + numbersToAddOrRemoveInOthers })
      } else {
        console.log("Number should not be processed")
      }
      
    }

  }

  return (
    <div className='container'>
      <div className='content'>
        <h1>Progress App</h1>
        <div className='range_container'>
          <input type='range' min='0' max='100' step="1" value={range1} onChange={handleRange1} />
          <span>{range1} %</span>
        </div>
        <div className='range_container'>
          <input type='range' min='0' max='100' step="1" value={range2} onChange={handleRange2} />
          <span>{range2} %</span>
        </div>
        <div className='range_container'>
          <input type='range' min='0' max='100' step="1" value={range3} onChange={handleRange3} />
          <span>{range3} %</span>
        </div>
        <div>Total = {range1 + range2 + range3}</div>
      </div>
    </div>
  );
}

export default App;
