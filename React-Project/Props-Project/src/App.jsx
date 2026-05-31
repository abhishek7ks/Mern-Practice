import Card from '../components/Card'
import jobOpenings from './Data'


const App = () => {
  return (
    <div className='parent'>

      {jobOpenings.map((jobsopen) => (<Card key={jobsopen.id} data={jobsopen} />))}


    </div>
  )
}

export default App
