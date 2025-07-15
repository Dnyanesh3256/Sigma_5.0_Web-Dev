// import "./Product"
import Product from './Product'

function App() {
  let options = ["i", " am", " batman"];
  let options2 = ["i", " am", " batman"];
  return (
    <>
      <Product title="apna" features={options} price={50000}/>
      <Product  title="college" features={options2} price={20000} />
    </>
  )
}

export default App
