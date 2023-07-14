# Occupation Capacity Analyze System

## 图表需求

+ 就业薪资：柱状图（多）
+ 热门岗位：TOP排行榜
+ 热门就业城市：TOP排行榜
+ 就业学历：饼图
+ 热门职位分类：柱状图（horization）
+ 热门领域公司：饼图（多）
+ 城市与薪资关系：Map图
+ 学历和薪资关系分析：雷达图
+ 岗位经验要求：饼图

## 界面分析

+ 城市-薪资关系图: Map 🫵🏽
+ 热门岗位+热门就业城市: 排行榜两列
+ 就业薪资(主页) 🫵🏽
+ 热门领域公司 🫵🏽
+ 其他：4分列（就业学历，热门职位分类，学历-薪资关系，岗位经验要求）

## API分析

1. 城市-薪资关系Map界面：

~~~
api: /city_salary
method: GET
return {
    "code": "string",
    "msg": "string",
    "data": [
        {
            "city": "青岛",
            "salary": "23" 
        }
        ...
    ]
}
~~~

2. 热门就业岗位+热门就业城市界面：

~~~
// 热门岗位
api: /hot_career
method: GET
return {
    "code": "string",
    "msg": "string",
    "data": [
        {
            "career": "Java",
            "demand": "1124" 
        }
        ...
    ]
}

// 热门城市职位需求
api: /hot_cities
method: GET
return {
    "code": "string",
    "msg": "string",
    "data": [
        {
            "city": "青岛",
            "jobNums": "12" 
        }
        ...
    ]
}
~~~

3.就业薪资界面：

~~~
api: /career_salary
method: GET
return {
    "code": "string",
    "msg": "string",
    "data": [
        {
            "category":"IT互联网产品",
             "details": [
                {
                    "career": "Java",
                    "min": "12",
                    "max": "3"
                },
                ...
             ]
        }
        ...
    ]
}
~~~

4. 热门领域公司界面：

~~~
api: /hot_company
method: GET
return {
    "code": "string",
    "msg": "string",
    "data": [
        {
            "domain":"IT互联网产品",
             "details": [
                {
                    "company": "特斯拉(上海)有限公司",
                    "jobs": "119",
                },
                ...
             ]
        }
        ...
    ]
}
~~~

5. 其他界面：

~~~
// 学历要求
api: /degree_demand
method: GET
return {
    "code": "string",
    "msg": "string",
    "data": [
        {
            "degree": "大专",
            "demand": "12" 
        }
        ...
    ]
}

// 热门领域职位分类
api: /hot_domain
method: GET
return {
    "code": "string",
    "msg": "string",
    "data": [
        {
            "domain": "广告/传媒/公关/展览",
            "jobs": "273" 
        }
        ...
    ]
}

// 学历-薪资关系
api: /degree_salary
method: GET
return {
    "code": "string",
    "msg": "string",
    "data": [
        {
            "degree": "大专",
            "salary": "23" 
        }
        ...
    ]
}

// 经验需求
api: /experience_demand
method: GET
return {
    "code": "string",
    "msg": "string",
    "data": [
        {
            "experience": "不限",
            "demand": "8888" 
        }
        ...
    ]
}
~~~