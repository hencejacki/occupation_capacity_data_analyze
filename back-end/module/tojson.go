package module

type RankCityJob struct {
	City string
	Num  string
}

type CitySalaryInfo struct {
	City   string
	Salary string
}

type EducationRequire struct {
	Degree string
	Num    string
}

type DegreeSalary struct {
	Degree string
	Salary string
}

type ExperienceNum struct {
	Experience string
	Num        string
}

type TipJobs struct {
	Jobs string
	Tip  string
}

type TipCompanyCar struct {
	Company string
	Jobs    string
}

type TipCompanyHea struct {
	Company string
	Jobs    string
}

type TipCompanyHouse struct {
	Company string
	Jobs    string
}

type TipCompanyInt struct {
	Company string
	Jobs    string
}

type TipCompanyMenoy struct {
	Company string
	Jobs    string
}

type TipCompanyStore struct {
	Company string
	Jobs    string
}

type JobAnalyze struct {
	Job_Name   string
	Job_Demand string
}

type SalaryAnalyze struct {
	Job_Detail string
	Salary_Max string
	Salary_Min string
}

type BaseResponse struct {
	Code int
	Msg  string
	Data interface{}
}
