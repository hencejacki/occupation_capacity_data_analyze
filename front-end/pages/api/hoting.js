import request from "@/utils/request";

const hot_career = [
    {
        "career": "Java",
        "demand": "5633" 
    },
    {
        "career": "C++",
        "demand": "4432" 
    },
    {
        "career": "Python",
        "demand": "4200" 
    },
    {
        "career": "Golang",
        "demand": "3243" 
    },
    {
        "career": "Rust",
        "demand": "3145" 
    },
    {
        "career": "Json",
        "demand": "3002" 
    },
    {
        "career": "Maven",
        "demand": "2898" 
    },
    {
        "career": "Apple",
        "demand": "2600" 
    },
    {
        "career": "Kikco",
        "demand": "2498" 
    },
    {
        "career": "Google",
        "demand": "1124" 
    },
]

const hot_cities = [
    {
        "city": "青岛",
        "jobNums": "2341" 
    },
    {
        "city": "济南",
        "jobNums": "2233" 
    },
    {
        "city": "兰州",
        "jobNums": "2109" 
    },
    {
        "city": "北京",
        "jobNums": "1980" 
    },
    {
        "city": "成都",
        "jobNums": "1500" 
    },
    {
        "city": "重庆",
        "jobNums": "1489" 
    },
    {
        "city": "长沙",
        "jobNums": "1374" 
    },
    {
        "city": "上海",
        "jobNums": "1200" 
    },
    {
        "city": "郑州",
        "jobNums": "1001" 
    },
    {
        "city": "天津",
        "jobNums": "998" 
    },
]

export default async function handler(req, res) {

    const hot_career_resp = await request.get('/hot_career');

    const hot_cities_resp = await request.get('/hot_cities');

    res.status(200).json(
        [
            hot_career_resp.data,
            hot_cities_resp.data
        ]
    );
}