
// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import numeral from "numeral";
// // import moment from "moment";
// import { Button, ButtonGroup } from "@material-ui/core";
// import { Grid } from "@material-ui/core";

// const options = {
//   plugins: {
//     legend: {
//       display: false,
//     },

//     elements: {
//       point: {
//         radius: 0,
//       },
//     },

//     maintainAspectRatio: true,
//     tooltips: {
//       mode: "index",
//       intersect: false,
//       callbacks: {
//         label: function (tooltipItem, data) {
//           return numeral(tooltipItem.value).format("+0,0");
//         },
//       },
//     },
//   },
//   animations: {
//     tension: {
//       duration: 1000,
//       easing: "linear",
//       from: 1,
//       to: 0,
//       loop: true,
//     },
//   },
//   scales: {
//     xAxes: [
//       {
//         type: "time",
//         time: {
//           format: "MM/DD/YY",
//           tooltipFormat: "LL",
//         },
//       },
//     ],
//     yAxes: [
//       {
//         gridLines: {
//           display: false,
//         },
//         ticks: {
//           callback: function (value, index, values) {
//             return numeral(value).format("0a");
//           },
//         },
//       },
//     ],
//   },
// };
// export default function LineChartVaccine({ casesType  ,vaccineCountry}) {
//   // console.log(vaccineCountry)
//   const [data, setData] = useState({});
//   const [reportType, setReportType] = useState("all");
//   const buildChartData = (data, casesType) => {
//     console.log(data)
//     let chartData = [];
//     let lastDataPoint;
//     if (data) {
//       for (let date in data) {
//         if (lastDataPoint) {
//           let newDataPoint = {
//             x: date,
//             y: data[casesType][date] - lastDataPoint,
//           };
//           chartData.push(newDataPoint);
//         }
//         lastDataPoint = data[casesType][date];
//       }
//       return chartData;
//     }
//     // let new_data = data.map((item)=>{
//     //   let p =[] 
//     //   let timeline = item?.timeline
//     //   if(!timeline){
//     //     return null;
//     //   }
//     //   for(let k in timeline){
//     //     p.push({
//     //       x:k,
//     //       y:timeline[k]
//     //     })
//     //   }
//     //   let d = {
//     //     ...item,
//     //     p
//     //   }
//     //   delete d.timeline;
//     //   return d
//     // })
//     // return new_data
//   }
//   useEffect(() => {
//     const fetchData= async () => {
//       await fetch(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${vaccineCountry}?lastdays=60`)
//       .then((response) => response.json())
//       .then((data)=>{
//         console.log(data.timeline)
//         //  let chartData = buildChartData(data.timeline || {}, casesType);
//         //   let customData = [];
//         //   switch (reportType) {
//         //     case "all":
//         //       customData = chartData;
//         //       break;
//         //     case "Yesterday":
//         //       customData = chartData.slice(Math.max(chartData.length - 2, 1));

//         //       break;
//         //     case "30":
//         //       customData = chartData.slice(Math.max(chartData.length - 30, 1));
//         //       break;
//         //     case "7":
//         //       customData = chartData.slice(Math.max(chartData.length - 7, 1));
//         //       break;

//         //     default:
//         //       customData = chartData;
//         //       break;
//         //   }
//         //   setData(customData);
//       })
//     }
         
//           fetchData();

//   }, [  reportType , vaccineCountry]);
//   // console.log(data)
//   return (
//     <div>
//       {/* <p className="description">{moment().format("LLLL")}</p> */}
//       <Grid container spacing={3}>
//         <Grid item sm={6} xs={12}>
//           <h2 style={{ marginBottom: 20 }}>
//             {/* {countryInfo.country} new {casesType} */}
//           </h2>
//         </Grid>
//         <Grid
//           item
//           sm={6}
//           xs={12}
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <ButtonGroup
//             variant="contained"
//             aria-label=" large outlined button group"
//             style={{
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <Button
//               color={reportType === "all" ? "secondary" : ""}
//               onClick={() => setReportType("all")}
//             >
//               <h5>All</h5>
//             </Button>
//             <Button
//               color={reportType === "Yesterday" ? "secondary" : ""}
//               onClick={() => setReportType("Yesterday")}
//             >
//               <h5>Yesterday</h5>
//             </Button>
//             <Button
//               color={reportType === "7" ? "secondary" : ""}
//               onClick={() => setReportType("7")}
//             >
//               <h5>7 days</h5>
//             </Button>
//             <Button
//               color={reportType === "30" ? "secondary" : ""}
//               onClick={() => setReportType("30")}
//             >
//               <h5>30 days</h5>
//             </Button>
//           </ButtonGroup>
//         </Grid>
//       </Grid>

//        {/* {data?.length > 0 && (
//         <Line
//           data={{
//             datasets: [
//               {
//                 backgroundColor: '#DF0029',
//                 borderColor: '#DF0029',
//                 borderWidth: 1,

//                 data: data,
//               },
//             ],
//           }}
//           options={options}
//         />
//       )}  */}
//     </div>
//   );
// }
