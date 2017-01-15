import TAB_TYPES from '../common/tabTypes.js';

import MovieDetailsTab from './MovieDetailsTab.js';
import SearchResultsTab from './SearchResultsTab.js';

import React, { Component } from 'react';

class Tab extends Component {
	_getTabContent(tabType) {
		if (tabType === TAB_TYPES.SEARCH_RESULTS) {
			return SearchResultsTab;
		} else if (tabType === TAB_TYPES.MOVIE_DETAILS) {
			return MovieDetailsTab;
		}

		throw new Error('Proper tabType should be provided');
	}

	render() {
		const TabContent = this._getTabContent(this.props.type);
		return <div className="tab">
			<TabContent
				key={this.props.id}
				data={this.props.data}
				addTabFunction={this.props.addTabFunction}
				/>
		</div>;
	}
}

export default Tab;