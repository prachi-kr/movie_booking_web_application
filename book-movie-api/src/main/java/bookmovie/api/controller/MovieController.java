package bookmovie.api.controller;

import bookmovie.api.model.Movie;
import bookmovie.api.service.MovieService;
import bookmovie.api.type.MovieListingType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MovieController {
    private MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @RequestMapping(value = "/init",
            method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public void init() {
        movieService.addMovie(new Movie("Dunkirk", "good", MovieListingType.NOW_SHOWING));
    }

    @RequestMapping(value = "/movies",
            method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Movie> getMovies(@RequestParam("listingType") String listingType) {
        return movieService.getMovies(MovieListingType.valueOf(listingType.toUpperCase()));
    }

    @RequestMapping(value = "/movies/now-showing/{language}",
            method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)

    public List<Movie> fetchMoviesInLanguages(@PathVariable("language") String language) {
        return movieService.getMoviesByLanguage(language);
    }


//    public void fetchMoviesInAllLanguages() {
//    }
}
