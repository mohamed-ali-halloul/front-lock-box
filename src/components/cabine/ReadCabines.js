import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button , Typography, Table, Tag, Space} from "antd";
import "./ReadCabines.css";
import { deleteAllCabine, deleteCabine, ReadCabine } from "../../store/actions/cabineActions";
import cabine from "../../api/cabine";

const ListCabines = () => {
    const [currentCabine, setCurrentCabine] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
  const cabines = useSelector((state) => state.cabines.cabine);
  
const removeCabine=(id)=>{
  dispatch(deleteCabine(id))
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
      // sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'action',
      dataIndex: 'id',
      render: (id) => (
        <Space size="middle">
          
          <Button onClick={()=>removeCabine(id)}>Delete</Button>
          <Button>Update</Button>
        </Space>
      ),
    },
   
  ];

  
  const dispatch = useDispatch();
  useEffect(() => {console.log(cabines);
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
    <Typography.Title>Cabines List:</Typography.Title>
    <Table columns={columns} dataSource={cabines} onChange={onChange} />
   </div>
   <Button  onClick={removeAllCabines} danger>Delete All</Button>
    </>
  );
};

export default ListCabines;