-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.5.9-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- president 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `president` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `president`;

-- 테이블 president.blike 구조 내보내기
CREATE TABLE IF NOT EXISTS `blike` (
  `id` int(11) NOT NULL,
  `board_id` int(11) DEFAULT NULL,
  `user_idx` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_blike_board` (`board_id`),
  KEY `FK_blike_user` (`user_idx`),
  CONSTRAINT `FK_blike_board` FOREIGN KEY (`board_id`) REFERENCES `board` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_blike_user` FOREIGN KEY (`user_idx`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 president.blike:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `blike` DISABLE KEYS */;
/*!40000 ALTER TABLE `blike` ENABLE KEYS */;

-- 테이블 president.board 구조 내보내기
CREATE TABLE IF NOT EXISTS `board` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `writer` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  `hit` int(11) DEFAULT 0,
  `like` int(11) DEFAULT 0,
  `del` tinyint(4) DEFAULT 0,
  `comment` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_board_user` (`writer`),
  CONSTRAINT `FK_board_user` FOREIGN KEY (`writer`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- 테이블 데이터 president.board:~5 rows (대략적) 내보내기
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` (`id`, `subject`, `content`, `writer`, `createdAt`, `updatedAt`, `hit`, `like`, `del`, `comment`) VALUES
	(1, '안녕하세요', '안녕하세요.', 2, '2021-07-30 00:00:00', '2021-07-30 00:00:00', 0, 0, 1, NULL),
	(2, '안녕하세요', '안녕하세요.', 2, '2021-07-30 00:00:00', '2021-07-30 00:00:00', 0, 0, 0, NULL),
	(3, '안녕하세요', '안녕하세요.', 2, '2021-07-30 00:00:00', '2021-07-30 00:00:00', 0, 0, 0, NULL),
	(4, '안녕하세요', '안녕하세요.', 2, '2021-07-30 17:04:47', '2021-07-30 17:04:47', 0, 0, 0, NULL),
	(5, '안녕하세요', '안녕하세요.', 2, '2021-07-30 17:04:48', '2021-07-30 17:04:48', 0, 0, 0, NULL),
	(6, '안녕하세요', '안녕하세요.', 2, '2021-07-30 17:04:49', '2021-07-30 17:04:49', 0, 0, 0, NULL);
/*!40000 ALTER TABLE `board` ENABLE KEYS */;

-- 테이블 president.clike 구조 내보내기
CREATE TABLE IF NOT EXISTS `clike` (
  `id` int(11) NOT NULL,
  `comment_id` int(11) DEFAULT NULL,
  `user_idx` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `FK_blike_user` (`user_idx`) USING BTREE,
  KEY `FK_blike_board` (`comment_id`) USING BTREE,
  CONSTRAINT `clike_comment` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `clike_user` FOREIGN KEY (`user_idx`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- 테이블 데이터 president.clike:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `clike` DISABLE KEYS */;
/*!40000 ALTER TABLE `clike` ENABLE KEYS */;

-- 테이블 president.comment 구조 내보내기
CREATE TABLE IF NOT EXISTS `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `board_id` int(11) NOT NULL DEFAULT 0,
  `writer` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  `master` int(11) DEFAULT 0,
  `like` int(11) DEFAULT 0,
  `del` int(11) DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `FK_board_user` (`writer`) USING BTREE,
  KEY `FK_comment_board` (`board_id`),
  CONSTRAINT `FK_comment_board` FOREIGN KEY (`board_id`) REFERENCES `board` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_comment_user` FOREIGN KEY (`writer`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- 테이블 데이터 president.comment:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;

-- 테이블 president.hit 구조 내보내기
CREATE TABLE IF NOT EXISTS `hit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `board_id` int(11) NOT NULL,
  `ip` varchar(50) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__board` (`board_id`),
  CONSTRAINT `FK__board` FOREIGN KEY (`board_id`) REFERENCES `board` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 president.hit:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `hit` DISABLE KEYS */;
/*!40000 ALTER TABLE `hit` ENABLE KEYS */;

-- 테이블 president.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL DEFAULT 0,
  `nickname` varchar(50) NOT NULL,
  `hometown` varchar(50) DEFAULT NULL,
  `residence` varchar(50) DEFAULT NULL,
  `age` tinyint(3) unsigned NOT NULL DEFAULT 0,
  `gender` tinyint(4) unsigned NOT NULL,
  `show` tinyint(4) unsigned NOT NULL DEFAULT 0,
  `status` tinyint(3) unsigned DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`userid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- 테이블 데이터 president.user:~2 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `userid`, `nickname`, `hometown`, `residence`, `age`, `gender`, `show`, `status`) VALUES
	(1, 11111111, '"김동철"', '"서울"', '"서울"', 28, 0, 17, 1),
	(2, 11111112, '"김동철"', '"서울"', '"서울"', 28, 0, 0, 0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
