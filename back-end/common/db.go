package common

import (
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
)

var DB *gorm.DB

func InitDB() *gorm.DB {
	//driverName := "mysql"
	host := "118.24.128.2"
	port := "3306"
	username := "bigdata"
	password := "123456"
	database := "bigdata"
	charset := "utf8"
	//timeout := "10s"
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=%s&parseTime=true&loc=Local",
		username,
		password,
		host,
		port,
		database,
		charset,
	)

	//db,err := gorm.Open("mysql","root:bgbiao.top@(127.0.0.1:13306)/test_api?charset=utf8&parseTime=True&loc=Local")
	db, err := gorm.Open("mysql", dsn)
	if err != nil {
		panic("链接失败" + err.Error())
	}
	fmt.Println("链接OK")
	DB = db
	return db
}

func GetDB() *gorm.DB {
	return DB
}
