import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {defaultHero} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";

function App() {
    const [hero, setHero] = useState(defaultHero);
    const [headerError, setHeaderError] = useState(true);

    return (
        <>
            <SWContext.Provider value={{
                hero, changeHero: setHero,
                headerError, changeHeader: setHeaderError
            }}>
                <Header/>
                <Main/>
                <Footer/>
            </SWContext.Provider>
        </>
    )
}

export default App