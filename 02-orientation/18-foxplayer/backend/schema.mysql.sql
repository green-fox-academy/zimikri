CREATE SCHEMA IF NOT EXISTS `foxplayer` DEFAULT CHARACTER SET utf8 ;

USE `foxplayer`;

DROP TABLE IF EXISTS `playlists`;
CREATE TABLE `foxplayer`.`playlists` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NULL,
  `system` TINYINT(1) DEFAULT 0, 
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE
);

DROP TABLE IF EXISTS `tracks`;
CREATE TABLE `foxplayer`.`tracks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL DEFAULT '',
  `artist` VARCHAR(100) NOT NULL DEFAULT '',
  `duration` INT NOT NULL DEFAULT 0, 
  `path` VARCHAR(140) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
);