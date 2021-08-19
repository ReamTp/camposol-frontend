import { useEffect } from 'react';
import { useState, useRef } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from '@views/Home';
import { NavBarHome } from '@containers';
import { ContentPage } from '@components/HomeComponents';

export default function MainPageRouter() {
    const divRef = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState(divRef.current?.clientHeight);

    useEffect(() => {
        setHeight(divRef.current?.clientHeight)
    }, [])

    return (
        <>
            <NavBarHome reference={divRef} />
            <ContentPage height={height}>
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route path="*">
                        <Redirect to="/"/>
                    </Route>
                </Switch>
            </ContentPage>
        </>
    )
}
