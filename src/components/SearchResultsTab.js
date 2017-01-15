import TAB_TYPES from '../common/tabTypes.js';

import cx from 'classnames';
import React, { Component } from 'react';

class SearchResultsTab extends Component {
	_getRecordRows = () => this.props.data.map((x) => this._getRecord(x));

	_getRecord = (x) => {
		const recordData = this.props.data.find((record) => x.imdb === record.imdb)
		const classes = cx({
			'tab__searchResults__list__result': true,
			'tab__searchResults__list__result--movie': x.type === 'movie',
			'tab__searchResults__list__result--series': x.type === 'series',
			'tab__searchResults__list__result--episode': x.type === 'episode'
		});

		return <li
			className={classes}
			key={x.imdb}
			onClick={() => this.props.addTabFunction(recordData, TAB_TYPES.MOVIE_DETAILS)}
			>
				{x.title}
		</li>
	}

	render() {
		return <div className="tab__searchResults">
			<h1 className="tab__searchResults__title">Search results: </h1>
			<ul className="tab__searchResults__list">
				{this._getRecordRows()}
			</ul>
		</div>
	}
}

export default SearchResultsTab;