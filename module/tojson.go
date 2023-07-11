package module

type RankCityJob struct {
	City string `json:"city"`
	Num  string `json:"jobNums"`
}

type CitySalaryInfo struct {
	City   string `json:"city" gorm:"column:city"`
	Salary string `json:"salary" gorm:"column:avg_salary"`
}

type EducationRequire struct {
	Degree string `json:"degree" gorm:"column:degree"`
	Num    string `json:"demand" gorm:"column:num"`
}

type DegreeSalary struct {
	Degree string `json:"degree" gorm:"column:degree"`
	Salary string `json:"salary" gorm:"column:salary"`
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
	JobName   string `json:"career"`
	JobDemand string `json:"demand"`
}

type SalaryAnalyze struct {
	JobDetail string `json:"career" gorm:"column:jobDetail"`
	SalaryMax string `json:"max" gorm:"column:salaryMax"`
	SalaryMin string `json:"min" gorm:"column:salaryMin"`
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
