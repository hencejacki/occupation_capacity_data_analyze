package main

import (
	"bigdata/common"
	"bigdata/util"
	"github.com/gin-gonic/gin"
)

//func GetDataSql(db *gorm.DB) {
//	//var intenet []module.TipCompanyInt
//	db.Table("tip_job").Find(&module.HotTip)
//	db.Table("tip_company_Int").Find(&module.Intenet)
//	db.Table("tip_company_Car").Find(&module.Car)
//	db.Table("tip_company_Hea").Find(&module.Hea)
//	db.Table("tip_company_Store").Find(&module.Store)
//	db.Table("tip_company_Menoy").Find(&module.Meno)
//	db.Table("tip_company_House").Find(&module.House)
//	db.Table("salary_analyze").Find(&module.Salary_Analyz)
//	//db.Table("salary_analyze").Select(&module.)
//	db.Table("jobs_analyze").Find(&module.Job_Analyze)
//	db.Table("Educational_requirements").Find(&module.ERequire)
//	db.Table("experience_num").Find(&module.ExNum)
//	db.Table("Ranking_of_city_jobs").Find(&module.RankCJob)
//	db.Table("city_salary_info").Find(&module.CSInfo)
//	db.Table("degree_salary").Find(&module.DgSal)
//	//fmt.Println(intenet)
//}

func main() {
	r := gin.Default()
	common.InitDB()

	db := common.GetDB()

	//defer db.Close()

	util.GetDataSql(db)

	//car := module.TipCompanyCar{"200","104", "三个羊公司"}

	//var intenet []module.TipCompanyInt
	//db.Table("tip_company_Int").Find(&intenet)
	//fmt.Println(intenet)

	//r.GET("/car", GetCar)
	//r.GET("/House", GetHouse)
	//r.GET("/Intenet", GetIntenet)
	//r.GET("/Store", GetStore)
	//r.GET("/Hea", GetHea)
	r.GET("/hot_company", GetHotCompany)
	r.GET("/hot_cities", GetRankCJob)
	r.GET("/city_salary", GetCitySalaInfo)
	r.GET("/hot_career", GetHotJob)
	r.GET("/career_salary", GetJobSalary)
	r.GET("/degree_demand", GetEducReq)
	r.GET("/degree_salary", GetDegreeSala)
	r.GET("/experience_demand", GetExpNum)
	r.GET("/hot_domain", GetHotTip)
	//r.GET("/car", GetCar)

	r.Run(":8080")
}
