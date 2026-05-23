import Chai from "./chai"
import SayHello from "./SayHello"

function MyApp(){
  return(
    <div>hello world</div>
  )
}
function App() {
const username = "chai aur code"

  return (
    <>
    <Chai />
    <h1>Chai aur React {username}</h1> 
     {/* evaluated expression {} final outcome*/}
    <p>test Para</p>
    <SayHello />
    <MyApp />
    </>
  )
}

export default App
