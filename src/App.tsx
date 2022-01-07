import { Route, Routes } from 'react-router-dom';
import './App.scss';
import FrontEnd from './pages/FrontEnd';
import MainPage from './pages/MainPage';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path = '/frontCategories/' element = {<FrontEnd/>}/>
      </Routes>
    </>
  )
}

export default App

