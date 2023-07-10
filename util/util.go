package util

import (
	"bigdata/module"
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
	module.HotCom = append(module.HotCom, module.HotCompanyBase{"汽车/机械/制造", module.Car})
	module.HotCom = append(module.HotCom, module.HotCompanyBase{"互联网/游戏/软件", module.Intenet})
	module.HotCom = append(module.HotCom, module.HotCompanyBase{"医疗/健康/制药/生物", module.Hea})
	module.HotCom = append(module.HotCom, module.HotCompanyBase{"快消/百货/批发/零售", module.Store})
	module.HotCom = append(module.HotCom, module.HotCompanyBase{"房产/家居/物业/建筑", module.House})
	module.HotCom = append(module.HotCom, module.HotCompanyBase{"金融/经济/投资/财会", module.Meno})
	//将内部结构体按照一定顺序写入外部结构体
	//再将外部结构写入BaseResponse结构体即可
	//return module.HotCom

}

func GetDataSql(db *gorm.DB) {
	//var intenet []module.TipCompanyInt
	db.Table("tip_job").Find(&module.HotTip)
	db.Table("tip_company_Int").Find(&module.Intenet)
	db.Table("tip_company_Car").Find(&module.Car)
	db.Table("tip_company_Hea").Find(&module.Hea)
	db.Table("tip_company_Store").Find(&module.Store)
	db.Table("tip_company_Menoy").Find(&module.Meno)
	db.Table("tip_company_House").Find(&module.House)
	db.Table("salary_analyze").Find(&module.Salary_Analyz)
	//db.Table("salary_analyze").Select(&module.)
	db.Table("jobs_analyze").Find(&module.Job_Analyze)
	db.Table("Educational_requirements").Find(&module.ERequire)
	db.Table("experience_num").Find(&module.ExNum)
	db.Table("Ranking_of_city_jobs").Find(&module.RankCJob)
	db.Table("city_salary_info").Find(&module.CSInfo)
	db.Table("degree_salary").Find(&module.DgSal)
	//fmt.Println(intenet)
}

func CareerSalary() {
	//从sql获取数据存到Salary_Analyze中

}
