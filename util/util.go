package util

import (
	"bigdata/global"
	"bigdata/module"

	//"bigdata/."
	"gorm.io/gorm"
)

func HotCompanyStruct() {
	//	"data": [
	//        {
	//            "domain":"IT互联网产品",
	//             "details": [
	//                {
	//                    "company": "特斯拉(上海)有限公司",
	//                    "jobs": "119",
	//                },
	//                ...
	//             ]
	//        }
	//        ...
	//    ]
	//	嵌套两个interface{}
	//内部的interface{}包含company和jobs结构体   []TipCompany__
	//外部的interface{}包含domain 和details{}结构体  []HotCompanyBase
	global.HotCom = append(global.HotCom, module.HotCompanyBase{"汽车/机械/制造", global.Car})
	global.HotCom = append(global.HotCom, module.HotCompanyBase{"互联网/游戏/软件", global.Intenet})
	global.HotCom = append(global.HotCom, module.HotCompanyBase{"医疗/健康/制药/生物", global.Hea})
	global.HotCom = append(global.HotCom, module.HotCompanyBase{"快消/百货/批发/零售", global.Store})
	global.HotCom = append(global.HotCom, module.HotCompanyBase{"房产/家居/物业/建筑", global.House})
	global.HotCom = append(global.HotCom, module.HotCompanyBase{"金融/经济/投资/财会", global.Meno})
	//将内部结构体按照一定顺序写入外部结构体
	//再将外部结构写入BaseResponse结构体即可
	//return global.HotCom

}

func GetDataSql(db *gorm.DB) {
	//var intenet []global.TipCompanyInt
	db.Table("tip_job").Find(&global.HotTip)
	db.Table("tip_company_Int").Find(&global.Intenet)
	db.Table("tip_company_Car").Find(&global.Car)
	db.Table("tip_company_Hea").Find(&global.Hea)
	db.Table("tip_company_Store").Find(&global.Store)
	db.Table("tip_company_Menoy").Find(&global.Meno)
	db.Table("tip_company_House").Find(&global.House)

	CareerSalary(db)

	db.Table("jobs_analyze").Order("job_demand desc").Find(&global.Job_Analyze)
	db.Table("Educational_requirements").Select("TRIM(degree) as degree, num").Find(&global.ERequire)
	db.Table("experience_num").Find(&global.ExNum)
	db.Table("Ranking_of_city_jobs").Find(&global.RankCJob)
	db.Table("city_salary_info").Select("city, ROUND(avg_salary, 2) as avg_salary").Find(&global.CSInfo)
	db.Table("degree_salary").Select("degree, ROUND(salary, 2) as salary").Find(&global.DgSal)
}

func CareerSalary(db *gorm.DB) {
	//将分类写入数据
	var jobNames []string
	db.Table("salary_analyze").Select("jobName").Distinct("jobName").Find(&jobNames)

	//从sql获取数据存到Salary_Analyze中
	for _, jobName := range jobNames {
		db.Table("salary_analyze").Where("jobName = ?", jobName).Find(&global.Salary_Analyz)
		global.CareSalaBase = append(global.CareSalaBase, module.CareerSalaryBase{jobName, global.Salary_Analyz})
	}

}
