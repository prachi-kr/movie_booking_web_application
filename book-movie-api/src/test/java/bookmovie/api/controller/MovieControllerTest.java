package bookmovie.api.controller;

import bookmovie.api.service.MovieService;
import bookmovie.api.type.MovieListingType;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import static org.mockito.Mockito.verify;

@RunWith(MockitoJUnitRunner.class)
public class MovieControllerTest {
    @Mock
    private MovieService movieService;

    @Test
    public void shouldCallgetNowShowingMoviesOnMovieRepo() {
        MovieController movieController = new MovieController(movieService);

        movieController.getMovies("now_showing");

        verify(movieService).getMovies(MovieListingType.NOW_SHOWING);

    }

    @Test
    public void shouldCallgetUpcomingMoviesOnMovieRepo() {
        MovieController movieController = new MovieController(movieService);

        movieController.getMovies("upcoming");

        verify(movieService).getMovies(MovieListingType.UPCOMING);
    }

    @Test
    public void shouldReturnMoviesForALanguage() {
        MovieController movieController = new MovieController(movieService);

        movieController.fetchMoviesInLanguages("Hindi");

        verify(movieService).getMoviesByLanguage("Hindi");
    }

//    @Test
//    public void shouldReturnMoviesForAllLanguages(){
//        MovieController movieController = new MovieController(movieService);
//
//        movieController.fetchMoviesInAllLanguages();
//
//        verify(movieService).fetchMoviesInAllLanguages();
//    }

}