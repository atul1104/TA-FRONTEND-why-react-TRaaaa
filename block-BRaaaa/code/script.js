let input = document.querySelector('.movie-name');
let rootElm = document.querySelector('.movies-list');

let allMovies = [
  // {
  //   name: 'Titanic',
  //   watched: true,
  // },
  // {
  //   name: 'Inception',
  //   watched: false,
  // },
];

input.addEventListener('keyup', (event) => {
  //adding a movie
  if (event.keyCode === 13) {
    console.log(event.target.value);
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = '';
    createMovieUI();
  }
});

function deleteMovie(event) {
  //   event.target.parentElement.remove();
  let id = event.target.dataset.id;
  allMovies.splice(id, 1);
  createMovieUI();
}

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createMovieUI();
}

function createMovieUI() {
  rootElm.innerHTML = '';
  allMovies.forEach((movie, i) => {
    let li = document.createElement('li');
    // let input = document.createElement('input');
    // input.type = 'checkbox';
    // input.id = i;
    // input.checked = movie.watched;

    // input.addEventListener('change', handleChange);

    let label = document.createElement('label');
    label.for = i;
    label.innerText = movie.name;
    let span = document.createElement('span');
    span.innerText = 'x';
    span.setAttribute('data-id', i);

    span.addEventListener('click', deleteMovie);
    let hr = document.createElement('hr');
    let button = document.createElement('button');
    button.id = i;
    button.innerText = movie.watched ? 'Watched' : 'To Watch';
    button.addEventListener('click', handleChange);

    li.append(label, span, button, hr);
    rootElm.append(li);
  });
}

createMovieUI();
