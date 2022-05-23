import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {publicRoutes} from '~/routes/index'

function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    {publicRoutes.map((route,index)=>{
                        <Route key={index} path={route.path} element
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
