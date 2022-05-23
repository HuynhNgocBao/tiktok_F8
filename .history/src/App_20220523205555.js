import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {publicRoutes} from ''

function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/following' element={<Following/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
