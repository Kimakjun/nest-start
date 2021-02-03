import React, { FC, useEffect, useState } from "react";
import { Table, Form, Input, Button } from "antd";

import { useMutation, useLazyQuery } from "@apollo/client";
import { ADD_FEED, GET_FEEDS } from "../../queries/feed";
import FormItem from "antd/lib/form/FormItem";

const columns = [
  {
    title: "Id",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "Content",
    dataIndex: "content",
    key: "content",
  },
  {
    title: "UpdatedAt",
    dataIndex: "updatedAt",
    key: "updatedAt",
  },
  {
    title: "CreatedAt",
    dataIndex: "createdAt",
    key: "createdAt",
  },
];

const Feed: FC = () => {
  const [feeds, setFeeds] = useState([]);
  const [total, setTotal] = useState(0);
  const [query, { loading }] = useLazyQuery(GET_FEEDS, {
    onCompleted: (data) => {
      setFeeds(data.getFeeds.feeds);
      setTotal(data.getFeeds.total);
    },
    fetchPolicy: "network-only",
  });

  const [page, setPage] = useState(1);

  const [addFeed] = useMutation(ADD_FEED, {
    onCompleted: ({ addFeed }) => {
      console.log(addFeed);
      query({ variables: { input: { page: page } } });
    },
  });

  useEffect(() => {
    query({ variables: { input: { page: page } } });
  }, [page]);

  const onSubmit = (data: any) => {
    addFeed({ variables: { input: { content: data.content } } });
  };

  return (
    <>
      <Form onFinish={onSubmit}>
        <FormItem
          label="content"
          name="content"
          rules={[{ required: true, message: "not empty value" }]}
        >
          <Input name="content" />
        </FormItem>

        <Button type="primary" htmlType="submit">
          등록
        </Button>
      </Form>
      <Table
        pagination={{
          current: page,
          pageSize: 10,
          total: total,
          showSizeChanger: false,
          onChange: (pickedPage) => {
            setPage(pickedPage);
          },
          position: ["bottomCenter"],
        }}
        loading={loading}
        dataSource={feeds}
        columns={columns}
      ></Table>
    </>
  );
};

export default Feed;
