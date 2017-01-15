import TabsListItem from './TabsListItem.js'

import React, { Component } from 'react';

class TabsList extends Component {
	_getTabListItems() {
		return this.props.tabs.map((x) => <TabsListItem
			{...x}
			key={x.id}
			isSelected={x.id === this.props.currentTabId}
			onClick={() => this.props.onTabClick(x.id)}
			onCloseTab={this.props.onCloseTab}
			/>
		);
	}

	render() {
		return <ul className="tabsList">
			{this._getTabListItems()}
		</ul>;
	}
}

export default TabsList;