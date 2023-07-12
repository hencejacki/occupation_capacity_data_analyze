golang后端部署

编译为linux系统的amd的二进制可执行文件
$env:GOOS = 'linux'
$env:GOARCH = 'amd64'
go build -o xxxxx #xxx为文件路径
go build -o out/gobin

链接服务器
将编译后的文件拷贝至随便一个目录下(/golang)
转到目录下提高文件的权限,让其可以正常运行
chmod +x bigdata
运行: ./编译文件
若直接运行无报错 则使用nohup将其挂载到服务器上
nohup ./xxx > nohup.log 2>&1 &
./xx 程序的启动命令
nohup.log  将命令的标准输出重定向到log文件,可改名字
2>&1 结合上一条就是输入输出都定向到log文件

ps -ef | grep 活动
查看相关活动进程

去服务器修改nginx的配置,重要的是sever下的配置,包括前端展示和后端接口路径