import React from 'react';
import { ToastContainer } from 'react-toastify';
import Main from './pages/Main';

const App = () => {
	return (
		<>
			<Main />
			<ToastContainer style={{ zIndex: 999999 }} position="top-center" />
		</>
	);
};

export default App;
