import PropTypes from 'prop-types';
import { Component } from 'react';

import { CountTotalFeedback } from 'components/CountTotalFeedback/CountTotalFeedback';
import { StatisticsBoard, StatisticsInfo } from "./StatisticsList.styled";
import { CountPositiveFeedbackPercentage } from 'components/CountPositiveFeedbackPercentage/CountPositiveFeedbackPercentage';

export class StatiscticsList extends Component {

	state = {
		total: 0,
	}

	getTotalFeedback = () => {
		return this.setState({
			total: this.props.good + this.props.neutral + this.props.bad
		})
	}

	render() {
		const { good, neutral, bad } = this.props;
		const total = good + neutral + bad;
		const precent = Math.round(good * 100 / total);
		return (
			<StatisticsBoard>
				<StatisticsInfo>
					<span>Good: </span>
					<span>{good}</span>
				</StatisticsInfo>
				<StatisticsInfo>
					<span>Neutral: </span>
					<span>{neutral}</span>
				</StatisticsInfo>
				<StatisticsInfo>
					<span>Bad: </span>
					<span>{bad}</span>
				</StatisticsInfo>
				<CountTotalFeedback total={total} />
				<CountPositiveFeedbackPercentage precent={precent} />
			</StatisticsBoard>
		)
	}
}

StatiscticsList.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
}