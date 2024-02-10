import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
    return (
		<BrowserRouter>
			<Header/>
			<Main/>
			<Footer/>
		</BrowserRouter>
	)
}

export default App;
