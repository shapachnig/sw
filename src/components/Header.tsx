import Navigation from "./Navigation.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";

const Header = () => {
    const {hero, headerError} = useContext(SWContext);

    return (
        <header className="bg-grey-color rounded-t-2xl">
            <Navigation/>
            <h1 className="text-center py-6 text-3xl">{
               headerError ? characters[hero].name : 'Incorrect character'
            }</h1>
        </header>
    );
};

export default Header;