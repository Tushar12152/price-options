
import './App.css'
import LineChart from './components/lineChart/LineChart'
// import DaisyNav from './components/daisynav/daisyNav'
import Nav from './components/navBar/Nav'
import PriceOptions from './components/priceOption/PriceOptions'

function App() {
  
  return (
    <>
       
      {/* <DaisyNav></DaisyNav> */}
    <Nav></Nav>
       <LineChart></LineChart>
      <PriceOptions></PriceOptions>
     </>
  )
}

export default App
