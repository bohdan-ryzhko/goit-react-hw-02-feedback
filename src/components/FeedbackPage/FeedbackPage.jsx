import { Component } from "react";
import PropTypes from 'prop-types';

import { StatiscticsList } from "components/StatisticsList/StatisticsList";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Notification } from "components/Notification/Notification";

import {
	Container,
	FeedbackPageInner,
	FeedbackTitle,
} from "./FeedbackPage.styled";

export class FeedbackPage extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	}

	onLeaveFeedback = (option) => () => {
		this.setState(prevState => ({
				[option]: prevState[option] + 1,
			}))
	}

	render() {
		const { good, neutral, bad } = this.state;
		const options = Object.keys(this.state);
		const total = good + neutral + bad;
		const positivePercentage = Math.round(good * 100 / total);

		return (
			<Container>
				<FeedbackPageInner>
					<FeedbackTitle>Please leave feedback</FeedbackTitle>
					<FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
				</FeedbackPageInner>
				{total === 0
					? <>
						<Notification message="There is no feedback" />
					</>
					:
					(<>
						<FeedbackPageInner>
							<FeedbackTitle>Statisctics</FeedbackTitle>
							<StatiscticsList
								good={good}
								neutral={neutral}
								bad={bad}
								total={total}
								positivePercentage={positivePercentage}
							/>
						</FeedbackPageInner>
					</>)
				}
			</Container>
		)
	}
}

FeedbackPage.propTypes = {
	state: PropTypes.exact({
		good: PropTypes.number.isRequired,
		neutral: PropTypes.number.isRequired,
		bad: PropTypes.number.isRequired
	}),
}