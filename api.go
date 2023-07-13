package main

import (
	"bigdata/global"
	"bigdata/module"
	"bigdata/util"
	"github.com/gin-gonic/gin"
)

func GetHotCompany(c *gin.Context) {
	// 给HotCom赋值
	//util.HotCompanyStruct()
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

func PostMail(c *gin.Context) {
	err := c.ShouldBind(&global.Email.To)
	//global.Email.To = c.Query("to")
	global.Email.Subject = "热门公司"
	//global.Email.Body = "小米,点晴科技,网易,华为,百度"
	global.Email.Body = global.EmailBody
	if err = util.SendMail(global.Email.To, global.Email.Subject, util.ToString(global.EmailBody)); err != nil {
		c.JSON(200, gin.H{
			"code": 200,
			"msg":  "Seng email successful",
		})
	} else {
		c.JSON(200, gin.H{
			"code": 200,
			"msg":  "Seng email failed",
		})
	}
}
