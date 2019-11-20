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
    (2, 'Останкино', '1974-01-01 00:00:00.000Z'),
    (3, 'От Палыча', '1992-01-01 00:00:00.000Z'),
    (4, 'Японский самурай', '2004-01-01 00:00:00.000Z'),
    (5, 'Old Spice', '1999-01-01 00:00:00.000Z'),
    (6, 'Nivea', '2010-01-01 00:00:00.000Z'),
    (7, 'Статус Голоден', '1964-01-01 00:00:00.000Z'),
    (8, 'Владивосточный улов', '1880-01-01 00:00:00.000Z'),
    (9, 'Владимирский пастух', '1949-01-01 00:00:00.000Z'),
    (10, 'От Меня', '2015-01-01 00:00:00.000Z');

INSERT INTO Product
    (id, name, price, discount, producer, product_type)
VALUES
    (1, 'Колбаса молочная', 240.00, 9, 2, 2),
    (2, 'Торт Полено', 180.00, 0, 3, 4),
    (3, 'Торт Наполеон', 260.00, 22, 3, 4),
    (4, 'Булочка с маком', 60.50, 0, 10, 7),
    (5, 'Рис', 80.00, 20, 4, 3),
    (6, 'Камбала дальневосточная', 1012.00, 10, 8, 8);

