import BarChart from '@/components/BarChart';
import React, { useState } from 'react';
import { Container, Card, Row, Text, Col, Spacer, Loading, Radio } from "@nextui-org/react";
import useSWR from "swr";

const fetcher = () => fetch('/api/home').then((res) => res.json());

const MainBody = ({ homeSelect, onHomeSelect }) => {

  const { data, error, isLoading } = useSWR("/api/home", fetcher);

  if (isLoading) return <Loading size="xl">Loading...</Loading>

  console.log(data);

  let i = 1;
  const radioItems = data?.map(item => {
    return <Radio key={item.category} value={i++}>{item.category}</Radio>;
  });

  return (
    <Container gap={0}>
      <Row justify="center">
        <div>
          <Card>
            <Card.Body>
              <Radio.Group onChange={onHomeSelect} label="Cateories" defaultValue={homeSelect} orientation="horizontal">
                {radioItems}
              </Radio.Group>
            </Card.Body>
          </Card>
        </div>
      </Row>
      <Spacer y={4} />
      <Row gap={1}>
        <Col>
        </Col>
        <Col>
          <BarChart title={data[homeSelect - 1].category} details={data[homeSelect - 1].details} />
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  );
}

export default function Home({ homeSelect, onHomeSelect }) {

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
        薪资分析
      </Text>
      <Spacer y={3} />
      <MainBody homeSelect={homeSelect} onHomeSelect={onHomeSelect} />
    </>
  )
}
