import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { Navbar } from '../components/ui/Navbar'
import { DCScreen } from '../components/dc/DCScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    {/* Definiendo rutas */}
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                    <Route exact path="/dc" component={ DCScreen } />
                    <Route exact path="/search" component={ SearchScreen } />


                    <Redirect to="marvel"/>
                </Switch>
            </div>
        </>
    )
}
