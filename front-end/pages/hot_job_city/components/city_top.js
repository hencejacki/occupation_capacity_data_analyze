import { Button, Container, Row, Col, Text, Card, Grid, Spacer } from "@nextui-org/react";

export default function CityTop({ details }) {

    let i = 1;
    const topItems = details?.map(detail => {
        return (
            <>
                <Row justify="center">
                    <Card css={{ p: "$6", mw: "400px" }}>
                        <Card.Header>
                            <Text
                                css={{
                                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                }}
                                weight="bold"
                            >
                                {i++}
                            </Text>
                            <Spacer />
                            <Grid.Container css={{ pl: "$6" }}>
                                <Grid xs={12}>
                                    <Text h4 css={{ lineHeight: "$xs" }}>
                                        {detail.city}
                                    </Text>
                                </Grid>
                                <Grid xs={12}>
                                    <Text css={{ color: "$accents8" }}>需求：{detail.jobNums}人</Text>
                                </Grid>
                            </Grid.Container>
                        </Card.Header>
                    </Card>
                </Row>
                <Spacer />
            </>
        );
    })

    return (
        <>
            <Container gap={0}>
                <Row justify="center">
                    <Text
                        h1
                        size={60}
                        css={{
                            textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        }}
                        weight="bold"
                    >
                        CityTop
                    </Text>
                </Row>
                <Spacer/>
                {topItems}
            </Container>
        </>
    );
}