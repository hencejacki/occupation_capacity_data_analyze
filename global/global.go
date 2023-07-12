package global

import "bigdata/module"

var HotTip []module.TipJobs //热门职业
// 相关领域热门公司
// var Intenet []module.TipCompanyInt
// var Car []module.TipCompanyCar
// var Store []module.TipCompanyStore
// var Meno []module.TipCompanyMenoy
// var House []module.TipCompanyHouse
// var Hea []module.TipCompanyHouse
var TipCom []module.TipCompany

var Job_Analyze []module.JobAnalyze      //职业需求
var Salary_Analyz []module.SalaryAnalyze //各个领域职业薪资
var RankCJob []module.RankCityJob        //各个城市招聘需求
var CSInfo []module.CitySalaryInfo       //城市薪资情况

var ERequire []module.EducationRequire //学历要求
var DgSal []module.DegreeSalary        //学历与薪资水平关系
var ExNum []module.ExperienceNum       //招聘经验要求

var HotCom []module.HotCompanyBase         //拼接后的热门领域公司
var CareSalaBase []module.CareerSalaryBase //拼接后的领域 职业与薪资关系
