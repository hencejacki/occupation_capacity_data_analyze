package main

import (
	"bigdata/global"
	"bigdata/module"
	"bigdata/util"
	"github.com/gin-gonic/gin"
)

func GetHotCompany(c *gin.Context) {
	// 给HotCom赋值
	util.HotCompanyStruct()
	rp := module.BaseResponse{
		200,
		"yzy",
		global.HotCom}
	c.JSON(200, rp)
}

func GetRankCJob(c *gin.Context) {
	rp := module.BaseResponse{
		200,
		"yzy",
		global.RankCJob}
	c.JSON(200, rp)
}

func GetCitySalaInfo(c *gin.Context) {
	rp := module.BaseResponse{
		200,
		"yzy",
		global.CSInfo}
	c.JSON(200, rp)
}

func GetEducReq(c *gin.Context) {
	rp := module.BaseResponse{
		200,
		"yzy",
		global.ERequire}
	c.JSON(200, rp)
}

func GetDegreeSala(c *gin.Context) {
	rp := module.BaseResponse{
		200,
		"yzy",
		global.DgSal}
	c.JSON(200, rp)
}

func GetExpNum(c *gin.Context) {
	rp := module.BaseResponse{
		200,
		"yzy",
		global.ExNum}
	c.JSON(200, rp)
}

func GetHotJob(c *gin.Context) {
	rp := module.BaseResponse{
		200,
		"yzy",
		global.Job_Analyze}
	c.JSON(200, rp)
}

func GetJobSalary(c *gin.Context) {

	rp := module.BaseResponse{
		200,
		"yzy",
		global.CareSalaBase}
	c.JSON(200, rp)
}

func GetHotTip(c *gin.Context) {
	rp := module.BaseResponse{
		200,
		"yzy",
		global.HotTip}
	c.JSON(200, rp)
}
