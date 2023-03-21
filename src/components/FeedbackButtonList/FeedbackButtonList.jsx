// import { Component } from "react";
import { FeedbackButtonList, FeedbackItem, FeedbackButton } from "./FeedbackButtonList.styled";

export const FeedbackList = () => {
		return (
			<FeedbackButtonList>
				<FeedbackItem>
					<FeedbackButton>Good</FeedbackButton>
				</FeedbackItem>
				<FeedbackItem>
					<FeedbackButton>Neutral</FeedbackButton>
				</FeedbackItem>
				<FeedbackItem>
					<FeedbackButton>Bad</FeedbackButton>
				</FeedbackItem>
			</FeedbackButtonList>
		)
}