package bookmovie.api.service;

import bookmovie.api.db.MovieRepository;
import bookmovie.api.model.Movie;
import bookmovie.api.type.MovieListingType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    private MovieRepository movieRepo;

    @Autowired
    public MovieService(MovieRepository movieRepo) {
        this.movieRepo = movieRepo;
    }

    public void addMovie(Movie movie) {
    }

    public List<Movie> getMovies(MovieListingType movieListingType) {
        return movieRepo.getMovies(movieListingType);
    }


    public List<Movie> getMoviesByLanguage(String language) {
        return movieRepo.getMovieForALanguage(language);
    }

    List<Movie> fetchMoviesInAllLanguages() {
        return movieRepo.fetchMoviesInAllLanguages();
    }
}
