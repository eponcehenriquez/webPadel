-- CREATE DATABASE padel IF NOT EXISTS;

use padel;

CREATE TABLE admin(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(200) NOT NULL,
    salt VARCHAR(200) NOT NULL,
    hash VARCHAR(200) NOT NULL,
    admin TINYINT NOT NULL,

    PRIMARY KEY (id)
);

describe admin;