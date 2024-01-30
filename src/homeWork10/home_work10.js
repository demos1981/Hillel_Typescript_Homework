//У вас є дві сутності - список фільмів і список категорій фільмів.
var ConcreteMovieList = /** @class */ (function () {
    function ConcreteMovieList(movies) {
        this.filters = [];
        this.movies = movies;
    }
    ConcreteMovieList.prototype.applySearchValue = function (searchValue) { };
    ConcreteMovieList.prototype.applyFiltersValue = function (filters) {
        this.filters = filters;
    };
    return ConcreteMovieList;
}());
var movies = [
    { title: 'Movie1', year: 2020, rating: 8, awards: ['Best Picture', 'best mini photo'] },
    { title: 'Movie2', year: 2019, rating: 7, awards: [] },
];
var actionMoviesCategory = {
    title: 'Action Movies',
    movies: movies,
};
var movieList = new ConcreteMovieList(movies);
var matchFilter = { filterField: 'Movie1', apply: function (data) { return data; } };
var rangeFilter = { filterField: 'year', filterTo: '2023', apply: function (data) { return data; } };
movieList.applyFiltersValue([matchFilter, rangeFilter]);
