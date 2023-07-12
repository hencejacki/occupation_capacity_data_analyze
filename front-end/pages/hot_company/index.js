import { Container, Card, Row, Text, Col, Spacer, Loading, Radio } from "@nextui-org/react";
import PieChart from "@/components/PieChart";
import useSWR from "swr";
import ErrorPage from "@/components/error";

const fetcher = () => fetch('/api/hot_company').then((res) => res.json());

const MainBody = ({ hotCompanySelect, onSelect }) => {
    const { data, error, isLoading } = useSWR("/api/hot_company", fetcher);

    if (isLoading) return <Loading size="xl">Loading...</Loading>

    if (error) return <ErrorPage />

    let i = 1;
    const radioItems = data?.map(item => {
        return <Radio key={item.domain} value={i++}>{item.domain}</Radio>;
    });

    return (
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
    );
}

const HotCompany = ({ hotCompanySelect, onSelect }) => {

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
            <MainBody hotCompanySelect={hotCompanySelect} onSelect={onSelect} />
        </>
    );
}

export default HotCompany;