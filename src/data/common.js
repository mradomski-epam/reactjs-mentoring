export const GENRE_LIST = [
    '',
    'documentary',
    'comedy',
    'thriller',
    'crime',
    'action',
    'drama',
];

export const SORT_BY_OPTIONS = [
    {
        label: 'Release Date', value: 'release_date',
    },
    {
        label: 'Title', value: 'title',
    }
];

export const MOVIES = [
    {
        id: 1,
        poster_path: 'https://www.movieposters.com/cdn/shop/products/d3b27b0547871234b683c5e7b9549677_25c5cfd2-9653-4e3b-b8bc-fc2b9b7ed414_480x.progressive.jpg?v=1573585337',
        title: 'Scarface',
        release_date: '01-01-1983',
        genres: [
            GENRE_LIST[5],
            GENRE_LIST[6],
        ],
        vote_average: 8.3,
        runtime: 170,
        overview: 'In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.',
    },
    {
        id: 2,
        poster_path: 'https://www.movieposters.com/cdn/shop/files/Casino.mpw.102809_480x.progressive.jpg?v=1707421876',
        title: 'Casino',
        release_date: '01-01-1995',
        genres: [
            GENRE_LIST[5],
            GENRE_LIST[4],
        ],
        vote_average: 8.2,
        runtime: 178,
        overview: 'In Las Vegas, two best friends - a casino executive and a mafia enforcer - compete for a gambling empire and a fast-living, fast-loving socialite.',
    }
];

export const filterEmptyParams = (params) => {
    if (typeof(params) !== "object") {
        return null;
    }
    Object.keys(params).forEach((key) => {
        if (!params[key]) delete params[key];
    });
    return params;
}
