# occupation_capacity_data_analyze
Crawl a specific recruit website, store the data by Apache Hadoop, analyze the data by Spark, support web page display

## 2023.7.5 项目初始化：

### 项目环境说明

+ 前端：React + JavaScript + Apache Echarts
+ 后端：Golang + Gin + gorm
+ 关系型数据库：MySQL
+ 爬虫：scrapy
+ 爬虫目标网站：猎聘
+ 爬虫数据存储：Hadoop
+ 爬虫数据计算分析：Spark

### 项目基本流程

1. 小组所有成员在本地搭建爬虫环境先，爬取相应的数据（每人两个需求，对应于群内的表格）后存储到**本地**Hadoop的HDFS中，后通过Spark进行数据计算、数据清洗等操作，最终存储至远程服务器的MySQL中，具体的连接用户名和密码，还有表的结构后续发布。

2. 后端操作MySQL送至前台展示。

### 今日任务

everyone:

+ 本地搭建爬虫环境，能够正常启动爬虫任务即可
+ 测试Hadoop文件存储、获取API操作，能够编程实现即可;
+ 测试Spark的文件获取、计算等操作，能够编程实现即可;
+ 测试连接MySQL数据库，能够正常连接即可;

handboy18：

+ Git仓库初始化并拉取;
+ 后端框架搭建，能够正常访问数据库，提供正常的API服务即可;
+ 其余任务同everyone;

hencejacki:

+ Git仓库初始化并拉取;
+ 前端框架搭建，能够初步显示官方示例、访问远程API服务即可;
+ 其余任务同everyone;

