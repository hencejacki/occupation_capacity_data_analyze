import { Container, Card, Row, Text, Col, Spacer, Loading } from "@nextui-org/react";
import MapChart from "@/components/MapChart";
import useSWR from "swr";
import ErrorPage from "@/components/error";

const fetcher = () => fetch('/api/city_salary').then((res) => res.json());

const CitySalaryMap = () => {

    const { data, error, isLoading } = useSWR('/api/city_salary', fetcher);

    if (isLoading) return <Loading size="xl">Loading...</Loading>

    if (error) return <ErrorPage/>

    // 处理数据为地图可读格式
    let datas = [];
    data.map(item => {
        datas.push({
            name: item.city,
            value: item.salary
        })
    });

    return (
        <>
            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
            >
                城市-薪资分析
            </Text>
            <Container gap={0}>
                <Row justify="center">
                    <MapChart details={datas} />
                </Row>
            </Container>
        </>
    );
}

export default CitySalaryMap;