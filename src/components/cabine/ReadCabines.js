import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button , Typography, Table, Tag, Space} from "antd";

import { ReadCabine } from "../../store/actions/cabineActions";
import cabine from "../../api/cabine";

const ListCabines = () => {
    const [currentCabine, setCurrentCabine] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
  const cabines = useSelector((state) => state.cabines.cabine);
  


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
      onFilter: (value, record) => record.reference.indexOf(value) === 0,
      sorter: (a, b) => a.reference.length - b.reference.length,
      sortDirections: ['descend'],
    },
    {
      title: 'name',
      dataIndex: 'name',
      defaultSortOrder: 'descend',
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
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

//   const removeAllBoxes = () => {
//     dispatch(deleteAllBox())
//       .then(response => {
//         console.log(response);
//         refreshData();
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (
    <>
   <div>
    <Typography.Title>Cabines List:</Typography.Title>
    <Table columns={columns} dataSource={cabines} onChange={onChange} />
   </div>
    </>
  );
};

export default ListCabines;