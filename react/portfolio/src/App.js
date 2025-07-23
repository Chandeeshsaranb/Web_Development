import Homepage from './Homepage.jsx'
import About from './About.jsx'
import { Route, Routes } from 'react-router-dom';
import Services from './Services.jsx';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  )
}

export default App