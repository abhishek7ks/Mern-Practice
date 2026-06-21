
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Counter from './Counter.jsx'
import User from './User.jsx'
import Todo from './Todo.jsx'

function App() {

  return (
    <>

      <Navbar/>    
      <Footer/>
      <Card name = "Abhishek" role = "developer" /> 
      <Card name = "Ayushi" role = "designer" /> 
      <Card name = "Abhi" role = "scientist" /> 
      <Counter></Counter>
      <User/>
      <Todo></Todo>
      

    </>
  )
}

export default App
