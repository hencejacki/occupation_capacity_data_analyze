package common

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDB() *gorm.DB {
	dsn := "bigdata:123456@tcp(118.24.128.2:3306)/bigdata?charset=utf8mb4&parseTime=True&loc=Local"

	//db,err := gorm.Open("mysql","root:bgbiao.top@(127.0.0.1:13306)/test_api?charset=utf8&parseTime=True&loc=Local")
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("链接失败" + err.Error())
	}
	fmt.Println("*********链接OK*********")
	DB = db
	return db
}

func GetDB() *gorm.DB {
	return DB
}
