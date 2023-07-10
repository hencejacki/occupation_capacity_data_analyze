import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import MapChart from "@/components/MapChart";


const CitySalaryMap = () => {
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
                    <MapChart />
                </Row>
            </Container>
        </>
    );
}

export default CitySalaryMap;