import EChartsReact from 'echarts-for-react';

const TestChart = ({ title, details }) => {

    // 数据处理
    let sources = [['category', 'salary_min', 'salary_max']]
    details.map(detail => {
        sources.push([detail.career, detail.min, detail.max]);
    })

    const dynamic_option = {
        title: {
            text: title,
            top: '85%',
            left: "center"
        },
        legend: {},
        tooltip: {},
        dataset: {
            source: sources
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'bar' }, { type: 'bar' }]
    };
    return (
        <>
            <div style={{ width: 800 + 'px', height: 300 + 'px' }}>
                <EChartsReact option={dynamic_option} />
            </div>
        </>
    );
}

export default TestChart;