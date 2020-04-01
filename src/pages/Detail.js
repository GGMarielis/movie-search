import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonBackToHome } from '../components/ButtonBackToHome';

const API_KEY = 'cd88a6d3';

export class Detail extends Component {
    state = { movie: {} }

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    _fetchMovie ({id}) {
        fetch(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
            .then(res => res.json())
            .then(movie => {
               console.log({ movie })
               this.setState({ movie })
            })
    }

    componentDidMount () {
        console.log(this.props)
        const { id } = this.props.match.params
        this._fetchMovie({id})
    }

    render () {
        const {Title, Actors, Plot, Poster, Metascore} = this.state.movie
        return (
            <div>
                <ButtonBackToHome></ButtonBackToHome>
                <h1>{Title}</h1>
                <img alt={Title} src={Poster}></img>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}