import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DCScreen = () => {
    return (
        <div className="py-5">
            <h1>DC Screen</h1>
            <hr/>
            <HeroList publisher="DC Comics"/>
        </div>
    )
}
