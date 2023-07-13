package util

import (
	"bigdata/global"
	"net/smtp"
	"strings"
)

func SendMail() error {
	////取出主机部分
	//host := strings.Split(global.Host, ":")
	//发送者账号信息
	auth := smtp.PlainAuth("", global.User, global.Password, global.Host)
	//发送邮件主体类型
	contentType := "Content-Type: text/plain" + "; charset=UTF-8"
	//消息主体
	msg := []byte("To: " + global.Email.To + "\r\nFrom: " + global.User + "<" + global.User + ">\r\nSubject: " + global.Email.Subject + "\r\n" + contentType + "\r\n\r\n" + global.Email.Body)
	//发送邮件需要切片类型
	sendTo := strings.Split(global.Email.To, ";")
	//发送邮件
	//将host和port拼接
	hostNew := global.Host + ":" + global.Port
	err := smtp.SendMail(hostNew, auth, global.User, sendTo, msg)
	return err

}
