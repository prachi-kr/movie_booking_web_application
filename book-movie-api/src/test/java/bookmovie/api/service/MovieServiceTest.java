package bookmovie.api.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import bookmovie.api.db.MovieRepository;
import bookmovie.api.type.MovieListingType;

import static org.mockito.Mockito.verify;

@RunWith(MockitoJUnitRunner.class)
public class MovieServiceTest {

    @Mock
    MovieRepository movieRepository;


    @Test
    public void shouldCallgetNowShowingMoviesOnMovieRepo() {
        MovieService movieService = new MovieService(movieRepository);

        movieService.getMovies(MovieListingType.NOW_SHOWING);

        verify(movieRepository).getMovies(MovieListingType.NOW_SHOWING);

    }

    @Test
    public void shouldCallgetUpcomingMoviesOnMovieRepo() {
        MovieService movieService = new MovieService(movieRepository);

        movieService.getMovies(MovieListingType.UPCOMING);

        verify(movieRepository).getMovies(MovieListingType.UPCOMING);

    }

    @Test
    public void shouldReturnMoviesInHindi() {
        MovieService movieService = new MovieService(movieRepository);

        movieService.getMoviesByLanguage("Hindi");

        verify(movieRepository).getMovieForALanguage("Hindi");

    }

    @Test
    public void shouldReturnMoviesInAllLanguages() {
        MovieService movieService = new MovieService(movieRepository);

        movieService.fetchMoviesInAllLanguages();

        verify(movieRepository).fetchMoviesInAllLanguages();

    }

}