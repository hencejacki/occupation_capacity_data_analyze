import { Button, Container, Row, Col, Text, Card, Grid, Spacer } from "@nextui-org/react";


export default function CareerTop({ details }) {

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
                            <Spacer/>
                            <Grid.Container css={{ pl: "$6" }}>
                                <Grid xs={12}>
                                    <Text h4 css={{ lineHeight: "$xs" }}>
                                        {detail.career}
                                    </Text>
                                </Grid>
                                <Grid xs={12}>
                                    <Text css={{ color: "$accents8" }}>薪资：{detail.demand}元</Text>
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
        <Container gap={2}>
            <Row justify="center">
                <Text
                    h1
                    size={60}
                    css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}
                    weight="bold"
                >
                    CareerTop
                </Text>
            </Row>
            <Spacer/>
            {topItems}
        </Container>
    );
}