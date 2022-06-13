// import { Category, ChartComponent ,DataLabel,Inject,Legend,LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
// import './App.css';

// function App() {

//   const wasteData = [
//     {month:'Jan',waste:35},{month:'Feb',waste:28},
//     {month:'Mar',waste:38},{month:'Apr',waste:28},
//     {month:'May',waste:34},{month:'Jun',waste:45},
//     {month:'Jul',waste:12},{month:'Aug',waste:28},
//     {month:'Sep',waste:11},{month:'Oct',waste:48},
//     {month:'Nov',waste:20},{month:'Dec',waste:28}
//   ];

//   return (
//     <div className="App">
//       <ChartComponent title='D2 Food Wastage' primaryXAxis={{valueType:"Category" ,title:"Month"}} primaryYAxis={{title:"Wastage"}} Legend={{visible:true}}  tooltip={{enable:true}}>
//         <Inject services={[LineSeries,Category,Legend,DataLabel,Tooltip]}></Inject>
//         <SeriesCollectionDirective>
//           <SeriesDirective type='Line' dataSource={wasteData} xName="month" yName='waste' name='Wastage' marker={{dataLabel:{visible:true},visible:true}}>
//           </SeriesDirective>
//         </SeriesCollectionDirective>
//       </ChartComponent>
//     </div>
//   );
// }


// export default App;

import { Category, ChartComponent ,DataLabel,Inject,Legend,LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip} from '@syncfusion/ej2-react-charts';
import './App.css';
import {arr} from './data.js';

function App(){
    // const gymData = [
    //   {day:'SUN',checkIn:125},
    //   {day:'MON',checkIn:125},
    //   {day:'TUE',checkIn:130},
    //   {day:'WED',checkIn:124},
    //   {day:'THR',checkIn:127},
    //   {day:'FRI',checkIn:117},
    //   {day:'SAT',checkIn:111},
    // ];
  // add(){
  //   this.chartInstance.addSeries([
  //     { type: 'Line',
  //       dataSource: {gymData},
  //       xName: 'day',
  //       yName: 'total'},
  //     ]);
  // };
  console.log(arr);
    return (
      <div className="App">
        <ChartComponent title='All Facility Check In By Day' primaryXAxis={{valueType:"Category" ,title:"Day"}} primaryYAxis={{title:"Check In"}} Legend={{visible:true}}  tooltip={{enable:true}}>
          <Inject services={[LineSeries,Category,Legend,DataLabel,Tooltip]}></Inject>
          <SeriesCollectionDirective>
            <SeriesDirective type='Line' dataSource={arr} xName="year" yName='staff_affiliation' name='Staff Affiliation' marker={{dataLabel:{visible:true},visible:true}} >
            </SeriesDirective>
            <SeriesDirective type='Line' dataSource={arr} xName="year" yName='undergrad' name='Undergrad' marker={{dataLabel:{visible:true},visible:true}}>
            </SeriesDirective>
            <SeriesDirective type='Line' dataSource={arr} xName="year" yName='grad_alumni' name='Grad and Alumni' marker={{dataLabel:{visible:true},visible:true}}>
            </SeriesDirective>
            <SeriesDirective type='Line' dataSource={arr} xName="year" yName='visitors' name='Visitors' marker={{dataLabel:{visible:true},visible:true}}>
            </SeriesDirective>

          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    );
  }

export default App;
  
