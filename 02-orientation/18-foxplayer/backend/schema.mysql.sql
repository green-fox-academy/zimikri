CREATE SCHEMA IF NOT EXISTS `foxplayer` DEFAULT CHARACTER SET utf8 ;

USE `foxplayer`;

DROP TABLE IF EXISTS `playlists`;
CREATE TABLE `playlists` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NULL,
  `system` TINYINT(1) DEFAULT 0, 
  PRIMARY KEY (`id`),
  UNIQUE INDEX (`title` ASC) VISIBLE
);

DROP TABLE IF EXISTS `tracks`;
CREATE TABLE `tracks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL DEFAULT '',
  `artist` VARCHAR(100) NOT NULL DEFAULT '',
  `duration` INT NOT NULL DEFAULT 0, 
  `path` VARCHAR(140) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `playlist_tracks`;
CREATE TABLE `playlist_tracks` (
  `playlist_id` INT NOT NULL DEFAULT 0,
  `track_id` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`playlist_id`, `track_id`),
  FOREIGN KEY (playlist_id)
        REFERENCES playlists(id)
        ON DELETE CASCADE,
  FOREIGN KEY (track_id)
        REFERENCES tracks(id)
        ON DELETE CASCADE
);