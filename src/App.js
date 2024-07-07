import React from 'react';
import Pages from "./pages/Pages";
import Header from "./components/header/Header";

const App = () => {
    return (
        <div className='App'>
            <Header/>
            <Pages/>
        </div>
    );
};

export default App;