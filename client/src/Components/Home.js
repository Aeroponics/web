import React from 'react'
import {Jumbotron} from 'reactstrap'
import Login from './Login'

const Home = () => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Internet of Plants</h1>
                <p className="lead">Open-source aeroponics project</p>
            </Jumbotron>
            <Login />
        </div>
    )
}

export default Home