import React from 'react'
import { Chart, Category, ChartComponent ,DataLabel,Inject,Legend,LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip, StackingColumnSeries} from '@syncfusion/ej2-react-charts';
import './App.css';
import {dataSource} from './data.js';

Chart.Inject(Chart, StackingColumnSeries, Category, Tooltip, Legend);


function App(){
  // add(){
  //   this.chartInstance.addSeries([
  //     { type: 'Line',
  //       dataSource: {gymData},
  //       xName: 'day',
  //       yName: 'total'},
  //     ]);
  // };

  return (
      <div className="App">
        <ChartComponent title='All Facility Check In By Day' primaryXAxis={{valueType:"Category" ,title:"Day"}} primaryYAxis={{title:"Check In"}} Legend={{visible:true}}  tooltip={{enable:true}}>
          <Inject services={[LineSeries,Category,Legend,DataLabel,Tooltip]}></Inject>
          <SeriesCollectionDirective>
            <SeriesDirective type='Line' dataSource={dataSource} xName="year" yName='staff_affiliation' name='Staff Affiliation' marker={{dataLabel:{visible:true},visible:true}} >
            </SeriesDirective>
            <SeriesDirective type='Line' dataSource={dataSource} xName="year" yName='undergrad' name='Undergrad' marker={{dataLabel:{visible:true},visible:true}}>
            </SeriesDirective>
            <SeriesDirective type='Line' dataSource={dataSource} xName="year" yName='grad_alumni' name='Grad and Alumni' marker={{dataLabel:{visible:true},visible:true}}>
            </SeriesDirective>
            <SeriesDirective type='Line' dataSource={dataSource} xName="year" yName='visitors' name='Visitors' marker={{dataLabel:{visible:true},visible:true}}>
            </SeriesDirective>

          </SeriesCollectionDirective>
        </ChartComponent>

      <ChartComponent id='charts' primaryXAxis={{valueType:"Category" ,title:"Year"}} primaryYAxis={{title:"Check In"}} Legend={{visible:true}}  tooltip={{enable:true}}>
        <Inject services={[StackingColumnSeries, Category, Tooltip, DataLabel, Legend]} />
        <SeriesCollectionDirective>
        <SeriesDirective dataSource={dataSource} xName='year' yName='staff_affiliation' name='2018' type='StackingColumn' marker={{ dataLabel:{visible:true}, visible:true}} cornerRadius={
                {bottomLeft:10, bottomRight: 10}}/>
        <SeriesDirective dataSource={dataSource} xName='year' yName='undergrad' name='2019'  type='StackingColumn' marker={{dataLabel:{visible:true}, visible:true}}/>
        <SeriesDirective dataSource={dataSource} xName='year' yName='grad_alumni'name='2020' type='StackingColumn' marker={{dataLabel:{visible:true}, visible:true}}/>
        <SeriesDirective dataSource={dataSource} xName='year' yName='visitors' name='2021'type='StackingColumn' marker={{dataLabel:{visible:true}, visible:true}}cornerRadius={
                {topLeft:10, topRight: 10}}/>
        </SeriesCollectionDirective>
      </ChartComponent>

      </div>


    );
  }

export default App;
  
