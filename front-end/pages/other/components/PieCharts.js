import React from "react";
import ReactEcharts from "echarts-for-react";

export function FirstPieChart({ degree_demand, degree_salary }) {

    let keys = ['学历不限', '其他(大专以下)', '大专', '本科', '硕士', '博士'];

    let degree_demand_map = new Map()
    let degree_salary_map = new Map()

    degree_demand?.map(item => {
        degree_demand_map.set(item.degree, item.demand);
    });

    degree_salary?.map(item => {
        degree_salary_map.set(item.degree, item.salary);
    })

    let demand_datas = [];
    let salary_datas = [];

    keys?.forEach(ele => {
        demand_datas.push(degree_demand_map.get(ele));
        salary_datas.push(degree_salary_map.get(ele))
    });

    const options = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data: ['需求', '薪资']
        },
        xAxis: [
            {
                type: 'category',
                data: keys,
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '需求',
                // min: 0,
                // max: 9000,
                // interval: 1000,
                axisLabel: {
                    formatter: '{value} 人'
                }
            },
            {
                type: 'value',
                name: '薪资',
                // min: 0,
                // max: 40,
                // interval: 5,
                axisLabel: {
                    formatter: '{value} k'
                }
            }
        ],
        series: [
            {
                name: '需求',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' 人';
                    }
                },
                data: demand_datas
            },
            {
                name: '薪资',
                type: 'bar',
                yAxisIndex: 1,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' k';
                    }
                },
                data: salary_datas
            },
        ]
    };

    return (
        <ReactEcharts option={options} style={{ width: "60vw", height: "60vh" }} />
    );
}

export function SecondPieChart({ details }) {

    let datas = [];
    details?.map(detail => {
        datas.push({
            name: detail.domain,
            value: detail.jobs
        })
    });

    const options = {
        tooltip: {
            trigger: 'item',
        },
        legend: {
            top: 'bottom'
        },
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [50, 250],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: datas,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' 人';
                    }
                },
            }
        ]
    };

    return (
        <ReactEcharts option={options} style={{ width: "50vw", height: "80vh" }} />
    );
}

export function FourthPieChart({ details }) {

    let datas = [];
    details?.map(detail => {
        datas.push({
            name: detail.experience,
            value: detail.demand
        })
    });

    const options = {
        tooltip: {
            trigger: 'item',
        },
        legend: {
            top: 'bottom'
        },
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [50, 250],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: datas,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' 人';
                    }
                },
            }
        ]
    };

    return (
        <ReactEcharts option={options} style={{ width: "50vw", height: "65vh" }} />
    );
}

export default function PieChart() {
    return <></>
}