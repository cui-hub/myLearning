/*
Navicat MySQL Data Transfer
Source Host     : localhost:3306
Source Database : aida
Target Host     : localhost:3306
Target Database : aida
Date: 2015-10-08 13:40:16
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for provinces
-- ----------------------------
DROP TABLE IF EXISTS `provinces`;
CREATE TABLE `provinces` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `provinceid` varchar(20) NOT NULL,
  `province` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=250 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of provinces
-- ----------------------------
INSERT INTO `provinces` VALUES ('216', '230000', '黑龙江省');
INSERT INTO `provinces` VALUES ('217', '120000', '天津');
INSERT INTO `provinces` VALUES ('218', '310000', '上海');
INSERT INTO `provinces` VALUES ('219', '430000', '湖南省');
INSERT INTO `provinces` VALUES ('220', '450000', '广西壮族自治区');
INSERT INTO `provinces` VALUES ('221', '500000', '重庆');
INSERT INTO `provinces` VALUES ('222', '350000', '福建省');
INSERT INTO `provinces` VALUES ('223', '360000', '江西省');
INSERT INTO `provinces` VALUES ('224', '410000', '河南省');
INSERT INTO `provinces` VALUES ('225', '620000', '甘肃省');
INSERT INTO `provinces` VALUES ('226', '630000', '青海省');
INSERT INTO `provinces` VALUES ('227', '540000', '西藏自治区');
INSERT INTO `provinces` VALUES ('228', '610000', '陕西省');
INSERT INTO `provinces` VALUES ('229', '370000', '山东省');
INSERT INTO `provinces` VALUES ('230', '330000', '浙江省');
INSERT INTO `provinces` VALUES ('231', '210000', '辽宁省');
INSERT INTO `provinces` VALUES ('232', '650000', '新疆维吾尔自治区');
INSERT INTO `provinces` VALUES ('233', '460000', '海南省');
INSERT INTO `provinces` VALUES ('234', '420000', '湖北省');
INSERT INTO `provinces` VALUES ('235', '110000', '北京');
INSERT INTO `provinces` VALUES ('236', '340000', '安徽省');
INSERT INTO `provinces` VALUES ('237', '530000', '云南省');
INSERT INTO `provinces` VALUES ('238', '140000', '山西省');
INSERT INTO `provinces` VALUES ('239', '440000', '广东省');
INSERT INTO `provinces` VALUES ('240', '640000', '宁夏回族自治区');
INSERT INTO `provinces` VALUES ('241', '130000', '河北省');
INSERT INTO `provinces` VALUES ('242', '520000', '贵州省');
INSERT INTO `provinces` VALUES ('243', '320000', '江苏省');
INSERT INTO `provinces` VALUES ('244', '830000', '台湾省');
INSERT INTO `provinces` VALUES ('245', '810000', '香港特别行政区');
INSERT INTO `provinces` VALUES ('246', '820000', '澳门特别行政区');
INSERT INTO `provinces` VALUES ('247', '150000', '内蒙古自治区');
INSERT INTO `provinces` VALUES ('248', '220000', '吉林省');
INSERT INTO `provinces` VALUES ('249', '510000', '四川省');
