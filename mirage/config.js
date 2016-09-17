export default function() {

this.namespace = '/api';
  this.get('/movies', function() {
    return {
      data: [{
        type: 'movies',
        id: 'movie001',
        attributes: {
          name: 'Harry Potter and the Deathly Hallows: Part 2',
          clasification: 'Best',
          category: 'Adventure',
          image: 'https://yts.ag/assets/images/movies/Harry_Potter_and_the_Deathly_Hallows_Part_2_2011/medium-cover.jpg'
        }
      }, {
        type: 'movies',
        id: 'movie002',
        attributes: {
          name: 'X-Men: Apocalypse',
          clasification: 'Chimba',
          category: 'Action',
          image: 'https://yts.ag/assets/images/movies/x_men_apocalypse_2016/medium-cover.jpg'
        }
      }, {
        type: 'movies',
        id: 'movie003',
        attributes: {
          name: 'Teenage Mutant Ninja Turtles: Out of the Shadows',
          clasification: 'Ahí mas o menos',
          category: 'Ninja',
          image: 'https://yts.ag/assets/images/movies/teenage_mutant_ninja_turtles_out_of_the_shadows_2016/medium-cover.jpg'
        }
      }]
    };
  });

  // Find and return the provided spy from our spy list above
  this.get('/movies/:id', function (db, request) {
    return { data: movies.find((movie) => request.params.id === movies.id) };
  });

}
