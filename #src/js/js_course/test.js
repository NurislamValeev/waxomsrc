'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (
      personalMovieDB.count == '' ||
      personalMovieDB.count === null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      const askGenres = prompt(`Ваш любимый жанр под номером ${i}`);
      if (askGenres != '' && askGenres != null) {
        personalMovieDB.genres[i - 1] = askGenres;
      } else {
        i--;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', '');
      const b = prompt('На сколько оцените его?', '');
      if (a != '' && a != null && a.length <= 50 && b != '' && b != null) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count === 0) {
      alert('Просмотрено 0 фильмов..вы шутите?');
    } else if ((personalMovieDB.count < 10) & (personalMovieDB.count !== 0)) {
      alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 30) {
      alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
      alert('Вы киноман');
    } else {
      alert('Произошла ошибка');
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat == false) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  },
};

// personalMovieDB.start();
// personalMovieDB.writeYourGenres();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();
