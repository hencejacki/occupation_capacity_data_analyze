import EChartsReact from 'echarts-for-react';
import React, { useState } from 'react';

const TestChart = () => {

    const [option, setOption] = useState({});

    React.useEffect(() => {
        const option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
                }
            ]
        };

        setOption(option);
    }, []);

    return (
        <>
            <div style={{ width: 500 + 'px', height: 500 + 'px' }}>
                <EChartsReact option={option} />
            </div>
        </>
    );
}

export default TestChart;