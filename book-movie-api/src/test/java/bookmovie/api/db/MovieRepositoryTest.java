package bookmovie.api.db;

import bookmovie.api.model.Movie;
import bookmovie.api.type.MovieListingType;
import org.hamcrest.MatcherAssert;
import org.hamcrest.Matchers;
import org.jooq.DSLContext;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import spicinemas.BookMovieApplication;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

@Transactional
@RunWith(SpringRunner.class)
@SpringBootTest(classes = BookMovieApplication.class)
@ActiveProfiles("test")
public class MovieRepositoryTest {
    @Autowired
    private MovieRepository movieRepo;
    @Autowired
    DSLContext dslContext;

    @Test
    public void shouldInsertMovieInDb() {
        String movieName = "Infinity War";
        Movie expectedMovie = new Movie(movieName, "okay", MovieListingType.NOW_SHOWING);
        movieRepo.addMovie(expectedMovie);
        Movie actualMovie = movieRepo.getMovie(movieName);
        assertThat(actualMovie.getName(), is(expectedMovie.getName()));
        assertThat(actualMovie.getExperiences(), is(expectedMovie.getExperiences()));
        MatcherAssert.assertThat(actualMovie.getListingType(), Matchers.is(expectedMovie.getListingType()));
    }

    @Test
    public void shouldAddLanguageToAMovieInDb() {
        movieRepo.addLanguageToMovie(1, "Marathi");
        List<Movie> movies = movieRepo.fetchMoviesInAllLanguages();
        assertEquals(15, movies.size());
    }

    @Test
    public void fetchMoviesInHindi() {
        movieRepo.addLanguageToMovie(1, "Hindi");

        List<Movie> movies = movieRepo.getMovieForALanguage("Hindi");

        assertEquals(5, movies.size());
    }

    @Test
    public void shouldReturnNowShowingMoviesList() {
        List<Movie> movies = movieRepo.getMovies(MovieListingType.NOW_SHOWING);

        assertNotEquals(null, movies);
    }

    @Test
    public void shouldReturnNowShowingMovies() {
        List<Movie> movies = movieRepo.getMovies(MovieListingType.NOW_SHOWING);

        assertEquals(9, movies.size());
    }


    @Test
    public void shouldReturnUpcomingMovies() {
        List<Movie> movies = movieRepo.getMovies(MovieListingType.UPCOMING);

        assertEquals(7, movies.size());
    }


}