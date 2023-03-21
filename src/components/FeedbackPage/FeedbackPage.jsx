import PropTypes from 'prop-types';

import { StatiscticsList } from "components/StatisticsList/StatisticsList";
import { Component } from "react";

import { FeedbackList } from "../FeedbackButtonList/FeedbackButtonList";

import {
	Container,
	FeedbackPageInner,
	FeedbackTitle,
} from "./FeedbackPage.styled";

export class FeedbackPage extends Component {

	state = {
		good: 3,
		neutral: 1,
		bad: 0
	}

	render() {
		const { good, neutral, bad } = this.state;
		return (
			<Container>
				<FeedbackPageInner>
					<FeedbackTitle>Please leave feedback</FeedbackTitle>
					<FeedbackList />
				</FeedbackPageInner>
				<FeedbackPageInner>
					<FeedbackTitle>Statisctics</FeedbackTitle>
					<StatiscticsList good={good} neutral={neutral} bad={bad} />
				</FeedbackPageInner>
			</Container>
		)
	}
}

FeedbackPage.propTypes = {
	state: PropTypes.exact({
		good: PropTypes.number.isRequired,
		neutral: PropTypes.number.isRequired,
		bad: PropTypes.number.isRequired
	})
}