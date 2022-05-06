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
const dashboardService={
    getlistpayment
};
export default dashboardService;