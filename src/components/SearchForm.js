import React, { Component } from 'react';

const API_KEY = 'cd88a6d3';

export class SearchForm extends Component {
    state = { inputMovie: ''}

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const {inputMovie} = this.state
        fetch(`http://www.omdbapi.com/?s=${inputMovie}&apikey=${API_KEY}`)
            .then(res => res.json())
            .then(results => {
                const {Search = [], totalResults = '0'} = results
                console.log({Search,totalResults})
                this.props.onResults(Search)
            })
    }

    render () {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            onChange={this._handleChange}
                            type="text"
                            placeholder="Movie to search..."/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}