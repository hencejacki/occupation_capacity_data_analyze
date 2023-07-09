package main

import (
	"bigdata/module"
	"github.com/gin-gonic/gin"
)

func GetCar(c *gin.Context) {
	rp := module.BaseResponse{
		200,
		"yzy",
		Car}
	c.JSON(200, rp)
}

func GetHea(c *gin.Context) {
	rp := module.BaseResponse{
		200,
		"yzy",
		Hea}
	c.JSON(200, rp)
}

func GetHouse(c *gin.Context) {
	rp := module.BaseResponse{
		200,
		"yzy",
		House}
	c.JSON(200, rp)
}

func GetIntenet(c *gin.Context) {
	rp := module.BaseResponse{
		200,
		"yzy",
		Intenet}
	c.JSON(200, rp)
}
