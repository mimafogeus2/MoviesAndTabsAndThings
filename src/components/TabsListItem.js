import cx from 'classnames'
import { Link } from 'react-router';
import React, { Component } from 'react';

class TabsListItem extends Component {
	render() {
		const classes = cx({
			'tabsList__item': true,
			'tabsList__item--selected': this.props.isSelected
		});
		const linkTo = `/${this.props.id}`;

		return <li className={classes}>
			<Link to={linkTo}>{this.props.id}</Link>
			<div className="tabsList__item__closeButton" onClick={this._onCloseTab} />
		</li>;
	}

	_onCloseTab = () => this.props.onCloseTab(this.props.id);
}

export default TabsListItem;