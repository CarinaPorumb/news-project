const API_KEY = "d8fbb869-fb2f-4aed-b258-a9c6560ad85d";

export function getNewsCategoriesEndpoint(category, pageNumber = 1, pageSize = 6) {
	const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page-size=${pageSize}&page=${pageNumber}`;

	return `https://content.guardianapis.com/search${queryParams}`;
}

export function getNewsDetailsEndpoint(newsId) {
	const queryParams = `?api-key=${API_KEY}&show-fields=all`;

	return `https://content.guardianapis.com/${newsId}${queryParams}`;
}
