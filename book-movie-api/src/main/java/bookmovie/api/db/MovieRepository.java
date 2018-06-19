package bookmovie.api.db;

import bookmovie.api.model.Movie;
import bookmovie.api.type.MovieListingType;
import org.jooq.DSLContext;
import org.jooq.impl.DSL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class MovieRepository {

    private final DSLContext dsl;

    @Autowired
    public MovieRepository(DSLContext dsl) {
        this.dsl = dsl;
    }

    public List<Movie> getMovies(MovieListingType movieListingType) {
        return dsl.select()
                .from(DSL.table("MOVIE"))
                .where(DSL.field("MOVIE.LISTING_TYPE").eq(movieListingType.toString()))
                .fetchInto(Movie.class);
    }

    public void addMovie(Movie movie) {
        dsl.insertInto(DSL.table("MOVIE"), DSL.field("NAME"), DSL.field("EXPERIENCES"), DSL.field("LISTING_TYPE"))
                .values(movie.getName(), movie.getExperiences(), movie.getListingType().toString())
                .execute();

    }

    public Movie getMovie(String name) {
        return dsl.select(DSL.field("NAME"), DSL.field("EXPERIENCES"), DSL.field("LISTING_TYPE"))
                .from(DSL.table("MOVIE"))
                .where(DSL.field("MOVIE.NAME").eq(name))
                .fetchOne()
                .into(Movie.class);
    }

    public void addLanguageToMovie(int id, String language) {
        dsl.insertInto(DSL.table("LANGUAGE"), DSL.field("ID"), DSL.field("LANGUAGE"))
                .values(id, language).execute();
    }

    public List<Movie> getMovieForALanguage(String language) {
        return dsl.select(DSL.field("MOVIE.id"), DSL.field("NAME"), DSL.field("EXPERIENCES"), DSL.field("LISTING_TYPE"))
                .from(DSL.table("MOVIE").join("Language").on(DSL.field("movie.id").eq(DSL.field("language.id"))))
                .where(DSL.field("LANGUAGE.LANGUAGE").eq(language))
                .fetchInto(Movie.class);
    }

    public List<Movie> fetchMoviesInAllLanguages() {
        return dsl.select(DSL.field("MOVIE.id"), DSL.field("NAME"), DSL.field("EXPERIENCES"), DSL.field("LISTING_TYPE"))
                .from(DSL.table("MOVIE").join("Language").on(DSL.field("movie.id").eq(DSL.field("language.id"))))
                .fetchInto(Movie.class);
    }
}
