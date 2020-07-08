SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `bookinfo`
--

CREATE SCHEMA IF NOT EXISTS `bookinfo` DEFAULT CHARACTER SET utf8;

USE `bookinfo`;

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE IF NOT EXISTS `author` (
 `aut_id` varchar(8) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `aut_name` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `country` varchar(25) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `home_city` varchar(25) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 PRIMARY KEY (`aut_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Table structure for table `book_mast`
--

CREATE TABLE IF NOT EXISTS `book_mast` (
 `book_id` varchar(15) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `book_name` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `isbn_no` varchar(15) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `cate_id` varchar(8) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `aut_id` varchar(8) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `pub_id` varchar(8) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `dt_of_pub` date NOT NULL DEFAULT '0000-00-00',
 `pub_lang` varchar(15) COLLATE latin1_general_ci DEFAULT NULL,
 `no_page` decimal(5,0) NOT NULL DEFAULT '0',
 `book_price` decimal(8,2) NOT NULL DEFAULT '0.00',
 PRIMARY KEY (`book_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Table structure for table `category`
--

CREATE TABLE IF NOT EXISTS `category` (
 `cate_id` varchar(8) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `cate_descrip` varchar(25) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 PRIMARY KEY (`cate_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Table structure for table `despatch`
--

CREATE TABLE IF NOT EXISTS `despatch` (
 `desp_no` varchar(8) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `desp_data` date NOT NULL DEFAULT '0000-00-00',
 `client_city` varchar(15) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `client_country` varchar(15) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `book_id` varchar(8) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `aut_id` varchar(8) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `no_of_copy` int(5) NOT NULL DEFAULT '0',
 `sell_price` decimal(12,2) NOT NULL DEFAULT '0.00',
 `disc_per` decimal(5,2) NOT NULL DEFAULT '0.00',
 `total_cost` decimal(12,2) NOT NULL DEFAULT '0.00',
 PRIMARY KEY (`desp_no`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Table structure for table `newpublisher`
--

CREATE TABLE IF NOT EXISTS `newpublisher` (
 `pub_id` varchar(8) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `pub_name` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `pub_city` varchar(25) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `country` varchar(25) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `country_office` varchar(25) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `no_of_branch` int(3) DEFAULT '0',
 `estd` date DEFAULT '0000-00-00'
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Table structure for table `order`
--

CREATE TABLE IF NOT EXISTS `order` (
 `ord_no` varchar(15) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `ord_date` date NOT NULL DEFAULT '0000-00-00',
 `book_id` varchar(15) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `book_name` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `cate_id` varchar(8) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `pub_lang` varchar(15) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `ord_qty` int(5) NOT NULL DEFAULT '0',
 PRIMARY KEY (`ord_no`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Table structure for table `publisher`
--

CREATE TABLE IF NOT EXISTS `publisher` (
 `pub_id` varchar(8) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `pub_name` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `pub_city` varchar(25) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `country` varchar(25) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `country_office` varchar(25) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `no_of_branch` int(3) NOT NULL DEFAULT '0',
 `estd` date NOT NULL DEFAULT '0000-00-00',
 PRIMARY KEY (`pub_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Table structure for table `purchase`
--

CREATE TABLE IF NOT EXISTS `purchase` (
 `invoice_no` varchar(12) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `invoice_dt` date NOT NULL DEFAULT '0000-00-00',
 `ord_no` varchar(25) COLLATE latin1_general_ci NOT NULL,
 `ord_date` date NOT NULL DEFAULT '0000-00-00',
 `receive_dt` date NOT NULL DEFAULT '0000-00-00',
 `book_id` varchar(8) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `book_name` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `pub_lang` varchar(8) COLLATE latin1_general_ci DEFAULT NULL,
 `cate_id` varchar(8) COLLATE latin1_general_ci DEFAULT NULL,
 `receive_qty` int(5) NOT NULL DEFAULT '0',
 `purch_price` decimal(12,2) NOT NULL DEFAULT '0.00',
 `total_cost` decimal(12,2) NOT NULL DEFAULT '0.00',
 PRIMARY KEY (`invoice_no`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
