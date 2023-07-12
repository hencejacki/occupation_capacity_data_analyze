import EChartsReact from 'echarts-for-react';

const BarChart = ({ title, details }) => {

    // 数据处理
    let sources = [['category', '最低薪资', '平均薪资', '最高薪资']]
    details.map(detail => {
        let avg = (Number(detail.min) + Number(detail.max)) / 2;
        sources.push([detail.career, detail.min, avg, detail.max]);
    })

    const dynamic_option = {
        title: {
            text: title,
            top: '95%',
            left: "center"
        },
        legend: {},
        tooltip: {},
        dataset: {
            source: sources
        },
        xAxis: { type: 'category' },
        yAxis: {
            axisLabel: {
                formatter: '{value} k/月'
            }
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' k/月';
                    }
                },
            },
            {
                type: 'line',
                smooth: 0.5,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' k/月';
                    }
                },
            },
            {
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' k/月';
                    }
                },
            }
        ]
    };
    return (
        <EChartsReact option={dynamic_option} style={{ width: "100vw", height: "50vh" }} />
    );
}

export default BarChart;