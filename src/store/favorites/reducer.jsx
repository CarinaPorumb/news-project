export const initialState = {
    news: [],
};

export function favoritesReducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_FAVORITES': {

            const foundNews = state.news.find((news) => {
                return news.id === action.payload.id;
            });

            if (foundNews) {
                return state;
            } else {
                return {
                    news: [...state.news, action.payload],
                };
            }
        }
        case 'REMOVE_FROM_FAVORITES': {
            const filteredNews = state.news.filter((news) => {
                return news.id !== action.payload;
            });

            return {
                news: filteredNews,
            };
        }
        default: {
            return state;
        }
    }

}