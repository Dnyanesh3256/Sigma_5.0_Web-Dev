// import "./Product"
import Product from './Product'

function App() {
  let options = ["i", " am", " batman"];
  return (
    <>
      <Product title="apna" features={options}/>
    </>
  )
}

export default App
