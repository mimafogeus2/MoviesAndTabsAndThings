import omdb from 'omdb';
import React, { Component } from 'react';

class MovieDetailsTab extends Component {
	constructor() {
		super();

		this.state = {};
	}

	_getPoster() {
		if (this.state.movieData.poster === null) {
			return null;
		}

		return <div>
			<img src={this.state.movieData.poster} />
		</div>;
	}

	_getSecondaryTitleString() {
		let years;

		if (typeof this.state.movieData.year === 'object') {
			const fromYear = this.state.movieData.year.from || '';
			const toYear = this.state.movieData.year.to || '';

			years = `${fromYear}-${toYear}`;
		} else {
			years = this.state.movieData.year;
		}

		if (this.state.movieData.type || this.state.movieData.year) {
			const stringData = [this.state.movieData.type, years];
			return `(${stringData.join(', ')})`;	
		}
		
		return '';
	}

	_getGenres() {
		if (this.state.movieData.genres && this.state.movieData.genres.length) {
			const genreTitle = this.state.movieData.genres.length === 1 ? 'Genre' : 'Genres';
			return <p>{genreTitle}: <strong>{this.state.movieData.genres.join(', ')}</strong></p>;
		}

		return null;
	}

	componentDidMount() {
		omdb.get({imdb: this.props.data.imdb}, [], (err, movie) => {
			if (err) {
				console.error(err);
			} else {
				this.setState({movieData: movie});
			}
		})	
	}

	render() {
		if (!this.state.movieData) {
			return null;
		}

		const imdbLink = `//www.imdb.com/title/${this.props.data.imdb}`
		const poster = this._getPoster();

		return <div className="tab__movieData">
			<a href={imdbLink} target="_blank" className="tab__movieData__title">
				<h1>{this.state.movieData.title} {this._getSecondaryTitleString()}</h1>
			</a>
			<div className="tab__movieData__dataContainer">
				<div className="tab__movieData__dataContainer__textualData">
					{this._getGenres()}
					{this.state.movieData.director ? <p>Directed by <strong>{this.state.movieData.director}</strong>.</p> : null}
					{this.state.movieData.plot ? <p>{this.state.movieData.plot}</p> : null}
				</div>
				{this._getPoster()}
			</div>
		</div>;
	}
}

export default MovieDetailsTab;