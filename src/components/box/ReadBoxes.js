import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ReadBox,
  deleteAllBox,
  DeleteBox,
  UpdateBox,
} from "../../store/actions/boxActions";
import {
  Button,
  Typography,
  Table,
  Space,
  Input,
  InputNumber,
  Form,
  Popconfirm,
  Tag,
} from "antd";
import CabineService from "../../api/cabine/services";
import SizeService from "../../api/size/services";

const ListBoxes = () => {
  const [currentBox, setCurrentBox] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [cabines, setCabines] = useState([]);

  const [sizes, setSizes] = useState([]);
  const boxes = useSelector((state) => state.boxe);

  const [form] = Form.useForm();
  const [data, setData] = useState(boxes);
  const [editingKey, setEditingKey] = useState("");

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };
  console.log("boxes", boxes);
  const refreshData = () => {
    setCurrentBox(null);
    setCurrentIndex(-1);
  };
  useEffect(() => {
    dispatch(ReadBox());
  }, []);
  const dispatch = useDispatch();
  const getSizes = () => {
    SizeService.getAll()
      .then((res) => {
        setSizes(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getCabines = () => {
    CabineService.getAll()
      .then((res) => {
        setCabines(res.data[0]);
        console.log(cabines);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getCabines();
  }, []);
  useEffect(() => {
    getSizes();
  }, []);
  const removeBox = (id) => {
    dispatch(DeleteBox(id))
      .then((response) => {
        console.log(response);
        refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const update = (data, keyid) => {
    console.log(data);
    dispatch(UpdateBox(data, keyid))
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      ref: "",
      name: "",
      status: "",
      code: "",
      availibility: "",
      boardID: "",
      doorNumber: "",
      idcabine: "",
      idsize: "",
      ...record,
    });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey("");
  };
  const save = async (key, record) => {
    try {
      const row = await form.validateFields();
      const newData = [...boxes];
      const index = newData.findIndex((item) => key === item.key);
      console.log("***********" + row);
      console.log("***********" + newData);
      console.log("***********" + index);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
      console.log(record, row, newData);
      update(row, editingKey);
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  const columns = [
    {
      title: "ref",
      dataIndex: "ref",
      editable: true,

      filters: [
        {
          text: "hs001",
          value: "hs001",
        },
        {
          text: "sou005",
          value: "sou005",
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.ref.indexOf(value) === 0,
      sorter: (a, b) => a.ref.length - b.ref.length,
      sortDirections: ["descend"],
    },
    {
      title: "name",
      dataIndex: "name",
      editable: true,

      defaultSortOrder: "descend",
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      // sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "status",
      dataIndex: "status",
      editable: true,

      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    {
      title: "code",
      dataIndex: "code",
      editable: true,
    },
    {
      title: "availibility",
      dataIndex: "availibility",
      editable: true,
    },
    {
      title: "boardID",
      dataIndex: "boardID",
      editable: true,
    },
    {
      title: "doorNumber",
      dataIndex: "doorNumber",
      editable: true,
    },
    {
      title: "cabines",
      key: "cabines",
      dataIndex: "cabines",
      editable: true,
      render: (cabines) => <span>{cabines?.ref}</span>,

      defaultSortOrder: "descend",
    },
    {
      title: "idsize",
      dataIndex: "sizes",
      editable: true,
      render: (sizes) => <span>{sizes?.name}</span>,
      // defaultSortOrder: "descend",
    },
    {
      title: "action",
      dataIndex: "id",
      render: (id) => (
        <Space size="middle">
          <Button onClick={() => removeBox(id)}>Delete</Button>
        </Space>
      ),
    },
    {
      title: "operation",
      dataIndex: "id",
      render: (_, record) => {
        console.log(record);
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => {
                save(record.id, record);
              }}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  const setActiveBox = (box, index) => {
    setCurrentBox(box);
    setCurrentIndex(index);
  };

  const removeAllBoxes = () => {
    dispatch(deleteAllBox())
      .then((response) => {
        console.log(response);
        refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <>
      <Typography.Title>Boxes List:</Typography.Title>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={boxes}
          columns={mergedColumns}
          rowClassName="editable-row"
          onChange={onChange}
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
      <Button onClick={removeAllBoxes} danger>
        Delete All
      </Button>
    </>
  );
};

export default ListBoxes;
