export function getNewsList(apiResponse) {
	if (!apiResponse || !apiResponse.response) {
		return [];
	}

	const rawNewsList = apiResponse.response.results;
	return rawNewsList.map((news) => {
		return {
			id: news.id,
			thumbnail: news.fields.thumbnail,
			title: news.fields.headline,
			description: news.fields.trailText,
		};
	});
}

export function getNewsDetails(apiResponse) {
	if (!apiResponse || !apiResponse.response) {
		return {};
	}

	const rawNewsDetails = apiResponse.response.content;
	return {
		date: rawNewsDetails.webPublicationDate,
		title: rawNewsDetails.fields.headline,
		description: rawNewsDetails.fields.trailText,
		image: rawNewsDetails.fields.main,
		content: rawNewsDetails.fields.body,
		author: rawNewsDetails.fields.byline,
		thumbnail: rawNewsDetails.fields.thumbnail,
	};
}