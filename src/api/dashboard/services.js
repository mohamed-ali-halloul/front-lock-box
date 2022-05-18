import http from './index';
const getlistpayment= ()=>{
 return http.get("/payment-list")
    .then(res=>{
        console.log(res.data);
        return res;
    })
      .catch(e => {
        console.log(e);
      });
};
const getnumBoxes=()=>{
  return http.get("/box-available")
  .then(res=>{
    console.log(res.data);
    return res;
})
  .catch(e => {
    console.log(e);
  });
}
const getboxesnumber=()=>{
  return http.get("/box-number")
  .then(res=>{
    console.log(res.data);
    return res;
})
  .catch(e => {
    console.log(e);
  });
}
const getcabinesnumber=()=>{
  return http.get("/cabines-working")
  .then(res=>{
    console.log(res.data);
    return res;
  })
  .catch(e=>{
    console.log(e);
  });
}
const dashboardService={
    getlistpayment,
    getnumBoxes,
    getboxesnumber,
    getcabinesnumber
};
export default dashboardService;