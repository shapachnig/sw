import {useParams} from "react-router-dom";
import {characters, defaultHero} from "../utils/constants.ts";
import {ComponentType, useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "../components/ErrorPage.tsx";

interface Props {
    heroId: string;
}

export const withErrorPage = (Component: ComponentType<Props>) => (props: object) => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if (characters[heroId]) {
            changeHero(heroId);
        }

    }, [heroId])

    return characters[heroId] ? <Component heroId={heroId} {...props}/> : <ErrorPage/>;
}