SET NAMES UTF8;
DROP DATABASE IF EXISTS cs;
CREATE DATABASE cs CHARSET=UTF8;
USE cs;

/**用户**/
CREATE TABLE cs_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32)
);

/**插入用户信息**/
INSERT INTO cs_user VALUES
(NULL,"123456","a123456"),
(NULL,"654321","a654321");


/**购物车**/
CREATE TABLE cs_cart(
     id INT PRIMARY KEY AUTO_INCREMENT,
     uid INT,     
     did INT,   
     price DECIMAL(10,2),
     count INT
);

/**轮播图**/
CREATE TABLE cs_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);

/**插入轮播图**/
INSERT INTO cs_index_carousel VALUES
(NULL, 'img/banner1.jpg','轮播广告商品1','details.html?lid=28'),
(NULL, 'img/banner2.jpg','轮播广告商品2','details.html?lid=19'),
(NULL, 'img/banner3.jpg','轮播广告商品3','d.html'),
(NULL, 'img/banner4.jpg','轮播广告商品4','lookforward.html');

/****首页商品****/
CREATE TABLE cs_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  pic VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128)
  );

/**插入首页商品**/
INSERT INTO cs_index_product VALUES
(NULL,'情侣对表系列 【新品】G-STEEL系列 钻石点缀 防水防震太阳能运动对表GST-W310BDD-1A&MSG-S200BDD-1A','img/product1.png',4480.00,'details.html?did=1'),
(NULL,'[新品]七福神系列限量款 弁财天运动男表BGD-560SLG-4DR','img/product2.png',1490.00,'details.html?did=2'),
(NULL,'G-SHOCK 时尚潮流双显黑金系列运动手表GA-110GB-1A','img/product3.png',890.00,'details.html?did=3'),
(NULL,'【新品】防水防震太阳能蓝牙连接功能男表MTG-B1000TF','img/5c25e51ae9c7c.png',1490.00,'details.html?did=4'),
(NULL,'留学英汉 英汉词典、留学、水墨黑E-Z200BK','img/product4.png',2820.00,'details.html?did=5'),
(NULL,'电子琴 音乐考级&比赛电子琴CT-X3000','img/product6.png',2298.00,'details.html?did=6'),
(NULL,'函数科学 中文科学函数计算器 初高中考试适用 大学方向fx-82CN X','img/product7.png',88.00,'details.html?did=7');



/**详情表**/
CREATE TABLE cs_details(
   did  INT PRIMARY KEY AUTO_INCREMENT,
   title VARCHAR(64),
   sm_img VARCHAR(1000),
   price  DECIMAL(10,2),
   md_img VARCHAR(1000),
   integral VARCHAR(8),
   details_img VARCHAR(1000)
   );
   
   INSERT INTO cs_details VALUES
   (NULL,"情侣对表系列 【新品】G-STEEL系列 钻石点缀 防水防震太阳能运动对表GST-W310BDD-1A&MSG-S200BDD-1A",'["img/details/sm1.png","img/details/sm2.png","img/details/sm3.png"]',4480,'["img/details/md1.png","img/details/md2.png","img/dettails/md3.png"]',4480,1),
   (NULL,"[新品]七福神系列限量款 弁财天运动男表BGD-560SLG-4DR",'["img/details/sm4.png","img/details/sm5.png","img/details/sm6.png","img/details/sm7.png"]',1490,'["img/details/md4.png","img/details/md5.png","img/details/md6.png","img/details/md7.png"]',1490,1),
   (NULL,"G-SHOCK 时尚潮流双显黑金系列运动手表GA-110GB-1A",'["img/details/sm8.jpg","img/details/sm9.jpg","img/details/sm10.jpg","img/details/sm1010.jpg"]',890,'["img/details/md8.jpg","img/details/md9.jpg","img/details/md10.jpg","img/details/md1010.jpg"]',890,1),
   (NULL,"【新品】防水防震太阳能蓝牙连接功能男表MTG-B1000TF",'["img/details/sm11.png","img/details/sm12.png","img/details/sm13.png"]',1490,'["img/details/md11.png","img/details/md12.png","img/details/md13.png"]',1490,1),
   (NULL,"留学英汉 英汉词典、留学、水墨黑E-Z200BK",'["img/details/sm14.png","img/details/sm15.png","img/details/sm16.png"]',2820,'["img/details/md14.png","img/details/md15.png","img/details/md16.png"]',2820,1),
   (NULL,"电子琴 音乐考级&比赛电子琴CT-X3000",'["img/details/sm17.jpg","img/details/sm18.jpg","img/details/sm19.jpg"]',2298,'["img/details/md17.jpg","img/details/md18.jpg","img/details/md19.jpg"]',2298,1),
   (NULL,"函数科学 中文科学函数计算器 初高中考试适用 大学方向fx-82CN X",'["img/details/sm20.png","img/details/sm21.png"]',88,'["img/details/md20.png","img/details/md21.png]',88,1);





