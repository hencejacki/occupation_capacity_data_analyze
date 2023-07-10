// import request from "@/utils/request"

export default function handler(req, res) {
    res.status(200).json(
      [
        {
          "domain": "IT互联网产品",
          "details": [
            {
              "company": "Java",
              "jobs": "12",
            },
            {
              "company": "C++",
              "jobs": "24",
            },
            {
              "company": "Python",
              "jobs": "2",
            },
            {
              "company": "Golang",
              "jobs": "12",
            },
            {
              "company": "Rust",
              "jobs": "15",
            }
          ]
        },
        {
          "domain": "食品工艺",
          "details": [
            {
              "company": "西点师",
              "jobs": "12",
            },
            {
              "company": "中餐师",
              "jobs": "12",
            },
            {
              "company": "后厨帮工",
              "jobs": "112",
            },
            {
              "company": "辣条鉴赏员",
              "jobs": "12",
            },
            {
              "company": "食品分子研究",
              "jobs": "33",
            }
          ]
        },
        {
          "domain": "汽车维修",
          "details": [
            {
              "company": "强攻",
              "jobs": "12",
            },
            {
              "company": "喝酒",
              "jobs": "12",
            },
            {
              "company": "芜湖起飞",
              "jobs": "12",
            },
            {
              "company": "大司马",
              "jobs": "12",
            },
            {
              "company": "小团团",
              "jobs": "12",
            }
          ]
        },
        {
          "domain": "房地产销售",
          "details": [
            {
              "company": "荆棘之词",
              "jobs": "12",
            },
            {
              "company": "倒数",
              "jobs": "12",
            },
            {
              "company": "夔州",
              "jobs": "12",
            },
            {
              "company": "借记卡",
              "jobs": "12",
            },
            {
              "company": "隆安",
              "jobs": "12",
            }
          ]
        },
        {
          "domain": "前端开发",
          "details": [
            {
              "company": "HTML5",
              "jobs": "12",
            },
            {
              "company": "其他开发",
              "jobs": "12",
            },
            {
              "company": "Web前端开发",
              "jobs": "12",
            },
            {
              "company": "移动端开发",
              "jobs": "12",
            },
            {
              "company": "IOS开发",
              "jobs": "12",
            }
          ]
        }
      ]
    );
  }
  