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
                        return value + ' 个';
                    }
                },
            }
        ]
    };

    return (
        <ReactEcharts option={options} style={{ width: "80vw", height: "70vh" }} />
    );
}