import {useParams} from "react-router-dom";
import {characters, defaultHero} from "../utils/constants.ts";
import {ComponentType, useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "../components/ErrorPage.tsx";

export const withErrorPage = (Component: ComponentType) => (props: object) => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if (characters[heroId]) {
            changeHero(heroId);
        }

    }, [heroId])

    return characters[heroId] ? <Component {...props}/> : <ErrorPage/>;
}