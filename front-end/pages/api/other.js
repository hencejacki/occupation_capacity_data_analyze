// import request from "@/utils/request"

const degree_demand = [
    {
        "degree": "大专",
        "demand": "2233"
    },
    {
        "degree": "研究生",
        "demand": "287"
    },
    {
        "degree": "本科",
        "demand": "985"
    },
    {
        "degree": "不限",
        "demand": "211"
    },
]

const hot_domain = [
    {
        "domain": "广告/传媒/公关/展览",
        "jobs": "112"
    },
    {
        "domain": "互联网/IT",
        "jobs": "342"
    },
    {
        "domain": "房地产/销售",
        "jobs": "567"
    },
    {
        "domain": "教师/辅导员",
        "jobs": "443"
    },
]

const degree_salary = [
    {
        "degree": "大专",
        "salary": "20" 
    },
    {
        "degree": "本科",
        "salary": "40" 
    },
    {
        "degree": "研究生",
        "salary": "80" 
    },
    {
        "degree": "高中",
        "salary": "12"
    },
]

const experience_demand = [
    {
        "experience": "不限",
        "demand": "998" 
    },
    {
        "experience": "5-10年",
        "demand": "234" 
    },
    {
        "experience": "10年以上",
        "demand": "556" 
    },
    {
        "experience": "3年",
        "demand": "332" 
    },
]

export default function handler(req, res) {
    res.status(200).json(
        [
            degree_demand,
            hot_domain,
            degree_salary,
            experience_demand
        ]
    );
}
