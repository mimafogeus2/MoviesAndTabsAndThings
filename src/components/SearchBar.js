import omdb from 'omdb';	
import React, { Component } from 'react';

class SearchBar extends Component {
	constructor() {
		super();

		this.state = {
			isSearching: false,
			term: ''
		};
	}

	_onInputChange = (e) => this.setState({term: e.target.value});

	_onSearchSubmit = (e) => {
		e.preventDefault();
		this.setState({isSearching: true})

		omdb.search(this.state.term, (err, movies) => {
			if (err) {
				console.error(err);
			} else {
				this.props.onSearchResults(movies, this.state.term);
			}

			this.setState({isSearching: false})
		});
	}

	render() {
		return <form
			className="SearchBar__container"
			onSubmit={this._onSearchSubmit}
			>
			<label htmlFor="SearchBar__container__input" className="SearchBar__container__label">Search IMDB: </label>
			<input
				className="SearchBar__container__input"
				disabled={this.state.isSearching}
				id="SearchBar__container__input"
				className="SearchBar__container__input"
				onChange={this._onInputChange}
				ref="searchBarInput"
				value={this.state.term}
				/>
			<input type="submit" value="🔍" className="SearchBar__container__submit" disabled={this.state.isSearching} />
		</form>;
	}
}

export default SearchBar;