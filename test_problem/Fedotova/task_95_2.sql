CREATE DATABASE store;

CREATE TABLE ProductType
(
    id INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Producer
(
    id INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    year TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Product
(
    id INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    price NUMBER(7,2) NOT NULL,
    discount INTEGER NOT NULL,
    producer INTEGER NOT NULL,
    product_type INTEGER NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(product_type) REFERENCES ProductType(id),
    FOREIGN KEY(producer) REFERENCES Producer(id)
);

INSERT INTO ProductType
    (id, name)
VALUES
    (1, 'Молочные продукты'),
    (2, 'Колбасы'),
    (3, 'Крупы'),
    (4, 'Кондитерские изделия'),
    (5, 'Гигиена'),
    (6, 'Бытовая химия'),
    (7, 'Хлебобулочные изделия'),
    (8, 'Рыба'),
    (9, 'Овощи'),
    (10, 'Фрукты'),
    (11, 'Мясо');

INSERT INTO ProducerType
    (id, name, year)
VALUES
    (1, 'МясновЪ', '2000-01-01 00:00:00.000Z'),
    (2, 'Чернышев', '1974-01-01 00:00:00.000Z'),
    (3, 'От Палыча', '1992-01-01 00:00:00.000Z'),
    (4, 'Китайский рыбак', '2004-01-01 00:00:00.000Z'),
    (5, 'Axe', '1999-01-01 00:00:00.000Z'),
    (6, 'Fa', '2010-01-01 00:00:00.000Z'),
    (7, 'Увелка', '1964-01-01 00:00:00.000Z'),
    (8, 'Tide', '1880-01-01 00:00:00.000Z'),
    (9, 'Коломенское', '1949-01-01 00:00:00.000Z'),
    (10, 'Простоквашино', '2015-01-01 00:00:00.000Z');

INSERT INTO Product
    (id, name, price, discount, producer, product_type)
VALUES
    (1, 'Молоко 3,2%', 98.00, 9, 10, 1),
    (2, 'Сардина Дальневосточная', 115, 0, 4, 8),
    (3, 'Сырок глазированый', 12.00, 22, 10, 1),
    (4, 'Axe Dark Mate', 180.00, 0, 5, 5),
    (5, 'Батон нарезной', 35.00, 0, 9, 7),
    (6, 'Халва', 80.00, 0, 4, 3);

