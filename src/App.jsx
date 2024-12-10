import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {

  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [Rate, setRate] = useState(0)
  const [Year, setYear] = useState(0)

  const [invalidPrinciple,setInvalidPrinciple]=useState(false)
  const [invalidRate,setInvalidRate]=useState(false)
  const [invalidYear,setInvalidYear]=useState(false)



  const validateInput = (inputTag) => {
    console.log(inputTag, typeof inputTag);
    const { name, value } = inputTag
    console.log(!!value.match(/^\d+(\.\d+)?$/));
    console.log(!!value.match(/^\d+(\.\d+)?$/));

    if (name == 'principle') {
      setPrinciple(value)
      if (!!value.match(/^\d+(\.\d+)?$/)){
        setInvalidPrinciple(false)
      }else {
      setInvalidPrinciple(true)
    }
  }else if(name=='Rate'){
    setRate(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        setInvalidRate(false)
      }else {
      setInvalidRate(true)
    }
  }else{
    setYear(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        setInvalidYear(false)
      }else {
      setInvalidYear(true)
    }

  }
}

const handleCalculate=(e)=>{
  e.preventDefault()
  console.log("Button clicked");
  if(principle&&Rate&&Year)
  {
    setInterest(principle*Rate*Year/100)
  }
  
}

const handleReset=()=>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setInvalidPrinciple(false)
  setInvalidRate(false)
  setInvalidYear(false)
}
  return (
    <>
      <div style={{ width: "150%", minHeight: "100vh"}} className='d-flex justify-content-center align-items-center border border-dark'>
        <div className='bg-light p-5 rounded ' style={{ width: "100%" }}>
          <h3>Simple interest</h3>
          <p>calculate your simple interest easly</p>
          <div className='bg-warning p-5 rounded text-center'>
            <h1>{interest}</h1>
            <div className='fw-bolder'>Total simple interest</div>
          </div>
          {/*principal amount */}
          <form className='mb-5 mt-5'>
            <div className='mb-3'>
              <TextField value={principle||""}name='principle' onChange={(e) => validateInput(e.target)} className="w-100" id="outlined-principle" label="principle-amount" variant="outlined" /></div>
          {invalidPrinciple&&<div className='text-danger fw-bolder mb-3'>
            Invalid Principle Amount
          </div>}
          </form>
          {/*Rate */}
          <form className='mb-5'>
            <div className='mb-3'>
              <TextField value={Rate||""}name='Rate' onChange={(e)=> validateInput(e.target)}className="w-100" id="outlined-rate" label="Rate-of-interest" variant="outlined" /></div>
              {/*INVALID RATE*/}
              {invalidRate&&<div className='text-danger fw-bolder mb-3'>
            Invalid Rate
          </div>}
          </form>
          {/* year */}
          <form className='mb-5'>
            <div className='mb-3'>
              <TextField value={Year||""}name='Year' onChange={(e)=> validateInput(e.target)} className="w-100" id="outlined-year" label="Year" variant="outlined" /></div>
              {/*INVALID YEAR*/}
              {invalidYear&&<div className='text-danger fw-bolder mb-3'>
            Invalid Year
          </div>}
            <Stack direction="row" spacing={2}>
              <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple||invalidRate||invalidYear}variant="contained" style={{ height: "100px", width: "50%" }} className='bg-dark'>calculate</Button>
              <Button onClick={handleReset} variant="outlined" style={{ height: "100px", width: "50%" }} className='border border-dark text-dark'>Reset</Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
