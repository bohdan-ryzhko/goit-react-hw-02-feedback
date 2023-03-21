import PropTypes from 'prop-types';

import { StatisticsBoard, StatisticsInfo } from "./StatisticsList.styled";

export const StatiscticsList = ({ good, neutral, bad }) => {
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
		</StatisticsBoard>
	)
}

StatiscticsList.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
}