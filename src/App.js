import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetup'
import FavoritesPage from './pages/Favorites'
import MainNavigation from './components/layout/MainNavigation'

function App() {
    return (
        <BrowserRouter>
            <MainNavigation/>
            <Routes>
                <Route path='/' element={<AllMeetupsPage/>}/>
                <Route path='/new' element={<NewMeetupPage/>}/>
                <Route path='/favorites' element={<FavoritesPage/>}/>
                <Route path="*" element={<p>Error 404</p>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
