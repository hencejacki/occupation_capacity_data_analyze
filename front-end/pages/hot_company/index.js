import Layout from "@/components/layout";
import { Container, Card, Row, Text, Col, Spacer, Loading, Radio } from "@nextui-org/react";
import PieChart from "@/components/PieChart";
import useSWR from "swr";

const fetcher = () => fetch('/api/hot_company').then((res) => res.json());

const HotCompany = ({ hotCompanySelect, onSelect }) => {

    const { data, error, isLoading } = useSWR("/api/hot_company", fetcher);

    if (isLoading) return <Loading size="xl">Loading...</Loading>

    let i = 1;
    const radioItems = data.map(item => {
        return <Radio key={item.domain} value={i++}>{item.domain}</Radio>;
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
                热门领域公司
            </Text>
            <Spacer y={3} />
            <Container gap={0}>
                <Row justify="center">
                    <div>
                        <Card>
                            <Card.Body>
                                <Radio.Group onChange={onSelect} label="Domain" defaultValue={hotCompanySelect} orientation="horizontal">
                                    {radioItems}
                                </Radio.Group>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <Row justify="center">
                    <PieChart details={data[hotCompanySelect - 1].details} />
                </Row>
            </Container>
        </>
    );
}

export default HotCompany;