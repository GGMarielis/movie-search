import React, { Component } from 'react';
import PropTypes from 'prop-types';

const API_KEY = 'cd88a6d3';

export class Detail extends Component {
    state = { movie: {} }

    static propTypes = {
        id: PropTypes.string
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
        const { id } = this.props
        this._fetchMovie({id})
    }

    _goBack () {
        window.history.back()
    }

    render () {
        const {Title, Actors, Plot, Poster, Metascore} = this.state.movie
        return (
            <div>
                <button onClick={this._goBack}>Volver</button>
                <h1>{Title}</h1>
                <img alt={Title} src={Poster}></img>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}