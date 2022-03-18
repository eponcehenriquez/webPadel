-- CREATE DATABASE padel IF NOT EXISTS;

use padel;

CREATE TABLE horas(
    id INT NOT NULL AUTO_INCREMENT,
    hora VARCHAR(200) NOT NULL,
    precio VARCHAR(200) NOT NULL,
    PRIMARY KEY (id)
);

describe horas;