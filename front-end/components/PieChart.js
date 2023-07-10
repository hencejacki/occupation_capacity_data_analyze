import React from "react";
import ReactEcharts from "echarts-for-react";

export default function PieChart({ details }) {

    let datas = [];
    details.map(detail => {
        datas.push({
            name: detail.company,
            value: detail.jobs
        });
    })

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
        <ReactEcharts option={options} style={{ width: "80vw", height: "70vh" }} />
    );
}