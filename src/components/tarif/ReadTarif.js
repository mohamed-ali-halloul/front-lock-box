import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ReadTarif,deleteAllTarif,deleteTarif,updateTarif
} from "../../store/actions/tarifActions";
import SizeService from "../../api/size/services";
import {
    Button,
    Typography,
    Table,
    Space,
    Input,
    InputNumber,
    Form,
    Popconfirm,
    Tag
    
}from "antd";
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
  const ListTarifs = () => {
    const [currentTarif, setCurrentTarif] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [sizes, setSizes] = useState([]);

    const state = useSelector((state) => state);
  
    const tarifs = useSelector((state) => state.tarifs);
    console.log("fffgdfgf", state.tarifs);
  
    const [form] = Form.useForm();
    const [data, setData] = useState(tarifs);
  
    const [editingKey, setEditingKey] = useState("");
    const removeTarif = (id) => {
      dispatch(deleteTarif(id))
        .then((response) => {
          console.log(response);
          refreshData();
        })
        .catch((e) => {
          console.log(e);
        });
    };
    const update = (data, keyid) => {
      dispatch(updateTarif(data, keyid))
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    };
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
    const isEditing = (record) => record.id === editingKey;
    useEffect(() => {
      getSizes();
    }, []);
    const edit = (record) => {
      form.setFieldsValue({
        duration :"",
        price:"",
        display:"",
        idsize:"",
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
        const newData = [...tarifs];
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
        title: "duration",
        dataIndex: "duration",
        editable: true,
      },
      {
        title: "price",
        dataIndex: "price",
        render : (price)=> <div>{price}€</div>, 
        editable: true,
        defaultSortOrder: "descend",
        onFilter: (value, record) => record.price.indexOf(value) === 0,
        // sorter: (a, b) => a.price.length - b.price.length,
      },
      {
        title: "display",
        dataIndex: "display",
        render: (display) => {
          if (display===1) {
          return  <Tag color="green">Affiché au client</Tag>; 
          } else {
            return <Tag color="red">Masqué</Tag>
          }
        },
        editable: true,
        defaultSortOrder: "descend",
        onFilter: (value, record) => record.display.indexOf(value) === 0,
        // sorter: (a, b) => a.display.length - b.display.length,
      },
      {
        title: "sizes",
      dataIndex: "sizes",
     
      render: (sizes) => <span>{sizes?.name}</span>,
        // sorter: (a, b) => a.idsize.length - b.idsize.length,
      },
      {
        title: "action",
        dataIndex: "id",
        render: (id) => (
          <Space size="middle">
            <Button onClick={() => removeTarif(id)}>Delete</Button>
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
      console.log(tarifs);
    }, [tarifs]);
  
    useEffect(() => {
      dispatch(ReadTarif());
    }, []);
  
    const refreshData = () => {
      setCurrentTarif(null);
      setCurrentIndex(-1);
    };
    //   const setActiveBox = (cabine, index) => {
    //     setCurrentBox(box);
    //     setCurrentIndex(index);
    //   };
  
    const removeAllTarif = () => {
      dispatch(deleteAllTarif())
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
          <Typography.Title>Tarif List:</Typography.Title>
          <Form form={form} component={false}>
            <Table
              components={{
                body: {
                  cell: EditableCell,
                },
              }}
              bordered
              dataSource={tarifs}
              columns={mergedColumns}
              rowClassName="editable-row"
              onChange={onChange}
              pagination={{
                pageSize: 5,
                onChange: cancel,
              }}
            />
          </Form>
        </div>
        <Button onClick={removeAllTarif} danger>
          Delete All
        </Button>
      </>
    );
  };
  
  export default ListTarifs;
  