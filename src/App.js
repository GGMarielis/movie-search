import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm.js';
import { MoviesList } from './components/MoviesList'
import { Detail } from './pages/Detail';

class App extends Component {
  state = { usedSearch: false, results: [] }

  _handleResults = (results) => {
    this.setState({usedSearch: true, results})
  }

  _rederResults () {
    return this.state.results.length === 0
    ? <p>Sorry! :( Results not found</p>
    : <MoviesList movies={this.state.results} ></MoviesList>
  }

  render () {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className='SearchForm-wraper'>
          <SearchForm onResults={this._handleResults}></SearchForm>
        </div>
        {this.state.usedSearch
        ? this._rederResults()
        : <small>Use the form to search a movie</small>
        }
      </div>
    )
  }
}

export default App;
