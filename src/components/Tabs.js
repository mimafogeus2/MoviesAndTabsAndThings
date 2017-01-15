import TAB_TYPES from '../common/tabTypes.js'

import Tab from './Tab.js';
import TabsList from './TabsList.js';

import { browserHistory } from 'react-router';
import React, { Component } from 'react';

class Tabs extends Component {
	constructor() {
		super();

		this.state = {
			nextTabId: 1,
			tabs: []
		};
	}

	componentWillMount() {
		if (!this._getCurrentTabData()) {
			browserHistory.push('/');
		}
	}

	addTab = (info, tabType) => {
		const newTabs = [...this.state.tabs];
		const newTab = this._getNewTab(info, tabType);
		newTabs.push(newTab);
		this.setState({
			tabs: newTabs
		});
		browserHistory.push(`/${newTab.id}`);
	}

	_getCurrentTab() {
		const currentTabData = this._getCurrentTabData();

		if (!currentTabData) {
			return null;
		}

		return <Tab {...currentTabData} addTabFunction={this.addTab} />
	}

	_getCurrentTabData() {
		return this.state.tabs.find((x) => x.id === this.props.currentTabId);
	}

	_getNewTab(info, tabType) {
		return {
			data: info,
			id: this._getNewTabId(),
			type: tabType
		}
	}

	_getNewTabId() {
		const newTabId = this.state.nextTabId;

		this.setState({nextTabId: newTabId + 1});

		return newTabId;
	}

	_onCloseTab = (tabId) => {
		const tabIndex = this.state.tabs.findIndex((x) => x.id === tabId);

		const newTabs = [...this.state.tabs];
		newTabs.splice(tabIndex, 1);

		// If the currently displayed tab is closed, move to a neighboring tab.
		if (tabId === this.props.currentTabId) {
			const nextTab = this.state.tabs[tabIndex - 1] || this.state.tabs[tabIndex + 1];
			if (nextTab) {
				browserHistory.push(`/${nextTab.id}`);
			}
		}		

		this.setState({
			tabs: newTabs
		});
	}

	render() {
		return <div className="tabs">
			<TabsList tabs={this.state.tabs} currentTabId={this.props.currentTabId} onCloseTab={this._onCloseTab} />
			{this._getCurrentTab()}
		</div>;
	}
}

export default Tabs;