import React from "react";
import ReactEcharts from "echarts-for-react";

export function FirstPieChart({ details }) {

    let datas = [];
    details?.map(detail => {
        datas.push({
            name: detail.degree,
            value: detail.demand
        })
    });

    const options = {
        legend: {
            top: 'bottom'
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
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
                data: datas
            }
        ]
    };

    return (
        <ReactEcharts option={options} style={{ width: "50vw", height: "60vh" }} />
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
        legend: {
            top: 'bottom'
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
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
                data: datas
            }
        ]
    };

    return (
        <ReactEcharts option={options} style={{ width: "50vw", height: "60vh" }} />
    );
}

export function ThridPieChart({ details }) {

    let datas = [];
    details?.map(detail => {
        datas.push({
            name: detail.degree,
            value: detail.salary
        })
    });

    const options = {
        legend: {
            top: 'bottom'
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
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
                data: datas
            }
        ]
    };

    return (
        <ReactEcharts option={options} style={{ width: "50vw", height: "60vh" }} />
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
        legend: {
            top: 'bottom'
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
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
                data: datas
            }
        ]
    };

    return (
        <ReactEcharts option={options} style={{ width: "50vw", height: "60vh" }} />
    );
}

export default function PieChart() {
    return <></>
}