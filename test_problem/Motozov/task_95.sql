CREATE DATABASE music;

CREATE TABLE Author
(
    id INTEGER NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birthday TIMESTAMP NOT NULL,
    PRIMARY KEY(id),
);

CREATE TABLE Genre
(
    id INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY(id),
);

CREATE TABLE MusicGroup
(
    id INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY(id),
);

CREATE TABLE Album
(
    id INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    year TIMESTAMP NOT NULL,
    music_group INTEGER NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(music_group) REFERENCES MusicGroup(id)
);

CREATE TABLE Song
(
    id INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    duration INTEGER NOT NULL,
    album INTEGER NOT NULL,
    genre INTEGER NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(genre) REFERENCES Genre(id),
    FOREIGN KEY(album) REFERENCES Album(id)
);

CREATE TABLE SongAuthor
(
    id INTEGER NOT NULL,
    author INTEGER NOT NULL,
    song INTEGER NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(author) REFERENCES Author(id),
    FOREIGN KEY(song) REFERENCES Song(id),
);

INSERT INTO Author
    (id, first_name, last_name, birthday)
VALUES
    (1, 'James', 'Hetfield', '1963-08-03 00:00:00.000Z'),
    (2, 'Сергей', 'Табачников', '1988-04-26 00:00:00.000Z'),
    (3, 'Freddie', 'Mercury', '1941-09-05 00:00:00.000Z'),
    (4, 'Илья', 'Кнабенгоф', '1972-08-02 00:00:00.000Z'),
    (5, 'Till', 'Lindemann', '1963-01-04 00:00:00.000Z');

INSERT INTO Genre
    (id, name)
VALUES
    (1, 'Треш-метал'),
    (2, 'Хардрок'),
    (3, 'Индастриал рок'),
    (4, 'Русский рок'),
    (5, 'Инструментальный рок');

INSERT INTO MusicGroup
    (id, name)
VALUES
    (1, 'Metallica'),
    (2, 'nobody.one'),
    (3, 'Queen'),
    (4, 'Пилот'),
    (5, 'Rammstein');

INSERT INTO Album
    (id, name, year, music_group)
VALUES
    (1, 'Metallica', '1991-08-12 00:00:00.000Z', 1),
    (2, 'NO CARE', '2016-11-05  00:00:00.000Z', 2),
    (3, 'Sheer Heart Attack', '1974-11-08 00:00:00.000Z', 3),
    (4, 'Рыба, крот и свинья', '2004-04-20 00:00:00.000Z', 4),
    (5, 'Rammstein', '2019-05-17 00:00:00.000Z', 5);

INSERT INTO Song
    (id, name, duration, album, genre)
VALUES
    (1, 'Nothing Else Matters', 360, 1, 1),
    (2, 'Elastic', 174, 2, 3),
    (3, 'Killer Queen', 180, 3, 2),
    (4, 'Шнурок', 240, 4, 4),
    (5, 'TATTOO', 251, 5, 5);

INSERT INTO SongAuthor
    (id, author, song)
VALUES
    (1, 1, 1),
    (2, 2, 2),
    (3, 3, 3),
    (4, 4, 4),
    (5, 5, 5);
