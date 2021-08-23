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
  `blike_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `board_id` int(11) unsigned NOT NULL,
  `user_id` int(11) unsigned NOT NULL,
  `islike` tinyint(4) NOT NULL,
  PRIMARY KEY (`blike_id`) USING BTREE,
  KEY `FK_blike_board` (`board_id`),
  KEY `FK_blike_user` (`user_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 president.board 구조 내보내기
CREATE TABLE IF NOT EXISTS `board` (
  `board_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `subject` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `writer` int(11) unsigned NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updated` tinyint(4) DEFAULT 0,
  `hit` int(11) unsigned DEFAULT 0,
  `liked` smallint(6) DEFAULT 0,
  `disliked` smallint(6) DEFAULT 0,
  `del` tinyint(4) DEFAULT 0,
  `comment_cnt` smallint(5) unsigned DEFAULT 0,
  PRIMARY KEY (`board_id`) USING BTREE,
  KEY `FK_board_user` (`writer`)
) ENGINE=InnoDB AUTO_INCREMENT=162 DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 president.clike 구조 내보내기
CREATE TABLE IF NOT EXISTS `clike` (
  `clike_id` int(11) unsigned NOT NULL,
  `comment_id` int(11) unsigned NOT NULL,
  `user_id` int(11) unsigned NOT NULL,
  `type` tinyint(4) NOT NULL,
  PRIMARY KEY (`clike_id`) USING BTREE,
  KEY `FK_blike_board` (`comment_id`) USING BTREE,
  KEY `FK_blike_user` (`user_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 president.comment 구조 내보내기
CREATE TABLE IF NOT EXISTS `comment` (
  `comment_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `writer` int(11) unsigned DEFAULT NULL,
  `board_id` int(11) unsigned NOT NULL DEFAULT 0,
  `createdAt` datetime DEFAULT current_timestamp(),
  `update` tinyint(4) DEFAULT 0,
  `root` int(11) unsigned NOT NULL DEFAULT 0,
  `target` int(11) unsigned DEFAULT 0,
  `liked` smallint(5) unsigned DEFAULT 0,
  `disliked` smallint(5) unsigned DEFAULT 0,
  `del` tinyint(4) DEFAULT 0,
  `reply_cnt` smallint(5) unsigned DEFAULT 0,
  PRIMARY KEY (`comment_id`) USING BTREE,
  KEY `FK_board_user` (`writer`) USING BTREE,
  KEY `FK_comment_board` (`board_id`)
) ENGINE=InnoDB AUTO_INCREMENT=367 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 president.hit 구조 내보내기
CREATE TABLE IF NOT EXISTS `hit` (
  `hit_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `board_id` int(11) unsigned NOT NULL,
  `ip` varchar(50) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`hit_id`) USING BTREE,
  KEY `FK__board` (`board_id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 president.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `kakao_code` int(11) unsigned NOT NULL DEFAULT 0,
  `nickname` varchar(50) NOT NULL,
  `hometown` tinyint(3) unsigned NOT NULL,
  `residence` tinytext NOT NULL,
  `birth` smallint(5) unsigned NOT NULL,
  `gender` tinyint(4) unsigned NOT NULL,
  `show` tinyint(4) unsigned NOT NULL DEFAULT 0,
  `state` tinyint(3) unsigned DEFAULT 0,
  `image` varchar(1000) DEFAULT NULL,
  `vote_19th` tinyint(3) unsigned DEFAULT NULL,
  `vote_pm` tinyint(3) unsigned DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE,
  UNIQUE KEY `email` (`kakao_code`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 트리거 president.blike_after_delete 구조 내보내기
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `blike_after_delete` AFTER DELETE ON `blike` FOR EACH ROW BEGIN
	DECLARE idtemp INT(11);
	DECLARE result TINYINT(4);
	SET idtemp = OLD.board_id;
	SET result = OLD.islike;
	
	IF result>0
		THEN BEGIN 
			UPDATE board SET liked=liked-1 WHERE board_id=idtemp;
		END; END IF;
	IF result=0
		THEN BEGIN 
			UPDATE board SET disliked=disliked-1 WHERE board_id=idtemp;
		END; END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- 트리거 president.blike_after_insert 구조 내보내기
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `blike_after_insert` AFTER INSERT ON `blike` FOR EACH ROW BEGIN
	DECLARE idtemp INT(11);
	DECLARE result TINYINT(4);
	SET idtemp = NEW.board_id;
	SET result = NEW.islike;
	
	IF result>0
		THEN BEGIN 
			UPDATE board SET liked=liked+1 WHERE board_id=idtemp;
		END; END IF;
	IF result=0
		THEN BEGIN 
			UPDATE board SET disliked=disliked+1 WHERE board_id=idtemp;
		END; END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- 트리거 president.blike_after_update 구조 내보내기
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `blike_after_update` AFTER UPDATE ON `blike` FOR EACH ROW BEGIN
	DECLARE idtemp INT(11);
	DECLARE result TINYINT(4);
	SET idtemp = NEW.board_id;
	SET result = NEW.islike;
	
	IF result>0
		THEN BEGIN 
			UPDATE board SET liked=liked+1 WHERE board_id=idtemp;
			UPDATE board SET disliked=disliked-1 WHERE board_id=idtemp;
		END; END IF;
	IF result=0
		THEN BEGIN 
			UPDATE board SET disliked=disliked+1 WHERE board_id=idtemp;
			UPDATE board SET liked=liked-1 WHERE board_id=idtemp;
		END; END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- 트리거 president.comment_after_insert 구조 내보내기
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `comment_after_insert` BEFORE INSERT ON `comment` FOR EACH ROW BEGIN
	DECLARE id_temp INT(11);
	DECLARE board_id_temp INT(11);
	SET id_temp = NEW.root;
	SET board_id_temp = NEW.board_id;
	
	UPDATE board SET comment_cnt=comment_cnt+1 WHERE board_id=board_id_temp;
	

	
	
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
