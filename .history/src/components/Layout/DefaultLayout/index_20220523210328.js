import Header from './Header'
import Sidebar from './Sidebar'

function DefaultLayout({children}) {
    return (  
        <div>
            <Header></Header>
        </div>
    );
}

export default DefaultLayout;