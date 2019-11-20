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
    (1, 'Chad', 'Kroeger', '1974-11-15 00:00:00.000Z'),
    (2, 'Stephen', 'Percy', '1956-03-12 00:00:00.000Z'),
    (3, 'Ian', 'Gillan', '1945-08-19 00:00:00.000Z'),
    (4, 'Daniel', 'Reynolds', '1987-07-14 00:00:00.000Z'),
    (5, 'Billie', 'Armstrong', '1972-02-17 00:00:00.000Z');

INSERT INTO Genre
    (id, name)
VALUES
    (1, 'Альтенративный рок'),
    (2, 'Метал'),
    (3, 'Блюз'),
    (4, 'Инди'),
    (5, 'Панк');

INSERT INTO MusicGroup
    (id, name)
VALUES
    (1, 'Nickelback'),
    (2, 'Iron Maiden'),
    (3, 'Deep Purple'),
    (4, 'Imagine Dragins'),
    (5, 'Green Day');

INSERT INTO Album
    (id, name, year, music_group)
VALUES
    (1, 'Silver Side Up', '2001-09-11 00:00:00.000Z', 1),
    (2, 'Iron Maiden', '1980-04-14  00:00:00.000Z', 2),
    (3, 'Perfect Strangers', '1984-11-02 00:00:00.000Z', 3),
    (4, 'American Idiot', '2004-09-21 00:00:00.000Z', 5),
    (5, 'Night Visions', '2019-05-17 00:00:00.000Z', 5);

INSERT INTO Song
    (id, name, duration, album, genre)
VALUES
    (1, 'How You Remind Me', 223, 1, 1),
    (2, 'Prowler', 235, 2, 3),
    (3, 'Perfect Strangers', 323, 3, 2),
    (4, 'Radioactive', 188, 4, 4),
    (5, 'Boulevard of Broken Dreams', 232, 5, 5);

INSERT INTO SongAuthor
    (id, author, song)
VALUES
    (1, 1, 1),
    (2, 2, 2),
    (3, 3, 3),
    (4, 4, 4),
    (5, 5, 5);
