//У вас є дві сутності - список фільмів і список категорій фільмів.

//Кожен фільм містить поля: назва, рік випуску, рейтинг, список нагород.

//Категорія містить поля: назва і фільми.

//У кожного списку є пошук за ім'ям (це, по суті, фільтрація), у списку фільмів є додаткова фільтрація за роком випуску, рейтингом і нагородами.

//У нас визначено три типи фільтрів:

//Фільтр відповідності має поле filter
//Фільтр діапазону має поле filter і filterTo
//Фільтр пошуку за значеннями має поле values
//Кожен список містить стан його фільтрів, який може бути змінений тільки методом applySearchValue або applyFiltersValue (за наявності додаткових фільтрів)

//Вам необхідно подумати про поділ вашого коду на різні сутності, інтерфеси і типи, щоб зробити ваше рішення типобезпечним. Реалізація всіх методів не є необхідною - це за бажанням.

interface Movie {
  title: string;
  year: number;
  rating: number;
  awards: string[];
}

interface MovieCategory {
  title: string;
  movies: Movie[];
}

interface MovieList {
  movies: Movie[];
  filters: MovieFilter[];

  applySearchValue(searchValue: string): void;
  applyFiltersValue(filters: MovieFilter[]): void;
}

interface MovieFilter {
  apply(data: Movie[]): Movie[];
}

interface MatchFilter extends MovieFilter {
  filterField: string;
}

interface RangeFilter extends MovieFilter {
  filterField: string;
  filterTo: string;
}

interface SearchFilterByValues extends MovieFilter {
  values: string[];
}

class ConcreteMovieList implements MovieList {
  movies: Movie[];
  filters: MovieFilter[] = [];

  constructor(movies: Movie[]) {
    this.movies = movies;
  }

  applySearchValue(searchValue: string): void {}

  applyFiltersValue(filters: MovieFilter[]): void {
    this.filters = filters;
  }
}

const movies: Movie[] = [
  { title: 'Movie1', year: 2020, rating: 8, awards: ['Best Picture', 'best mini photo'] },
  { title: 'Movie2', year: 2019, rating: 7, awards: [] },
];

const actionMoviesCategory: MovieCategory = {
  title: 'Action Movies',
  movies: movies,
};

const movieList: MovieList = new ConcreteMovieList(movies);
const matchFilter: MatchFilter = { filterField: 'Movie1', apply: data => data };
const rangeFilter: RangeFilter = { filterField: 'year', filterTo: '2023', apply: data => data };

movieList.applyFiltersValue([matchFilter, rangeFilter]);


