import { Category, ChartComponent ,DataLabel,Inject,Legend,LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import './demo.css';

function demo(){

    const gymData = [
      {month:'SUN',waste:125},
      {month:'MON',waste:125},
      {month:'TUE',waste:130},
      {month:'WED',waste:124},
      {month:'THR',waste:127},
      {month:'FRI',waste:117},
      {month:'SAT',waste:111},
    ];
  
    return (
      <div className="demo">
        <ChartComponent title='All Facility Check In By Day' primaryXAxis={{valueType:"Category" ,title:"Day"}} primaryYAxis={{title:"Check In"}} Legend={{visible:true}}  tooltip={{enable:true}}>
          <Inject services={[LineSeries,Category,Legend,DataLabel,Tooltip]}></Inject>
          <SeriesCollectionDirective>
            <SeriesDirective type='Line' dataSource={gymData} xName="day" yName='checkIn' name='Check In Average' marker={{dataLabel:{visible:true},visible:true}}>
            </SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    );
  }
  
export default demo;
  