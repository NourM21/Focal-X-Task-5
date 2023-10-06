import './App.css'
import NewsPage from "./Pages/NewsPage"
import AboutPage from './Pages/AboutPage'
import HomePage from "./Pages/HomePage"
import Footer from "./Components/Footer/Footer"
import NavBar from './Components/NavBar/NavBar'
import Students from './Modules/Students/pages/Students'
import Teachers from './Modules/Teachers/pages/Teachers'
import Courses from './Modules/Courses/pages/Courses'
import { Route , Routes } from 'react-router-dom'
import { logo, links, enroll } from "./Data/HeaderData"
import { Provider } from 'react-redux'
import store from "./store/index"

function App() {
  return (
    <Provider store={store}>
      <>
        <NavBar logo={logo} links={links} enroll={enroll}/>
        <Routes>
          <Route exact path='' element = {<HomePage />}></Route>
          <Route exact path='/about' element = {<AboutPage />}></Route>
          <Route exact path='/news' element = {<NewsPage />}></Route>
          <Route exact path='/students' element = {<Students />}></Route>
          <Route exact path='/teachers' element = {<Teachers />}></Route>
          <Route exact path='/courses' element = {<Courses />}></Route>
        </Routes>
        <Footer/>
      </>
      </Provider>
  )
}

export default App
