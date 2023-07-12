import { Container, Card, Row, Text, Col, Spacer, Radio, Loading } from "@nextui-org/react";
import useSWR from "swr";
import CareerTop from "./components/career_top";
import CityTop from "./components/city_top";
import ErrorPage from "@/components/error";

const fetcher = () => fetch('/api/hoting').then((res) => res.json());

const MainBody = ({ hotingSelect, topSelect }) => {

    const { data, error, isLoading } = useSWR('/api/hoting', fetcher);

    if (isLoading) return <Loading size="xl">Loading...</Loading>

    if (error) return <ErrorPage/>

    return (
        <Container gap={0}>
            <Row justify="center">
                <div>
                    <Card>
                        <Card.Body>
                            <Radio.Group onChange={topSelect} label="TOP" defaultValue={hotingSelect} orientation="horizontal">
                                <Radio value={1}>热门就业岗位</Radio>
                                <Radio value={2}>热门就业城市</Radio>
                            </Radio.Group>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
            <Spacer y={2} />
            <Row gap={1}>
                {hotingSelect == 1 ? <CareerTop details={data[0]} /> : <CityTop details={data[1]} />}
            </Row>
        </Container>
    );
}

const HotJobCity = ({ hotingSelect, topSelect }) => {
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
                热门就业岗位+热门就业城市
            </Text>
            <Spacer />
            <MainBody hotingSelect={hotingSelect} topSelect={topSelect} />
        </>
    );
}

export default HotJobCity;