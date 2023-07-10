package module

var HotTip []TipJobs
var Intenet []TipCompanyInt
var Car []TipCompanyCar
var Store []TipCompanyStore
var Meno []TipCompanyMenoy
var House []TipCompanyHouse
var Hea []TipCompanyHouse
var Job_Analyze []JobAnalyze
var Salary_Analyz []SalaryAnalyze
var RankCJob []RankCityJob
var CSInfo []CitySalaryInfo
var ERequire []EducationRequire
var DgSal []DegreeSalary
var ExNum []ExperienceNum
var HotCom []HotCompanyBase
var CareSala []CareerSalaryBase

type RankCityJob struct {
	City string `json:"city"`
	Num  string `json:"jobNums"`
}

type CitySalaryInfo struct {
	City   string `json:"city"`
	Salary string `json:"salary"`
}

type EducationRequire struct {
	Degree string `json:"degree"`
	Num    string `json:"demand"`
}

type DegreeSalary struct {
	Degree string `json:"degree"`
	Salary string `json:"salary"`
}

type ExperienceNum struct {
	Experience string `json:"experience"`
	Num        string `json:"demand"`
}

type TipJobs struct {
	Tip  string `json:"domain"`
	Jobs string `json:"jobs"`
}

type TipCompanyCar struct {
	Company string `json:"company"`
	Jobs    string `json:"jobs"`
}

type TipCompanyHea struct {
	Company string `json:"company"`
	Jobs    string `json:"jobs"`
}

type TipCompanyHouse struct {
	Company string `json:"company"`
	Jobs    string `json:"jobs"`
}

type TipCompanyInt struct {
	Company string `json:"company"`
	Jobs    string `json:"jobs"`
}

type TipCompanyMenoy struct {
	Company string `json:"company"`
	Jobs    string `json:"jobs"`
}

type TipCompanyStore struct {
	Company string `json:"company"`
	Jobs    string `json:"jobs"`
}

type JobAnalyze struct {
	Job_Name   string `json:"career"`
	Job_Demand string `json:"demand"`
}

type SalaryAnalyze struct {
	Job_Detail string `json:"career"`
	Salary_Max string `json:"max"`
	Salary_Min string `json:"min"`
}

type HotCompanyBase struct {
	Domain  string      `json:"domain"`
	Details interface{} `json:"details"`
}

type CareerSalaryBase struct {
	Category string      `json:"category"`
	Details  interface{} `json:"details"`
}

type BaseResponse struct {
	Code int         `json:"code"`
	Msg  string      `json:"msg"`
	Data interface{} `json:"data"`
}
