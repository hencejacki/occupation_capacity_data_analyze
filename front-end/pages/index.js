import BarChart from '@/components/BarChart';
import React, { useState } from 'react';
import { Container, Card, Row, Text, Col, Spacer, Loading, Radio, Pagination, Button } from "@nextui-org/react";
import useSWR from "swr";
import ErrorPage from '@/components/error';

const fetcher = () => fetch('/api/home').then((res) => res.json());

const MainBody = ({ homeSelect, onHomeSelect, currentPage, pageSelect }) => {

  const { data, error, isLoading } = useSWR("/api/home", fetcher);

  if (isLoading) return <Loading size="xl">Loading...</Loading>

  if (error) return <ErrorPage/>

  // console.log(data)

  let i = 1;
  const radioItems = data?.map(item => {
    return <Radio key={item.category} value={i++}>{item.category}</Radio>;
  });

  // console.log(currentPage)

  return (
    <Container gap={0}>
      <Row justify="center">
        <div>
          <Card css={{ mw: "80vw" }}>
            <Card.Body>
              <Radio.Group onChange={onHomeSelect} label="Cateories" defaultValue={homeSelect} orientation="horizontal">
                {radioItems[currentPage - 1]}
                {radioItems[currentPage]}
                {radioItems[currentPage + 1]}
                {radioItems[currentPage + 2]}
                {radioItems[currentPage + 3]}
                {radioItems[currentPage + 4]}
                {radioItems[currentPage + 5]}
                {radioItems[currentPage + 6]}
                {radioItems[currentPage + 7]}
              </Radio.Group>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="center">
                <Pagination initialPage={1} page={currentPage} total={data.length / 9} onChange={pageSelect} />
              </Row>
            </Card.Footer>
          </Card>
        </div>
      </Row>
      <Spacer y={4} />
      <Row justify='center'>
        <BarChart title={data[homeSelect - 1].category} details={data[homeSelect - 1].details} />
      </Row>
    </Container>
  );
}

export default function Home({ homeSelect, onHomeSelect, currentPage, pageSelect }) {

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
      <MainBody homeSelect={homeSelect} onHomeSelect={onHomeSelect} currentPage={currentPage} pageSelect={pageSelect} />
    </>
  )
}
