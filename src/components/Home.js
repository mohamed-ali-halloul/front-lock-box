import { Typography, Row , Card, Col,Statistic} from 'antd';
import React, {useEffect,useState} from 'react';
import dashboardService from '../api/dashboard/services';
import { useSelector } from 'react-redux';
import {ExclamationCircleOutlined} from'@ant-design/icons';


import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

  
  export default function Home (){
   const [count,setCount]=useState(0);
   const[num,setNum]=useState(0);
   const[nbre,setNbre]=useState(0);
   const[boxesnumber,setBoxesNumber]=useState([]);
   const cabines = useSelector((state) => state.cabines);
   let tabledata={
     name: null,
     nbre_box:null
   };
const [data,setData] = useState([]);
useEffect(()=>{console.log(data);},[data]);
 useEffect(()=>{
  console.log(boxesnumber);
  boxesnumber?.map((obj)=>{
    console.log(obj);
    setData((oldData)=> [...oldData,{name:obj.id,nbre_box:obj.count}])
  })
 },[boxesnumber]);

   const { Title, Text } = Typography;
   const numberboxes=async()=>{
     let test =await dashboardService.getboxesnumber()
  
      setBoxesNumber(test?.data) }
    const boxnumber=async()=>{
      let test = await dashboardService.getnumBoxes()
     
      setNum(test?.data?.count)
    }
    const cabinenumber=async()=>{
      let test = await dashboardService.getcabinesnumber()
      setNbre(test?.data?.count)
    }
    const paymentList=async() => {
    
      let test= await dashboardService.getlistpayment()
      console.log(test);
      setCount(test?.data?.count)
    }
 

    useEffect(() => {
      console.log(localStorage.getItem("token"));
      paymentList();
      boxnumber();
      numberboxes();
      cabinenumber();
    
      console.log(data);
      },[]);
    

  return (<div> <p>Welcome to Home Page of Lock box</p>
    
     <div className="site-statistic-demo-card">
    <Row gutter={16}>
      <Col span={4}>
        <Card>
          <Statistic
            title="Total Payment"
            value={count}
           
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
      </Col>
      <Col span={4}>
        <Card>
          <Statistic
            title="BOX RESERVED"
            value={num}
           prefix={<ExclamationCircleOutlined />}
            valueStyle={{ color: 'red' }}
          />
        </Card>
      </Col>
      <Col span={4}>
        <Card>
          <Statistic
            title="CABINE WORKED"
            value={nbre}
           prefix={<ExclamationCircleOutlined />}
            valueStyle={{ color: 'red' }}
          />
        </Card>
      </Col>
      </Row>
      </div>
      <div className="card-box">
    <Row gutter={16}>
  
      </Row>
      </div>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="nbre_box" fill="#4fd1b1" />
         
        </BarChart>
      {/* </ResponsiveContainer> */}
     
  </div>
  
   )};
    
