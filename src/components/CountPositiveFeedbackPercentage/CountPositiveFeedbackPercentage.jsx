import PropTypes from 'prop-types';
import { StatisticsInfo } from "../StatisticsList/StatisticsList.styled";

export const CountPositiveFeedbackPercentage = ({ precent }) => {
	return (
		<StatisticsInfo>
			<span>Positve feedback: </span>
			<span>{precent}%</span>
		</StatisticsInfo>
	)
}

CountPositiveFeedbackPercentage.propTypes = {
	precent: PropTypes.number.isRequired,
}