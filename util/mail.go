package util

import (
	"bigdata/global"
	"bigdata/module"
	"bytes"
	"fmt"
	"net/smtp"
	"strings"
)

func SendMail(to, subject, body string) error {
	////取出主机部分
	//host := strings.Split(global.Host, ":")
	//发送者账号信息
	auth := smtp.PlainAuth("", global.User, global.Password, global.Host)
	//发送邮件主体类型
	contentType := "Content-Type: text/plain" + "; charset=UTF-8"
	//消息主体
	msg := []byte("To: " + to + "\r\nFrom: " + global.User + "<" + global.User + ">\r\nSubject: " + subject + "\r\n" + contentType + "\r\n\r\n" + body)
	//发送邮件需要切片类型
	sendTo := strings.Split(global.Email.To, ";")
	//发送邮件
	//将host和port拼接
	hostNew := global.Host + ":" + global.Port
	err := smtp.SendMail(hostNew, auth, global.User, sendTo, msg)
	return err

}

func ToString(Body []module.EmailBody) string {
	var buffer bytes.Buffer
	for _, body := range Body {
		buffer.WriteString(fmt.Sprintf("jobName: %s, jobNum: %s   ", body.JobName, body.JobNum))
	}
	fmt.Println(buffer.String())
	return buffer.String()
}
