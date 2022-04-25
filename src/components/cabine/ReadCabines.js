import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Typography,
  Table,
  InputNumber,
  Popconfirm,
  Form,
  Space,
  Input,
} from "antd";
import "./ReadCabines.css";
import {
  deleteAllCabine,
  deleteCabine,
  ReadCabine,
  updateCabine,
} from "../../store/actions/cabineActions";
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
const ListCabines = () => {
  const [currentCabine, setCurrentCabine] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const state = useSelector((state) => state);

  const cabines = useSelector((state) => state.cabines);
  console.log("fffgdfgf", state.cabines);

  const [form] = Form.useForm();
  const [data, setData] = useState(cabines);

  const [editingKey, setEditingKey] = useState("");
  const removeCabine = (id) => {
    dispatch(deleteCabine(id))
      .then((response) => {
        console.log(response);
        refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const update = (data, keyid) => {
    dispatch(updateCabine(data, keyid))
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
      network_type:"",
    mode:"",
    shortLink:"",
      ...record,
    });
    console.log("record ::", record);
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key, record) => {
    try {
      const row = await form.validateFields();
      const newData = [...cabines];
      const index = newData.findIndex((item) => key === item.key);

      update(row, editingKey);

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
          text: "M_01",
          value: "M_01",
        },
        {
          text: "M_02",
          value: "M_02",
        },
        {
          text: "M_03",
          value: "M_03",
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
      title: "network_type",
      dataIndex: "network_type",
      editable: true,
      defaultSortOrder: "descend",
      onFilter: (value, record) => record.network_type.indexOf(value) === 0,
      // sorter: (a, b) => a.network_type.length - b.network_type.length,
    },
    {
      title: "mode",
      dataIndex: "mode",
      editable: true,
      defaultSortOrder: "descend",
      onFilter: (value, record) => record.mode.indexOf(value) === 0,
      // sorter: (a, b) => a.mode.length - b.mode.length,
    },
    {
      title: "shortLink",
      dataIndex: "shortLink",
      editable: true,
      defaultSortOrder: "descend",
      onFilter: (value, record) => record.shortLink.indexOf(value) === 0,
      // sorter: (a, b) => a.shortLink.length - b.shortLink.length,
    },
    {
      title: "action",
      dataIndex: "id",
      render: (id) => (
        <Space size="middle">
          <Button onClick={() => removeCabine(id)}>Delete</Button>
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

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(cabines);
  }, [cabines]);

  useEffect(() => {
    dispatch(ReadCabine());
  }, []);

  const refreshData = () => {
    setCurrentCabine(null);
    setCurrentIndex(-1);
  };
  //   const setActiveBox = (cabine, index) => {
  //     setCurrentBox(box);
  //     setCurrentIndex(index);
  //   };

  const removeAllCabines = () => {
    dispatch(deleteAllCabine())
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
      <div>
        <Typography.Title>Cabines List:</Typography.Title>
        <Form form={form} component={false}>
          <Table
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            bordered
            dataSource={cabines}
            columns={mergedColumns}
            rowClassName="editable-row"
            onChange={onChange}
            pagination={{
              onChange: cancel,
            }}
          />
        </Form>
      </div>
      <Button onClick={removeAllCabines} danger>
        Delete All
      </Button>
    </>
  );
};

export default ListCabines;
