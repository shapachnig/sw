import {createContext} from "react";
import {SWContextValue} from "./types";
import {defaultHero} from "./constants.ts";

export const SWContext = createContext<SWContextValue>({
    hero: defaultHero,
    changeHero: (hero: string) => console.log(hero),
    headerError: true,
    changeHeader: (headerError: boolean) => console.log(headerError)
});