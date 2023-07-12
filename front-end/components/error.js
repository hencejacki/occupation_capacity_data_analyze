
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import {Error} from "@styled-icons/boxicons-regular"
export default function ErrorPage() {
    return (
        <Card css={{ mw: "330px" }}>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
                <Error style={{ color: "red" }}/>
                
                <Text b>
                    Some error happened......
                </Text>
            </Card.Body>
        </Card>
    );
}