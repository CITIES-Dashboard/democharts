import { Category, ChartComponent ,DataLabel,Inject,Legend,LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import './App.css';

function App() {

  const wasteData = [
    {month:'Jan',waste:35},{month:'Feb',waste:28},
    {month:'Mar',waste:38},{month:'Apr',waste:28},
    {month:'May',waste:34},{month:'Jun',waste:45},
    {month:'Jul',waste:12},{month:'Aug',waste:28},
    {month:'Sep',waste:11},{month:'Oct',waste:48},
    {month:'Nov',waste:20},{month:'Dec',waste:28}
  ];

  return (
    <div className="App">
      <ChartComponent title='D2 Food Wastage' primaryXAxis={{valueType:"Category" ,title:"Month"}} primaryYAxis={{title:"Wastage"}} Legend={{visible:true}}  tooltip={{enable:true}}>
        <Inject services={[LineSeries,Category,Legend,DataLabel,Tooltip]}></Inject>
        <SeriesCollectionDirective>
          <SeriesDirective type='Line' dataSource={wasteData} xName="month" yName='waste' name='Wastage' marker={{dataLabel:{visible:true},visible:true}}>
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}


export default App;
