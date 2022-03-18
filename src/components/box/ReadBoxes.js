import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReadBox, deleteAllBox, DeleteBox } from "../../store/actions/boxActions";
import { Button , Typography, Table,  Space} from "antd";
import CabineService from "../../api/cabine/services";

const ListBoxes = () => {
    const [currentBox, setCurrentBox] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [cabines, setCabines] = useState([]);
    const refreshData = () => {
      setCurrentBox(null);
      setCurrentIndex(-1);
    };
  const boxes = useSelector((state) => state.boxe.box);
  const dispatch = useDispatch();
  const getCabines = () => {
    CabineService.getAll()
      .then((res) => {
        setCabines(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getCabines();
  }, []);
  const removeBox=(id)=>{
    dispatch(DeleteBox(id))
        .then(response => {
          console.log(response);
          refreshData();
        })
        .catch(e => {
          console.log(e);
        });
  }
  const columns = [
    {
      title: 'ref',
      dataIndex: 'ref',
      filters: [
        {
          text: 'hs001',
          value: 'hs001',
        },
        {
          text: 'sou005',
          value: 'sou005',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.ref.indexOf(value) === 0,
      sorter: (a, b) => a.ref.length - b.ref.length,
      sortDirections: ['descend'],
    },
    {
      title: 'name',
      dataIndex: 'name',
      defaultSortOrder: 'descend',
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'size',
      dataIndex: 'size',
      filters: [
        {
          text: 'Small',
          value: 'Small',
        },
        {
          text: 'Big',
          value: 'Big',
        },
      ],
      onFilter: (value, record) => record.size.indexOf(value) === 0,
    },
    {
      title: 'price',
      dataIndex: 'price',
      defaultSortOrder : 'descend',
      sorter: (a, b) => a.Price - b.Price
    },
    {
      title: 'idcabine',
      dataIndex: 'idcabine',
      defaultSortOrder : 'descend',
      sorter: (a, b) => a.idcabine - b.idcabine
    },
    {
      title: 'action',
      dataIndex: 'id',
      render: (id) => (
        <Space size="middle">
          
          <Button onClick={()=>removeBox(id)}>Delete</Button>
          <Button>Update</Button>
        </Space>
      ),
    },
  ];

  

  useEffect(() => {
    dispatch(ReadBox());
  }, []);

 
  const setActiveBox = (box, index) => {
    setCurrentBox(box);
    setCurrentIndex(index);
  };

  const removeAllBoxes = () => {
    dispatch(deleteAllBox())
      .then(response => {
        console.log(response);
        refreshData();
      })
      .catch(e => {
        console.log(e);
      });
  };
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (
    <>
   <div>
    <Typography.Title>Boxes List:</Typography.Title>
    <Table columns={columns} dataSource={boxes} onChange={onChange} />
     
   </div>

   <Button  onClick={removeAllBoxes} danger>Delete All</Button>
    </>
  );
};

export default ListBoxes;