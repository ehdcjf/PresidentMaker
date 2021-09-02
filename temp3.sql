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
  `target_id` int(11) unsigned NOT NULL,
  `user_id` int(11) unsigned NOT NULL,
  `isLike` tinyint(4) NOT NULL,
  PRIMARY KEY (`blike_id`) USING BTREE,
  KEY `FK_blike_user` (`user_id`) USING BTREE,
  KEY `FK_blike_board` (`target_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=214 DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=182 DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 president.clike 구조 내보내기
CREATE TABLE IF NOT EXISTS `clike` (
  `clike_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `target_id` int(11) unsigned NOT NULL,
  `user_id` int(11) unsigned NOT NULL,
  `isLike` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`clike_id`) USING BTREE,
  KEY `FK_blike_user` (`user_id`) USING BTREE,
  KEY `FK_blike_board` (`target_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=196 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 president.comment 구조 내보내기
CREATE TABLE IF NOT EXISTS `comment` (
  `comment_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `writer` int(11) unsigned DEFAULT NULL,
  `board_id` int(11) unsigned NOT NULL DEFAULT 0,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updated` tinyint(4) DEFAULT 0,
  `root` int(11) unsigned NOT NULL DEFAULT 0,
  `target` int(11) unsigned DEFAULT 0,
  `liked` smallint(6) DEFAULT 0,
  `disliked` smallint(6) DEFAULT 0,
  `del` tinyint(4) DEFAULT 0,
  `reply_cnt` smallint(5) unsigned DEFAULT 0,
  PRIMARY KEY (`comment_id`) USING BTREE,
  KEY `FK_board_user` (`writer`) USING BTREE,
  KEY `FK_comment_board` (`board_id`)
) ENGINE=InnoDB AUTO_INCREMENT=678 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 president.hit 구조 내보내기
CREATE TABLE IF NOT EXISTS `hit` (
  `hit_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `board_id` int(11) unsigned NOT NULL,
  `ip` varchar(50) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`hit_id`) USING BTREE,
  KEY `FK__board` (`board_id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 president.politician 구조 내보내기
CREATE TABLE IF NOT EXISTS `politician` (
  `politician_id` int(11) NOT NULL AUTO_INCREMENT,
  `politician_name` varchar(50) DEFAULT NULL,
  `politician_color` varchar(10) DEFAULT NULL,
  `politician_image` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`politician_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

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
  `show` smallint(5) unsigned NOT NULL DEFAULT 0,
  `state` tinyint(3) unsigned DEFAULT 0,
  `image` varchar(1000) DEFAULT NULL,
  `vote_19th` tinyint(3) unsigned DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE,
  UNIQUE KEY `email` (`kakao_code`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 president.vote_info 구조 내보내기
CREATE TABLE IF NOT EXISTS `vote_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vote_id` int(11) DEFAULT NULL,
  `politician_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 president.vote_result 구조 내보내기
CREATE TABLE IF NOT EXISTS `vote_result` (
  `vote_result_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `vote_id` int(11) DEFAULT NULL,
  `politician_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`vote_result_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 president.vote_title 구조 내보내기
CREATE TABLE IF NOT EXISTS `vote_title` (
  `vote_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `content` varchar(50) DEFAULT NULL,
  `createdAt` date DEFAULT date_format(current_timestamp(),'%Y-%m-%d'),
  PRIMARY KEY (`vote_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 트리거 president.blike_after_delete 구조 내보내기
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `blike_after_delete` AFTER DELETE ON `blike` FOR EACH ROW BEGIN
	DECLARE idtemp INT(11);
	DECLARE result TINYINT(4);
	SET idtemp = OLD.target_id;
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
	SET idtemp = NEW.target_id;
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
	SET idtemp = NEW.target_id;
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

-- 트리거 president.clike_after_delete 구조 내보내기
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `clike_after_delete` AFTER DELETE ON `clike` FOR EACH ROW BEGIN
	DECLARE idtemp INT(11);
	DECLARE result TINYINT(4);
	SET idtemp = OLD.target_id;
	SET result = OLD.islike;
	
	IF result>0
		THEN BEGIN 
			UPDATE comment SET liked=liked-1 WHERE comment_id=idtemp;
		END; END IF;
	IF result=0
		THEN BEGIN 
			UPDATE comment SET disliked=disliked-1 WHERE comment_id=idtemp;
		END; END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- 트리거 president.clike_after_insert 구조 내보내기
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `clike_after_insert` BEFORE INSERT ON `clike` FOR EACH ROW BEGIN
	DECLARE idtemp INT(11);
	DECLARE result TINYINT(4);
	SET idtemp = NEW.target_id;
	SET result = NEW.islike;
	
	IF result>0
		THEN BEGIN 
			UPDATE comment SET liked=liked+1 WHERE comment_id=idtemp;
		END; END IF;
	IF result=0
		THEN BEGIN 
			UPDATE comment SET disliked=disliked+1 WHERE comment_id=idtemp;
		END; END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- 트리거 president.clike_after_update 구조 내보내기
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `clike_after_update` AFTER UPDATE ON `clike` FOR EACH ROW BEGIN
	DECLARE idtemp INT(11);
	DECLARE result TINYINT(4);
	SET idtemp = NEW.target_id;
	SET result = NEW.islike;
	
	IF result>0
		THEN BEGIN 
			UPDATE comment SET liked=liked+1 WHERE comment_id=idtemp;
			UPDATE comment SET disliked=disliked-1 WHERE comment_id=idtemp;
		END; END IF;
	IF result=0
		THEN BEGIN 
			UPDATE comment SET disliked=disliked+1 WHERE comment_id=idtemp;
			UPDATE comment SET liked=liked-1 WHERE comment_id=idtemp;
		END; END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- 트리거 president.comment_after_insert 구조 내보내기
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `comment_after_insert` AFTER INSERT ON `comment` FOR EACH ROW BEGIN
	DECLARE idtemp INT(11);
	SET idtemp = NEW.board_id;


	UPDATE board SET comment_cnt=comment_cnt+1 WHERE board_id=idtemp;
	
	


END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
