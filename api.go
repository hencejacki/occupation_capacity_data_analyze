package main

import (
	"bigdata/module"
	"bigdata/util"
	"github.com/gin-gonic/gin"
)

//func GetStore(c *gin.Context) {
//	rp := module.BaseResponse{
//		200,
//		"yzy",
//		Store}
//	c.JSON(200, rp)
//}
//
//func GetCar(c *gin.Context) {
//	rp := module.BaseResponse{
//		200,
//		"yzy",
//		Car}
//	c.JSON(200, rp)
//}
//
//func GetHea(c *gin.Context) {
//	rp := module.BaseResponse{
//		200,
//		"yzy",
//		Hea}
//	c.JSON(200, rp)
//}
//
//func GetHouse(c *gin.Context) {
//	rp := module.BaseResponse{
//		200,
//		"yzy",
//		House}
//	c.JSON(200, rp)
//}
//
//func GetIntenet(c *gin.Context) {
//	rp := module.BaseResponse{
//		200,
//		"yzy",
//		Intenet}
//	c.JSON(200, rp)
//}

func GetHotCompany(c *gin.Context) {
	// 给HotCom赋值
	util.HotCompanyStruct()
	rp := module.BaseResponse{
		200,
		"yzy",
		module.HotCom}
	c.JSON(200, rp)
}

func GetRankCJob(c *gin.Context) {
	rp := module.BaseResponse{
		200,
		"yzy",
		module.RankCJob}
	c.JSON(200, rp)
}

func GetCitySalaInfo(c *gin.Context) {
	rp := module.BaseResponse{
		200,
		"yzy",
		module.CSInfo}
	c.JSON(200, rp)
}

func GetEducReq(c *gin.Context) {
	rp := module.BaseResponse{
		200,
		"yzy",
		module.ERequire}
	c.JSON(200, rp)
}

func GetDegreeSala(c *gin.Context) {
	rp := module.BaseResponse{
		200,
		"yzy",
		module.DgSal}
	c.JSON(200, rp)
}

func GetExpNum(c *gin.Context) {
	rp := module.BaseResponse{
		200,
		"yzy",
		module.ExNum}
	c.JSON(200, rp)
}

func GetHotJob(c *gin.Context) {
	rp := module.BaseResponse{
		200,
		"yzy",
		module.Job_Analyze}
	c.JSON(200, rp)
}

func GetJobSalary(c *gin.Context) {

	rp := module.BaseResponse{
		200,
		"yzy",
		module.Job_Analyze}
	c.JSON(200, rp)
}

func GetHotTip(c *gin.Context) {
	rp := module.BaseResponse{
		200,
		"yzy",
		module.HotTip}
	c.JSON(200, rp)
}
