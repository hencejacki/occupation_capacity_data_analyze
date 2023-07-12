import { Container, Card, Row, Text, Col, Spacer, Loading, Radio } from "@nextui-org/react";
import { FirstPieChart, SecondPieChart, ThridPieChart, FourthPieChart } from "./components/PieCharts";
import useSWR from "swr";
import ErrorPage from "@/components/error";

const fetcher = () => fetch('/api/other').then((res) => res.json());

const MainBody = ({ otherSelect, setOtherSelect }) => {
    const { data, error, isLoading } = useSWR("/api/other", fetcher);

    if (isLoading) return <Loading size="xl">Loading...</Loading>

    if (error) return <ErrorPage />

    const DisplayChart = () => {
        switch (otherSelect) {
            case 1:{
                return <FirstPieChart degree_demand={data[0]} degree_salary={data[2]}/>
            }
            case 2: {
                return <SecondPieChart details={data[1]}/>
            }
            case 3: {
                return <FourthPieChart details={data[3]}/>
            }
            default: {
                return <></>
            }
        }
    }

    return (
        <Container gap={0}>
            <Row align="center">
                <Spacer x={4} />
                <Col span={3}>
                    <Row justify="center">
                        <Card css={{ mw: "20vw" }}>
                            <Card.Body>
                                <Radio.Group onChange={setOtherSelect} label="Cateories" defaultValue={otherSelect}>
                                    <Radio value={1}>学历-薪资-需求</Radio>
                                    <Radio value={2}>热门职位分类</Radio>
                                    <Radio value={3}>岗位经验</Radio>
                                </Radio.Group>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
                <Col>
                    <DisplayChart/>
                </Col>
            </Row>
        </Container>
    );

}

const Other = ({ otherSelect, setOtherSelect }) => {
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
            <Spacer y={3}/>
            <MainBody otherSelect={otherSelect} setOtherSelect={setOtherSelect} />
        </>
    );
}

export default Other;