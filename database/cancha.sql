-- CREATE DATABASE padel IF NOT EXISTS;

use padel;

CREATE TABLE canchas(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(200) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

describe canchas;