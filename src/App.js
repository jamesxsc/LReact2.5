import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetup'
import FavoritesPage from './pages/Favorites'
import Layout from "./components/layout/Layout"
import {FavoritesContextProvider} from "./store/favorites-context";

function App() {
    return (
        <FavoritesContextProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<AllMeetupsPage/>}/>
                        <Route path='/new' element={<NewMeetupPage/>}/>
                        <Route path='/favorites' element={<FavoritesPage/>}/>
                        <Route path="*" element={<p>Error 404</p>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </FavoritesContextProvider>
    );
}

export default App;
