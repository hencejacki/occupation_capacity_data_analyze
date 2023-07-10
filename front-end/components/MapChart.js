import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import useSWR from "swr";
import { Loading } from "@nextui-org/react";

const fetcher = () => fetch('/assets/china.json').then((res) => res.json());

export default function MapChart() {

    const { data, error, isLoading } = useSWR("/assets/china.json", fetcher);

    if (isLoading) return <Loading size="xl">Loading</Loading>

    console.log(data);

    echarts.registerMap('China', data, {});

    const mapOption = {
        geo: {
            map: 'China',
            roam: false,
            itemStyle: {
                areaColor: '#e7e8ea'
            }
        },
        tooltip: {},
        legend: {},
        series: [],
    };

    return (
        <ReactEcharts option={mapOption} style={{ width: "100vw", height: "100vh" }} />
    );
}