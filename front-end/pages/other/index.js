import { Container, Card, Row, Text, Col, Spacer, Loading } from "@nextui-org/react";
import { FirstPieChart, SecondPieChart, ThridPieChart, FourthPieChart } from "./components/PieCharts";
import useSWR from "swr";

const fetcher = () => fetch('/api/other').then((res) => res.json());

const Other = () => {

    const { data, error, isLoading } = useSWR("/api/other", fetcher);

    if (isLoading) return <Loading size="xl">isLoading...</Loading>

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
                就业学历,热门职位分类,学历-薪资关系,岗位经验
            </Text>
            {/* <Spacer y={3} /> */}
            <Container gap={0}>
                <Row justify="center">
                    <Col>
                        <FirstPieChart details={data[0]} />
                    </Col>
                    <Col>
                        <SecondPieChart details={data[1]} />
                    </Col>
                </Row>
                <Spacer y={2} />
                <Row justify="center">
                    <Col>
                        <ThridPieChart details={data[2]} />
                    </Col>
                    <Col>
                        <FourthPieChart details={data[3]} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Other;