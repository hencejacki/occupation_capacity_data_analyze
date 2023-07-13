package util

import (
	_const "bigdata/const"
	"bigdata/module"
	"fmt"
	"gopkg.in/gomail.v2"
)

func SendMail(mailMess string) error {
	m := gomail.NewMessage()
	m.SetHeader("From", _const.User)       //发件人
	m.SetHeader("To", "1486804776@qq.com") //收件人
	//m.SetAddressHeader("Cc", "test@126.com", "test")     //抄送人
	m.SetHeader("Subject", "热门岗位推送") //邮件标题
	m.SetBody("text/html", mailMess) //邮件内容
	//m.Attach("E:\\IMGP0814.JPG")       //邮件附件
	d := gomail.NewDialer(
		_const.Host,
		25,
		_const.User,
		_const.Password)
	//邮件发送服务器信息,使用授权码而非密码
	err := d.DialAndSend(m)
	return err
}

func ToForm(resStruct []module.EmailBody) error {
	var mailMessage = _const.MailMess
	for _, value := range resStruct {
		mailMessage = mailMessage + fmt.Sprintf("<td>%v</td><td>%v</td></tr>",
			value.JobName, value.JobNum)
	}
	mailMessage = mailMessage + "</table><br></br><br>Send By 1486804776@qq.com.cn</br>（自动发送请勿回复）"
	return SendMail(mailMessage) //拼接完成后，调用函数发送邮件
}
