import {AxisModel,Category,ChartComponent,Inject,SeriesCollectionDirective, SeriesDirective, StackingBarSeries} from'@syncfusion/ej2-react-charts';
import React from 'react';
import ReactDOM from '../../../Library/Caches/typescript/4.6/node_modules/@types/react-dom';
import {dataSource} from './data.js';

class App {
  
  public render() {
    return <ChartComponent id='charts' primaryXAxis={{valueType:"Category" ,title:"Day"}} primaryYAxis={{title:"Check In"}} Legend={{visible:true}}  tooltip={{enable:true}}>
      <Inject services={[StackingBarSeries, Category]} />
      <SeriesCollectionDirective>
      <SeriesDirective dataSource={dataSource} xName='year' yName='staff_affiliation' type='StackingBar'/>
      <SeriesDirective dataSource={dataSource} xName='year' yName='undergrad' type='StackingBar'/>
      </SeriesCollectionDirective>
    </ChartComponent>
  }
};
ReactDOM.render(
  <App />,
  document.getElementById('charts') as HTMLElement
);