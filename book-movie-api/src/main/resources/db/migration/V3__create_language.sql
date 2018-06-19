CREATE TABLE LANGUAGE (
  id integer references MOVIE,
  language varchar(255) NOT NULL
);