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
) ENGINE=InnoDB AUTO_INCREMENT=212 DEFAULT CHARSET=utf8;

-- 테이블 데이터 president.blike:~3 rows (대략적) 내보내기
/*!40000 ALTER TABLE `blike` DISABLE KEYS */;
INSERT INTO `blike` (`blike_id`, `target_id`, `user_id`, `isLike`) VALUES
	(206, 174, 36, 1),
	(210, 177, 36, 0),
	(211, 180, 36, 1);
/*!40000 ALTER TABLE `blike` ENABLE KEYS */;

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

-- 테이블 데이터 president.board:~2 rows (대략적) 내보내기
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` (`board_id`, `subject`, `content`, `writer`, `createdAt`, `updated`, `hit`, `liked`, `disliked`, `del`, `comment_cnt`) VALUES
	(180, '111', '<p>111</p><p class="ql-align-center"><img src="http://localhost:3002/1629886441036.png"></p>', 36, '2021-08-25 19:14:08', 0, 1, 1, 0, 1, 16),
	(181, '123', '<p class="ql-align-center">123<img src="http://localhost:3002/1629891652809.png"></p>', 36, '2021-08-25 20:01:42', 1, 1, 0, 0, 0, 0);
/*!40000 ALTER TABLE `board` ENABLE KEYS */;

-- 테이블 president.clike 구조 내보내기
CREATE TABLE IF NOT EXISTS `clike` (
  `clike_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `target_id` int(11) unsigned NOT NULL,
  `user_id` int(11) unsigned NOT NULL,
  `isLike` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`clike_id`) USING BTREE,
  KEY `FK_blike_user` (`user_id`) USING BTREE,
  KEY `FK_blike_board` (`target_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=181 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- 테이블 데이터 president.clike:~15 rows (대략적) 내보내기
/*!40000 ALTER TABLE `clike` DISABLE KEYS */;
INSERT INTO `clike` (`clike_id`, `target_id`, `user_id`, `isLike`) VALUES
	(101, 564, 36, 1),
	(102, 563, 36, 1),
	(104, 560, 36, 1),
	(168, 565, 36, 1),
	(170, 579, 36, 1),
	(171, 580, 36, 1),
	(172, 581, 36, 0),
	(173, 583, 36, 1),
	(174, 585, 36, 1),
	(175, 610, 36, 1),
	(176, 609, 36, 1),
	(177, 608, 36, 1),
	(178, 607, 36, 1),
	(179, 605, 36, 1),
	(180, 604, 36, 1);
/*!40000 ALTER TABLE `clike` ENABLE KEYS */;

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
) ENGINE=InnoDB AUTO_INCREMENT=611 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- 테이블 데이터 president.comment:~178 rows (대략적) 내보내기
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` (`comment_id`, `content`, `writer`, `board_id`, `createdAt`, `updated`, `root`, `target`, `liked`, `disliked`, `del`, `reply_cnt`) VALUES
	(367, 'sdfsdfsdfsdf', 36, 163, '2021-08-24 09:49:28', 0, 0, 0, 0, 0, 0, 0),
	(368, 'sdfsdfsdf', 36, 163, '2021-08-24 09:49:32', 0, 0, 0, 0, 0, 0, 0),
	(369, 'sdfsdfsdf', 36, 163, '2021-08-24 09:49:36', 0, 0, 0, 0, 0, 0, 0),
	(370, 'sdfsdfsdfsdf', 36, 163, '2021-08-24 09:49:41', 0, 0, 0, 0, 0, 0, 0),
	(371, '111', 36, 164, '2021-08-24 10:10:26', 0, 0, 0, 0, 0, 0, 0),
	(372, '22222', 36, 164, '2021-08-24 10:39:25', 0, 0, 0, 0, 0, 0, 0),
	(373, '123', 36, 166, '2021-08-24 10:40:48', 0, 0, 0, 0, 0, 1, 0),
	(374, '123', 36, 166, '2021-08-24 10:40:48', 0, 0, 0, 0, 0, 1, 2),
	(375, 'sdfsdf', 36, 165, '2021-08-24 11:04:06', 0, 0, 0, 0, 0, 0, 0),
	(376, '12312321', 36, 165, '2021-08-24 11:04:55', 0, 0, 0, 0, 0, 0, 0),
	(377, '123', 36, 165, '2021-08-24 11:19:36', 0, 0, 0, 0, 0, 0, 0),
	(378, '333', 36, 167, '2021-08-24 11:20:36', 0, 0, 0, 0, 0, 0, 0),
	(379, '222', 36, 167, '2021-08-24 11:22:06', 0, 0, 0, 0, 0, 0, 0),
	(380, 'aaaaaa', 36, 168, '2021-08-24 11:22:56', 0, 0, 0, 0, 0, 0, 0),
	(381, 'bbbbbb', 36, 168, '2021-08-24 11:22:59', 0, 0, 0, 0, 0, 0, 0),
	(382, 'ccccccc', 36, 168, '2021-08-24 11:23:01', 0, 0, 0, 0, 0, 0, 0),
	(383, 'ddddddd', 36, 168, '2021-08-24 11:23:03', 0, 0, 0, 0, 0, 0, 0),
	(384, 'eeeeeee', 36, 168, '2021-08-24 11:23:04', 0, 0, 0, 0, 0, 0, 0),
	(385, 'ffffff', 36, 168, '2021-08-24 11:23:06', 0, 0, 0, 0, 0, 0, 0),
	(386, 'gggggg', 36, 168, '2021-08-24 11:23:08', 0, 0, 0, 0, 0, 0, 0),
	(387, 'hhhhhh', 36, 168, '2021-08-24 11:23:10', 0, 0, 0, 0, 0, 0, 0),
	(388, 'iiiiiiii', 36, 168, '2021-08-24 11:23:13', 0, 0, 0, 0, 0, 0, 0),
	(389, 'jjjjjjj', 36, 168, '2021-08-24 11:23:15', 0, 0, 0, 0, 0, 0, 0),
	(390, 'kkkkkkkkk', 36, 168, '2021-08-24 11:23:18', 0, 0, 0, 0, 0, 0, 0),
	(391, 'lllllll', 36, 168, '2021-08-24 11:23:20', 0, 0, 0, 0, 0, 0, 0),
	(392, 'mmmmmmmmmm', 36, 168, '2021-08-24 11:23:22', 0, 0, 0, 0, 0, 0, 0),
	(393, 'nnnnnnnnnnnnnnnnnn', 36, 168, '2021-08-24 11:23:24', 0, 0, 0, 0, 0, 0, 0),
	(394, 'ooooooooooooooooooo', 36, 168, '2021-08-24 11:23:26', 0, 0, 0, 0, 0, 0, 0),
	(395, 'pppppppppppppppppppppppp', 36, 168, '2021-08-24 11:23:28', 0, 0, 0, 0, 0, 0, 0),
	(396, 'qqqqqqqqqqqqqqqqqqqqqqq', 36, 168, '2021-08-24 11:23:30', 0, 0, 0, 0, 0, 0, 0),
	(397, 'rrrrrrrrrrrrrrrrrrrrrrrrrrr', 36, 168, '2021-08-24 11:23:33', 0, 0, 0, 0, 0, 0, 0),
	(398, 'sssssssssssssssssssssssss', 36, 168, '2021-08-24 11:23:34', 0, 0, 0, 0, 0, 0, 0),
	(399, 'ttttttttttttttttttttttttt', 36, 168, '2021-08-24 11:23:37', 0, 0, 0, 0, 0, 0, 0),
	(400, 'uuuuuuuuuuuuuuuuuuu', 36, 168, '2021-08-24 11:23:39', 0, 0, 0, 0, 0, 0, 0),
	(401, 'vvvvvvvvvvvvvvvvvvvvvvvv', 36, 168, '2021-08-24 11:23:41', 0, 0, 0, 0, 0, 0, 0),
	(402, 'wwwwwwwwwwwwwwwww', 36, 168, '2021-08-24 11:23:42', 0, 0, 0, 0, 0, 0, 0),
	(403, 'xxxxxxxxxxxxxxxxxxxxxxxxxx', 36, 168, '2021-08-24 11:23:44', 0, 0, 0, 0, 0, 0, 0),
	(404, 'zzzz', 36, 168, '2021-08-24 11:23:46', 1, 0, 0, 0, 0, 0, 0),
	(405, 'zzzzzzzzzzzzzzzzzzzzzz', 36, 168, '2021-08-24 11:23:48', 0, 0, 0, 0, 0, 1, 0),
	(406, '1231232', 36, 168, '2021-08-24 12:01:41', 0, 0, 0, 0, 0, 0, 0),
	(407, ' 유지보수가 어렵다', 36, 168, '2021-08-24 12:06:54', 0, 0, 0, 0, 0, 0, 0),
	(408, '그냥 다 어렵다.', 36, 168, '2021-08-24 12:15:46', 0, 407, 0, 0, 0, 0, 0),
	(409, '111', 36, 169, '2021-08-24 12:26:11', 0, 0, 0, 0, 0, 0, 0),
	(410, '222', 36, 169, '2021-08-24 12:26:21', 0, 409, 0, 0, 0, 0, 0),
	(411, '444444444444444444444444', 36, 170, '2021-08-24 12:31:57', 0, 0, 0, 0, 0, 0, 7),
	(412, '5555555555555555555', 36, 170, '2021-08-24 12:32:02', 0, 411, 0, 0, 0, 0, 0),
	(413, '', 36, 170, '2021-08-24 12:32:12', 0, 411, 0, 0, 0, 0, 0),
	(414, '', 36, 170, '2021-08-24 12:32:13', 0, 411, 0, 0, 0, 0, 0),
	(415, '', 36, 170, '2021-08-24 12:32:14', 0, 411, 0, 0, 0, 0, 0),
	(416, '222', 36, 170, '2021-08-24 12:36:38', 0, 411, 0, 0, 0, 0, 0),
	(417, '33333', 36, 170, '2021-08-24 12:36:42', 0, 411, 0, 0, 0, 0, 0),
	(418, '33333', 36, 170, '2021-08-24 12:36:47', 0, 411, 0, 0, 0, 0, 0),
	(419, 'dsfsdfsd', 36, 170, '2021-08-24 12:48:34', 0, 0, 0, 0, 0, 0, 0),
	(420, 'sdfsdfsdfsd', 36, 170, '2021-08-24 14:00:14', 0, 0, 0, 0, 0, 0, 0),
	(421, '12312312', 36, 166, '2021-08-24 14:12:49', 0, 374, 0, 0, 0, 0, 0),
	(422, '123123', 36, 166, '2021-08-24 14:15:46', 0, 374, 0, 0, 0, 0, 0),
	(423, '123123123123123', 36, 166, '2021-08-24 14:16:51', 0, 0, 0, 0, 0, 1, 0),
	(424, '1231232', 36, 166, '2021-08-24 14:27:13', 0, 0, 0, 0, 0, 1, 0),
	(425, '12312312', 36, 166, '2021-08-24 14:27:41', 0, 0, 0, 0, 0, 1, 0),
	(426, '123', 36, 171, '2021-08-24 14:28:50', 0, 0, 0, 0, 0, 1, 0),
	(427, '123', 36, 171, '2021-08-24 14:30:48', 0, 0, 0, 0, 0, 1, 0),
	(428, '123', 36, 171, '2021-08-24 14:31:20', 0, 0, 0, 0, 0, 1, 0),
	(429, 'aaaaaaaaaaaaaaaaaaaaa', 36, 171, '2021-08-24 14:32:08', 1, 0, 0, 0, 0, 0, 7),
	(430, 'sdfsdfsdfsdfsdfsdf', 36, 171, '2021-08-24 14:49:54', 0, 429, 0, 0, 0, 0, 0),
	(431, 'sdfsdfsd', 36, 171, '2021-08-24 14:51:09', 0, 0, 0, 0, 0, 0, 0),
	(432, '123123', 36, 171, '2021-08-24 14:51:14', 0, 429, 0, 0, 0, 0, 0),
	(433, '123', 36, 171, '2021-08-24 14:52:38', 0, 429, 0, 0, 0, 0, 0),
	(434, '123123123123', 36, 171, '2021-08-24 15:22:58', 0, 429, 0, 0, 0, 0, 0),
	(435, '123123123123123123123', 36, 171, '2021-08-24 15:23:14', 0, 429, 0, 0, 0, 1, 0),
	(436, '12312312312', 36, 171, '2021-08-24 15:32:24', 0, 429, 0, 0, 0, 0, 0),
	(437, '12312312312', 36, 171, '2021-08-24 15:36:17', 0, 429, 0, 0, 0, 0, 0),
	(438, 's', 36, 172, '2021-08-24 15:36:30', 0, 0, 0, 0, 0, 0, 33),
	(439, 'ssss', 36, 172, '2021-08-24 15:36:40', 0, 438, 0, 0, 0, 0, 0),
	(440, 'ssssss', 36, 172, '2021-08-24 15:36:54', 0, 438, 0, 0, 0, 0, 0),
	(441, 'dfsgdsfgdfgdfgdfg', 36, 172, '2021-08-24 16:01:03', 0, 438, 0, 0, 0, 0, 0),
	(442, '123123', 36, 172, '2021-08-24 16:05:12', 0, 438, 0, 0, 0, 0, 0),
	(443, '11111111111111111111111111111', 36, 172, '2021-08-24 16:09:43', 1, 438, 0, 0, 0, 0, 0),
	(444, 'aaaaaaaaaa', 36, 172, '2021-08-24 16:14:32', 0, 0, 0, 0, 0, 0, 0),
	(445, '12312312312312312', 36, 172, '2021-08-24 16:20:58', 0, 438, 0, 0, 0, 0, 0),
	(446, '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111', 36, 172, '2021-08-24 16:21:08', 0, 438, 0, 0, 0, 0, 0),
	(447, '22222222222222222222222222222222222222222222222222222222222222222222222222222222', 36, 172, '2021-08-24 16:21:14', 0, 438, 0, 0, 0, 0, 0),
	(448, '3333333333333333333333333333333333333333333333333333333', 36, 172, '2021-08-24 16:21:21', 0, 438, 0, 0, 0, 0, 0),
	(449, '444444444444444444444444444444444444444444444444444444444444444', 36, 172, '2021-08-24 16:21:26', 0, 438, 0, 0, 0, 0, 0),
	(450, '55555555555555555555555555555555555555555555555555', 36, 172, '2021-08-24 16:21:30', 0, 438, 0, 0, 0, 0, 0),
	(451, '66666666666666666666666666666666666666666666666666', 36, 172, '2021-08-24 16:21:33', 0, 438, 0, 0, 0, 0, 0),
	(452, '7777777777777777777777777777777777777777777777777777', 36, 172, '2021-08-24 16:21:37', 0, 438, 0, 0, 0, 0, 0),
	(453, '8888888888888888888888888888888888888', 36, 172, '2021-08-24 16:21:41', 0, 438, 0, 0, 0, 0, 0),
	(454, '9999999999999999999999999999999999999999999999999999999999', 36, 172, '2021-08-24 16:21:46', 0, 438, 0, 0, 0, 0, 0),
	(455, 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 36, 172, '2021-08-24 16:21:57', 0, 438, 0, 0, 0, 0, 0),
	(456, '123', 36, 172, '2021-08-24 16:22:02', 0, 438, 0, 0, 0, 0, 0),
	(457, 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', 36, 172, '2021-08-24 16:22:07', 0, 438, 0, 0, 0, 0, 0),
	(458, 'DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 36, 172, '2021-08-24 16:22:11', 0, 438, 0, 0, 0, 0, 0),
	(459, 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE', 36, 172, '2021-08-24 16:22:15', 0, 438, 0, 0, 0, 0, 0),
	(460, '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111', 36, 172, '2021-08-24 16:21:08', 0, 438, 0, 0, 0, 0, 0),
	(527, '123123', 36, 172, '2021-08-24 16:39:08', 0, 438, 0, 0, 0, 0, 0),
	(528, '111111111111111111111111111111111', 36, 172, '2021-08-24 16:39:18', 0, 438, 0, 0, 0, 0, 0),
	(529, '222222', 36, 172, '2021-08-24 16:39:21', 0, 438, 0, 0, 0, 0, 0),
	(530, '2', 36, 172, '2021-08-24 16:39:24', 0, 438, 0, 0, 0, 1, 0),
	(531, '1123123', 36, 172, '2021-08-24 16:39:26', 1, 438, 0, 0, 0, 0, 0),
	(532, '3', 36, 172, '2021-08-24 16:39:28', 0, 438, 0, 0, 0, 0, 1),
	(533, '4', 36, 172, '2021-08-24 16:39:30', 0, 438, 0, 0, 0, 0, 0),
	(534, '5', 36, 172, '2021-08-24 16:39:32', 0, 438, 0, 0, 0, 0, 0),
	(535, '6', 36, 172, '2021-08-24 16:39:34', 0, 438, 0, 0, 0, 0, 0),
	(536, '7', 36, 172, '2021-08-24 16:39:35', 0, 438, 0, 0, 0, 0, 0),
	(537, '8', 36, 172, '2021-08-24 16:39:37', 0, 438, 0, 0, 0, 0, 0),
	(538, '9', 36, 172, '2021-08-24 16:39:39', 0, 438, 0, 0, 0, 0, 0),
	(539, '01', 36, 172, '2021-08-24 16:39:41', 0, 438, 0, 0, 0, 0, 0),
	(540, 'sdfsdf', 36, 172, '2021-08-24 17:09:58', 0, 0, 0, 0, 0, 0, 0),
	(541, 'sdfsdfsdfsd', 36, 172, '2021-08-24 17:10:00', 0, 0, 0, 0, 0, 0, 0),
	(542, 'sdfsdfsdfsdf', 36, 172, '2021-08-24 17:10:02', 0, 0, 0, 0, 0, 0, 0),
	(543, 'sdfsdfsdfsdf', 36, 172, '2021-08-24 17:10:04', 0, 0, 0, 0, 0, 0, 0),
	(544, 'sdfsdfsdfsdf', 36, 172, '2021-08-24 17:10:06', 0, 0, 0, 0, 0, 0, 0),
	(545, 'sdfsdfsdfsf', 36, 172, '2021-08-24 17:10:08', 0, 0, 0, 0, 0, 0, 2),
	(546, 'sdfsdfsd', 36, 172, '2021-08-24 17:10:27', 0, 0, 0, 0, 0, 0, 0),
	(547, '123123123123', 36, 172, '2021-08-24 17:11:40', 0, 0, 0, 0, 0, 0, 0),
	(548, '123123', 36, 172, '2021-08-24 17:13:29', 0, 0, 0, 0, 0, 0, 0),
	(549, '123123123123', 36, 172, '2021-08-24 17:13:34', 0, 0, 0, 0, 0, 0, 0),
	(550, '1111111111111111111', 36, 172, '2021-08-24 17:13:45', 0, 545, 0, 0, 0, 0, 0),
	(551, '쓰바라마', 36, 172, '2021-08-24 17:16:00', 0, 532, 0, 0, 0, 0, 0),
	(552, '111111111111111111111111111111111111111111111111111111111111111111111111111', 36, 172, '2021-08-24 17:25:56', 0, 545, 36, 0, 0, 0, 0),
	(553, '111', 36, 173, '2021-08-24 17:37:50', 0, 0, 0, 0, 0, 0, 5),
	(554, '11111', 36, 173, '2021-08-24 17:38:27', 0, 553, 0, 0, 0, 0, 0),
	(555, '111111', 36, 173, '2021-08-24 17:38:37', 0, 553, 36, 0, 0, 0, 0),
	(556, 'ㄴㅇㄹㄴㅇㄹㄴㅇㄴㅇㄹ', 36, 173, '2021-08-24 17:40:19', 0, 553, 36, 0, 0, 0, 0),
	(557, '12312312312355555555555', 36, 173, '2021-08-25 09:46:11', 1, 553, 36, 0, 0, 0, 0),
	(558, '1111111111111111111111111111111111111', 36, 173, '2021-08-25 09:46:36', 0, 553, 36, 0, 0, 1, 0),
	(559, '', 36, 173, '2021-08-25 11:03:37', 0, 0, 0, 0, 0, 0, 0),
	(560, '123123', 36, 174, '2021-08-25 11:03:47', 0, 0, 0, 1, 0, 0, 3),
	(561, '123213', 36, 174, '2021-08-25 11:03:58', 0, 560, 0, 0, 0, 0, 0),
	(562, 'sdfsdfsdf', 36, 174, '2021-08-25 11:06:52', 0, 560, 36, 0, 0, 0, 0),
	(563, '123123123', 36, 174, '2021-08-25 11:07:06', 0, 0, 0, 1, 0, 0, 12),
	(564, '', 36, 174, '2021-08-25 11:07:17', 0, 0, 0, 1, 0, 0, 0),
	(565, '123123', 36, 174, '2021-08-25 11:07:27', 0, 0, 0, 1, 0, 0, 1),
	(566, '12312312', 36, 174, '2021-08-25 11:09:03', 0, 563, 0, 0, 0, 0, 0),
	(567, '123123123', 36, 174, '2021-08-25 11:14:45', 0, 563, 0, 0, 0, 0, 0),
	(568, '123123123123123', 36, 174, '2021-08-25 11:15:10', 0, 563, 0, 0, 0, 0, 0),
	(569, '123123123', 36, 174, '2021-08-25 11:19:47', 0, 563, 0, 0, 0, 0, 0),
	(570, 'sdfsdfsdf', 36, 174, '2021-08-25 11:24:32', 0, 563, 36, 0, 0, 0, 0),
	(571, 'sdfsdfsdfsdf', 36, 174, '2021-08-25 11:27:06', 0, 563, 36, 0, 0, 0, 0),
	(572, '888888888888888888', 36, 174, '2021-08-25 11:55:35', 0, 563, 36, 0, 0, 0, 0),
	(573, '88888888888888888888', 36, 174, '2021-08-25 11:55:43', 0, 563, 36, 0, 0, 0, 0),
	(574, '88888888888888888888888888888888888', 36, 174, '2021-08-25 11:55:52', 0, 563, 36, 0, 0, 0, 0),
	(575, '12312312312312', 36, 174, '2021-08-25 12:04:29', 0, 563, 36, 0, 0, 0, 0),
	(576, '6666666666666666666666666666666666666', 36, 174, '2021-08-25 12:07:46', 0, 563, 36, 0, 0, 0, 0),
	(577, '11123123123123123123123123123123123123', 36, 174, '2021-08-25 12:07:58', 0, 563, 36, 0, 0, 0, 0),
	(578, '12312312312312', 36, 174, '2021-08-25 12:14:44', 0, 560, 0, 0, 0, 0, 0),
	(579, 'ㄴㅇㄹㄴㅇㄹㄴㅇㄹ', 36, 174, '2021-08-25 12:15:32', 0, 565, 0, 1, 0, 0, 0),
	(580, 'sdfsdfsdfsdfsdfsdfsdf', 36, 177, '2021-08-25 17:44:51', 0, 0, 0, 1, 0, 0, 0),
	(581, 'sdfsdfsd', 36, 177, '2021-08-25 17:45:17', 0, 0, 0, 0, 1, 0, 0),
	(582, 'sdfsdfsdf', 36, 177, '2021-08-25 17:45:30', 0, 0, 0, 0, 0, 0, 0),
	(583, 'sdfsdfsdf', 36, 177, '2021-08-25 17:52:05', 0, 0, 0, 1, 0, 0, 0),
	(584, 'sadasdasd', 36, 177, '2021-08-25 17:54:08', 0, 0, 0, 0, 0, 0, 0),
	(585, 'sdfsdfsdfsdf', 36, 177, '2021-08-25 17:55:19', 0, 0, 0, 1, 0, 0, 0),
	(586, 'sdfsdfsdf', 36, 177, '2021-08-25 17:58:24', 0, 0, 0, 0, 0, 0, 0),
	(587, '12312312321312321123', 36, 177, '2021-08-25 17:59:47', 0, 0, 0, 0, 0, 0, 0),
	(588, '123123123', 36, 177, '2021-08-25 19:13:10', 0, 0, 0, 0, 0, 0, 0),
	(589, '123123123123', 36, 177, '2021-08-25 19:13:11', 0, 0, 0, 0, 0, 0, 0),
	(590, '123123123123', 36, 177, '2021-08-25 19:13:13', 0, 0, 0, 0, 0, 0, 0),
	(591, '12312321', 36, 177, '2021-08-25 19:13:15', 0, 0, 0, 0, 0, 0, 0),
	(592, '12312312312', 36, 177, '2021-08-25 19:13:15', 0, 0, 0, 0, 0, 0, 0),
	(593, '3123123123', 36, 177, '2021-08-25 19:13:16', 0, 0, 0, 0, 0, 0, 0),
	(594, 'sdfsdfsdf', 36, 177, '2021-08-25 19:13:30', 0, 0, 0, 0, 0, 0, 0),
	(595, 'sdfsdfsdf', 36, 180, '2021-08-25 19:45:57', 0, 0, 0, 0, 0, 0, 0),
	(596, 'sdfsdfsdfsdfsdf', 36, 180, '2021-08-25 19:46:02', 0, 0, 0, 0, 0, 0, 0),
	(597, 'sdfsdf', 36, 180, '2021-08-25 19:46:09', 0, 0, 0, 0, 0, 0, 0),
	(598, 'sdfsdfsdf', 36, 180, '2021-08-25 19:46:10', 0, 0, 0, 0, 0, 0, 0),
	(599, 'sdfsdfsd', 36, 180, '2021-08-25 19:46:11', 0, 0, 0, 0, 0, 0, 0),
	(600, 'sdfsdfsd', 36, 180, '2021-08-25 19:46:12', 0, 0, 0, 0, 0, 0, 0),
	(601, 'fsdfsdfs', 36, 180, '2021-08-25 19:46:12', 0, 0, 0, 0, 0, 0, 0),
	(602, 'dfsdfsdf', 36, 180, '2021-08-25 19:46:13', 0, 0, 0, 0, 0, 0, 0),
	(603, 'sdfsdfsdf', 36, 180, '2021-08-25 19:46:14', 0, 0, 0, 0, 0, 0, 0),
	(604, 'sdfsdfsdf', 36, 180, '2021-08-25 19:46:14', 0, 0, 0, 1, 0, 0, 0),
	(605, 'sdfsdfsdf', 36, 180, '2021-08-25 19:46:15', 0, 0, 0, 1, 0, 0, 0),
	(606, 'sdfsdfsd', 36, 180, '2021-08-25 19:46:16', 0, 0, 0, 0, 0, 0, 0),
	(607, 'fsdfsdfsd', 36, 180, '2021-08-25 19:46:16', 0, 0, 0, 1, 0, 0, 0),
	(608, 'fsdfsdfsd', 36, 180, '2021-08-25 19:46:17', 0, 0, 0, 1, 0, 0, 0),
	(609, 'fsdfsdfs', 36, 180, '2021-08-25 19:46:18', 0, 0, 0, 1, 0, 0, 0),
	(610, 'dfsdfsdf', 36, 180, '2021-08-25 19:46:19', 0, 0, 0, 1, 0, 0, 0);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;

-- 테이블 president.hit 구조 내보내기
CREATE TABLE IF NOT EXISTS `hit` (
  `hit_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `board_id` int(11) unsigned NOT NULL,
  `ip` varchar(50) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`hit_id`) USING BTREE,
  KEY `FK__board` (`board_id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

-- 테이블 데이터 president.hit:~20 rows (대략적) 내보내기
/*!40000 ALTER TABLE `hit` DISABLE KEYS */;
INSERT INTO `hit` (`hit_id`, `board_id`, `ip`, `date`) VALUES
	(42, 163, '::1', '2021-08-24'),
	(43, 164, '::1', '2021-08-25'),
	(44, 162, '::1', '2021-08-24'),
	(45, 165, '::1', '2021-08-24'),
	(46, 166, '::1', '2021-08-24'),
	(47, 167, '::1', '2021-08-25'),
	(48, 168, '::1', '2021-08-25'),
	(49, 169, '::1', '2021-08-24'),
	(50, 170, '::1', '2021-08-24'),
	(51, 171, '::1', '2021-08-25'),
	(52, 172, '::1', '2021-08-24'),
	(53, 173, '::1', '2021-08-25'),
	(54, 174, '::1', '2021-08-25'),
	(55, 175, '::1', '2021-08-25'),
	(56, 176, '::1', '2021-08-25'),
	(57, 177, '::1', '2021-08-25'),
	(58, 178, '::1', '2021-08-25'),
	(59, 179, '::1', '2021-08-25'),
	(60, 180, '::1', '2021-08-25'),
	(61, 181, '::1', '2021-08-25');
/*!40000 ALTER TABLE `hit` ENABLE KEYS */;

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
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- 테이블 데이터 president.user:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`user_id`, `kakao_code`, `nickname`, `hometown`, `residence`, `birth`, `gender`, `show`, `state`, `image`, `vote_19th`, `vote_pm`) VALUES
	(36, 1824200078, '총정리', 1, '1', 1953, 0, 0, 0, 'http://localhost:3002/1629763780309.png', NULL, NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

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
