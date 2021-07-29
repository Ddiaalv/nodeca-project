USE nodeca
GO

CREATE TABLE `monstruo` (
	`id_monstruo` INT NOT NULL PRIMARY KEY,
	`orden_menu` INT NOT NULL,
	`nombre` VARCHAR(50) UNIQUE NOT NULL,
	`ruta` VARCHAR(50),
	`especie` VARCHAR(50),
	`tipo` VARCHAR(10),
	`rango` VARCHAR(50),
	`caracteristicas` VARCHAR(500),
	`notas` VARCHAR(500),
	`tamano_min` DECIMAL(10,2) NOT NULL DEFAULT 0,
	`tamano_max` DECIMAL(10,2) NOT NULL DEFAULT 0,
	`fuego` INT NOT NULL DEFAULT 0,
	`agua` INT NOT NULL DEFAULT 0,
	`rayo` INT NOT NULL DEFAULT 0,
	`hielo` INT NOT NULL DEFAULT 0,
	`draco` INT NOT NULL DEFAULT 0,
	`veneno` INT NOT NULL DEFAULT 0,
	`sueno` INT NOT NULL DEFAULT 0,
	`paralisis` INT NOT NULL DEFAULT 0,
	`nitro` INT NOT NULL DEFAULT 0,
	`aturdimiento` INT NOT NULL DEFAULT 0,
	`elemento01` VARCHAR(20),
	`elemento01ruta` VARCHAR(20),
	`elemento02` VARCHAR(20),
	`elemento02ruta` VARCHAR(20),
	`resistencia01` VARCHAR(35),
	`resistencia01ruta` VARCHAR(20),
	`resistencia02` VARCHAR(35),
	`resistencia02ruta` VARCHAR(20),
	`resistencia03` VARCHAR(35),
	`resistencia03ruta` VARCHAR(20),
	`estado01` VARCHAR(20),
	`estado01ruta` VARCHAR(20),
	`estado02` VARCHAR(20),
	`estado02ruta` VARCHAR(20),
	`estado03` VARCHAR(20),
	`estado03ruta` VARCHAR(20)
);
go

CREATE TABLE `habitat` (
	`id_habitat` INT NOT NULL PRIMARY KEY,
	`habitat` VARCHAR(50) NOT NULL,
	`ruta` VARCHAR(50) NOT NULL
);
go

CREATE TABLE `monstruo_habitat` (
	`id_monstruo_habitat` INT NOT NULL PRIMARY KEY,
	`id_monstruo` INT NOT NULL,
	`id_habitat` INT NOT NULL,
	CONSTRAINT fk_monstruo_habitat FOREIGN KEY(id_monstruo) REFERENCES monstruo(id_monstruo),
	CONSTRAINT fk_habitat_monstruo FOREIGN KEY(id_habitat) REFERENCES habitat(id_habitat)
);
go


LOAD DATA LOCAL INFILE '/var/lib/csv/monstruo.csv'
INTO TABLE monstruo
CHARACTER SET utf8
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES (`id_monstruo`, `orden_menu`, `nombre`, `ruta`, `especie`, `tipo`, `rango`, `caracteristicas`, `notas`, `tamano_min`, `tamano_max`, `fuego`, `agua`, `rayo`, `hielo`, `draco`, `veneno`, `sueno`, `paralisis`, `nitro`, `aturdimiento`, `elemento01`, `elemento01ruta`, `elemento02`, `elemento02ruta`, `resistencia01`, `resistencia01ruta`, `resistencia02`, `resistencia02ruta`, `resistencia03`, `resistencia03ruta`, `estado01`, `estado01ruta`, `estado02`, `estado02ruta`, `estado03`, `estado03ruta`);
GO

LOAD DATA LOCAL INFILE '/var/lib/csv/habitat.csv'
INTO TABLE habitat
CHARACTER SET utf8
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES (`id_habitat`, `habitat`, `ruta`);
GO

LOAD DATA LOCAL INFILE '/var/lib/csv/monstruo_habitat.csv'
INTO TABLE monstruo_habitat
CHARACTER SET utf8
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES (`id_monstruo_habitat`, `id_monstruo`, `id_habitat`);
GO
