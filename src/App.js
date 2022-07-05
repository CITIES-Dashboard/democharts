import React from 'react'
import { Chart, Category, ChartComponent ,DataLabel,Inject,Legend,LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip, StackingColumnSeries} from '@syncfusion/ej2-react-charts';
import './App.css';
import {dataSource} from './data.js';
import {dataS} from './data2.js';

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
        <ChartComponent title='All Facility Check In By Day' primaryXAxis={{valueType:"Category" ,title:"Year"}} primaryYAxis={{title:"Check In"}} Legend={{visible:true}}  tooltip={{enable:true}}>
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
        <SeriesDirective dataSource={dataSource} xName='year' yName='staff_affiliation' name='Staff Affiliation' type='StackingColumn' marker={{ dataLabel:{visible:true}, visible:true}} cornerRadius={
                {bottomLeft:10, bottomRight: 10}}/>
        <SeriesDirective dataSource={dataSource} xName='year' yName='undergrad' name='Undergraduate'  type='StackingColumn' marker={{dataLabel:{visible:true}, visible:true}}/>
        <SeriesDirective dataSource={dataSource} xName='year' yName='grad_alumni'name='Graduate/Alumni' type='StackingColumn' marker={{dataLabel:{visible:true}, visible:true}}/>
        <SeriesDirective dataSource={dataSource} xName='year' yName='visitors' name='Visitors'type='StackingColumn' marker={{dataLabel:{visible:true}, visible:true}}cornerRadius={
                {topLeft:10, topRight: 10}}/>
        </SeriesCollectionDirective>
      </ChartComponent>

      <ChartComponent id='charts2' primaryXAxis={{valueType:"Category" ,title:"Year"}} primaryYAxis={{title:"Check In"}} Legend={{visible:true}}  tooltip={{enable:true}}>
        <Inject services={[StackingColumnSeries, Category, Tooltip, DataLabel, Legend]} />
        <SeriesCollectionDirective>
        <SeriesDirective dataSource={dataS} xName='year' yName='tamkeen' name='Tamkeen' type='StackingColumn' marker={{ dataLabel:{visible:true}, visible:true}} cornerRadius={
                {bottomLeft:10, bottomRight: 10}}/>
        <SeriesDirective dataSource={dataS} xName='year' yName='guest' name='Guests'  type='StackingColumn' marker={{dataLabel:{visible:true}, visible:true}}/>
        <SeriesDirective dataSource={dataS} xName='year' yName='external' name='External Instructors'  type='StackingColumn' marker={{dataLabel:{visible:true}, visible:true}}/>
        <SeriesDirective dataSource={dataS} xName='year' yName='contract' name='Contract'  type='StackingColumn' marker={{dataLabel:{visible:true}, visible:true}}/>
        <SeriesDirective dataSource={dataS} xName='year' yName='staff' name='Staff'  type='StackingColumn' marker={{dataLabel:{visible:true}, visible:true}}/>
        <SeriesDirective dataSource={dataS} xName='year' yName='family' name='Family'  type='StackingColumn' marker={{dataLabel:{visible:true}, visible:true}}/>
        <SeriesDirective dataSource={dataS} xName='year' yName='faculty' name='Faculty'  type='StackingColumn' marker={{dataLabel:{visible:true}, visible:true}}/>        
        <SeriesDirective dataSource={dataS} xName='year' yName='grad' name='Graduate Students'  type='StackingColumn' marker={{dataLabel:{visible:true}, visible:true}}/>
        <SeriesDirective dataSource={dataS} xName='year' yName='alumni'name='Alumni' type='StackingColumn' marker={{dataLabel:{visible:true}, visible:true}}/>
        <SeriesDirective dataSource={dataS} xName='year' yName='student' name='Undergraduate Students'type='StackingColumn' marker={{dataLabel:{visible:true}, visible:true}}cornerRadius={
                {topLeft:10, topRight: 10}}/>
        </SeriesCollectionDirective>
      </ChartComponent>

      </div>


    );
  }

export default App;
  
