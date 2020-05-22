function ratings(input) {
    let numMovies = +input.shift();
    let movie = input.shift();
    let movieRate = +input.shift();
    let averageRate= 0;
    let maxRate = Number.MIN_SAFE_INTEGER;
    let minRate = Number.MAX_SAFE_INTEGER;
    let movieMaxRate = "";
    let movieMinRate = "";
    let counter = 0;
    for(let i = 1 ; i <= numMovies ; i++){
        if (movieRate > maxRate) {
            maxRate = movieRate;
            movieMaxRate = movie;
        }
        if (movieRate < minRate) {
            minRate = movieRate;
            movieMinRate = movie;
        }
        averageRate += movieRate;
        counter++;
        movie = input.shift();
        movieRate = +input.shift();
    }

    console.log(`${movieMaxRate} is with highest rating: ${maxRate.toFixed(1)}`)
    console.log(`${movieMinRate} is with lowest rating: ${minRate.toFixed(1)}`);
    console.log(`Average rating: ${(averageRate / counter).toFixed(1)}`);

}
 ratings([
    '5',   'A Star is Born',
    '7.8', 'Creed 2',
    '7.3', 'Mary Poppins',
    '7.2', 'Vice',
    '7.2', 'Captain Marvel',
    '7.1'
  ])