USE bookinfo;

DROP TABLE IF EXISTS;

CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `prefix` VARCHAR(30) NOT NULL DEFAULT '',
  `first_name` VARCHAR(50) NOT NULL DEFAULT '',
  `last_name` VARCHAR(50) NOT NULL DEFAULT '',
  `address` VARCHAR(75) NOT NULL DEFAULT '',
  `height` DECIMAL(4,1) NOT NULL DEFAULT 0.0,
  `bitcoin_address` VARCHAR(34) NOT NULL DEFAULT '',
  `color_preference` VARCHAR(7) NOT NULL DEFAULT '#cccccc',
  PRIMARY KEY (`id`));
