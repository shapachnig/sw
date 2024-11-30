import {useParams} from "react-router-dom";
import {characters, defaultHero} from "../utils/constants.ts";
import {ComponentType, useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "../components/ErrorPage.tsx";


export const withErrorPage = <T extends object>(Component: ComponentType<T>) => (props: T) => {
    const {heroId = defaultHero} = useParams();
    const {changeHero, changeHeader} = useContext(SWContext);

    useEffect(() => {
        if (characters[heroId]) {
            changeHero(heroId);
            changeHeader(true);
        } else {
            changeHeader(false);
        }

    }, [heroId])

    return characters[heroId] ? <Component  {...props} heroId={heroId}/> : <ErrorPage/>;
}