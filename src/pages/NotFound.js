import React, { Component } from 'react'
import { ButtonBackToHome } from '../components/ButtonBackToHome';


export class NotFound extends Component {

    render() {
        return (
            <div>
                <h1 className='title'>404!</h1>
                <p className='subtitle'>Not found page</p>
                <ButtonBackToHome></ButtonBackToHome>
            </div>
        )
    }
}