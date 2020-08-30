CREATE SCHEMA IF NOT EXISTS `calorietable` DEFAULT CHARACTER SET utf8 ;

USE `calorietable`;

CREATE TABLE `foods` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `amount` INT UNSIGNED NOT NULL DEFAULT 0,
  `calorie` INT UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`));