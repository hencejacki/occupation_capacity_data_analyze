package main

import (
	"bigdata/common"
	"bigdata/module"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

var Intenet []module.TipCompanyInt
var Car []module.TipCompanyCar
var Store []module.TipCompanyStore
var Meno []module.TipCompanyMenoy
var House []module.TipCompanyHouse
var Hea []module.TipCompanyHouse
var Job_Analyze []module.JobAnalyze
var Salary_Analyz []module.SalaryAnalyze

func GetDataSql(db *gorm.DB) {
	//var intenet []module.TipCompanyInt
	db.Table("tip_company_Int").Find(&Intenet)
	db.Table("tip_company_Car").Find(&Car)
	db.Table("tip_company_Hea").Find(&Hea)
	db.Table("tip_company_Store").Find(&Store)
	db.Table("tip_company_Menoy").Find(&Meno)
	db.Table("tip_company_House").Find(&House)
	db.Table("salary_analyze").Find(&Salary_Analyz)
	db.Table("jobs_analyze").Find(&Job_Analyze)
	//fmt.Println(intenet)
}

func main() {
	r := gin.Default()
	common.InitDB()

	db := common.GetDB()

	defer db.Close()

	GetDataSql(db)

	//car := module.TipCompanyCar{"200","104", "三个羊公司"}

	//var intenet []module.TipCompanyInt
	//db.Table("tip_company_Int").Find(&intenet)
	//fmt.Println(intenet)

	r.GET("/car", GetCar)
	r.GET("/House", GetHouse)
	r.GET("/Intenet", GetIntenet)
	//r.GET("/Store", GetStore)
	r.GET("/Hea", GetHea)
	//r.GET("/", GetCar)
	//r.GET("/car", GetCar)
	//r.GET("/car", GetCar)
	//r.GET("/car", GetCar)
	//r.GET("/car", GetCar)

	//r.GET("/car", GetCar)

	r.Run(":8080")
}
