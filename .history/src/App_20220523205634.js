import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {publicRoutes} from '~/routes/index'

function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    {publicRoutes.map((route,index)=>{
                        <Route path={route.path} eleme
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
