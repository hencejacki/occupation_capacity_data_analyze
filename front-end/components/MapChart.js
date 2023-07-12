import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import useSWR from "swr";
import { Loading } from "@nextui-org/react";

const fetcher = () => fetch('/assets/chinafull.json').then((res) => res.json());

export default function MapChart({ details }) {

    const { data, error, isLoading } = useSWR("/assets/china.json", fetcher);

    if (isLoading) return <Loading size="xl">Loading</Loading>

    echarts.registerMap('China', data, {});

    const mapOption = {
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,

        },
        visualMap: {
            left: 'right',
            min: 50,
            max: 1,
            inRange: {
                color: [
                    '#313695',
                    '#4575b4',
                    '#74add1',
                    '#abd9e9',
                    '#e0f3f8',
                    '#ffffbf',
                    '#fee090',
                    '#fdae61',
                    '#f46d43',
                    '#d73027',
                    '#a50026'
                ]
            },
            text: ['High', 'Low'],
            calculable: true
        },
        legend: {
        },
        series: [
            {
                name: 'China',
                type: 'map',
                map: 'China',
                roam: true,
                zoom: 1.2,
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: details,
                // 自定义名称映射
                nameMap: {
                    '北京市': '北京',
                    '天津市': '天津',
                    '黑龙江省': '哈尔滨',
                    '江西省': '南昌',
                    '河北省': '石家庄',
                    '江苏省': '苏州',
                    '上海市': '上海',
                    '烟台市': '烟台',
                    '贵州省': '贵阳',
                    '四川省': '成都',
                    '云南省': '昆明',
                    '青海省': '西宁',
                    '海南省': '海口',
                    '宁夏回族自治区': '银川',
                    '宁波市': '宁波',
                    '福建省': '厦门',
                    '重庆市': '重庆',
                    '济南市': '济南',
                    '辽宁省': '沈阳',
                    '福建省': '福州',
                    '杭州市': '杭州',
                    '陕西省': '西安',
                    '湖北省': '武汉',
                    '河南省': '郑州',
                    '山西省': '太原',
                    '广西壮族自治区': '南宁',
                    '湖南省': '长沙',
                    '江苏省': '南京',
                    '珠海市': '珠海',
                    '吉林省': '长春',
                    '广州市': '广州',
                    '新疆维吾尔自治区': '乌鲁木齐',
                    '内蒙古自治区': '呼和浩特',
                    '甘肃省': '兰州',
                    '安徽省': '合肥',
                    '青岛市': '青岛',
                    '西藏自治区': '拉萨',
                    '中山市': '中山',
                    '深圳市': '深圳'
                }
            },
        ],
    };


    return (
        <ReactEcharts option={mapOption} style={{ width: "100vw", height: "100vh" }} />
    );
}