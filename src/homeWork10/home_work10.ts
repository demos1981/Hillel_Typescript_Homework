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

interface IMovie {
  title: string;
  year: number;
  rating: number;
  awards: string[];
}

interface IMovieCategory {
  title: string;
  movies: IMovie[];
}

interface IMovieList {
  movies: IMovie[];
  filters: IMovieFilter[];

  applySearchValue(searchValue: string): void;
  applyFiltersValue(filters: IMovieFilter[]): void;
}

interface IMovieFilter {
  apply(data: IMovie[]): IMovie[];
}

interface MatchFilter extends IMovieFilter {
  filterField: string;
}

interface RangeFilter extends IMovieFilter {
  filterField: string;
  filterTo: string;
}

interface SearchFilterByValues extends IMovieFilter {
  values: string[];
}

class ConcreteMovieList implements IMovieList {
  movies: IMovie[];
  filters: IMovieFilter[] = [];

  constructor(movies: IMovie[]) {
    this.movies = movies;
  }

  applySearchValue(searchValue: string): void {}

  applyFiltersValue(filters: IMovieFilter[]): void {
    this.filters = filters;
  }
}

const movies: IMovie[] = [
  { title: 'Movie1', year: 2020, rating: 8, awards: ['Best Picture', 'best mini photo'] },
  { title: 'Movie2', year: 2019, rating: 7, awards: [] },
];

const actionMoviesCategory: IMovieCategory = {
  title: 'Action Movies',
  movies: movies,
};

const movieList: IMovieList = new ConcreteMovieList(movies);
const matchFilter: MatchFilter = { filterField: 'Movie1', apply: data => data };
const rangeFilter: RangeFilter = { filterField: 'year', filterTo: '2023', apply: data => data };

movieList.applyFiltersValue([matchFilter, rangeFilter]);


