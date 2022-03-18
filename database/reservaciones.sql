-- CREATE DATABASE padel IF NOT EXISTS;

use padel;

CREATE TABLE reservaciones(
    id INT NOT NULL AUTO_INCREMENT,
    cancha_id INT NOT NULL,
    hora VARCHAR(200) NOT NULL,
    dia INT NOT NULL,
    mes INT NOT NULL,
    año INT NOT NULL,
    nombre VARCHAR(200) NOT NULL,
    cel VARCHAR(200) NOT NULL,
    buy_order VARCHAR(255) NOT NULL,
    session_id VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (cancha_id) 
        REFERENCES canchas(id)
        ON DELETE CASCADE
);

describe reservaciones;