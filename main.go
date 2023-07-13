package main

import (
	"bigdata/common"
	"bigdata/util"
	"github.com/gin-gonic/gin"
)

func route(r *gin.Engine) {
	r.GET("/city_salary", GetCitySalaInfo)

	r.GET("/hot_career", GetHotJob)
	r.GET("/hot_cities", GetRankCJob)

	r.GET("/career_salary", GetJobSalary)

	r.GET("/hot_company", GetHotCompany)

	r.GET("/degree_demand", GetEducReq)
	r.GET("/hot_domain", GetHotTip)
	r.GET("/degree_salary", GetDegreeSala)
	r.GET("/experience_demand", GetExpNum)

	r.POST("/mail", PostMail)
}

func main() {
	r := gin.Default()

	common.InitDB()
	db := common.GetDB()
	util.GetDataSql(db)

	route(r)

	r.Run(":8088")
}
