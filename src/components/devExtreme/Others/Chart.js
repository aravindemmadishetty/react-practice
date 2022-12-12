import React from 'react';
import Chart, {
    CommonSeriesSettings,
    Series,
    SeriesTemplate
} from 'devextreme-react/chart';
 
const fruitProduction = [
    { fruit: "Apples",  year2014: 84, year2015: 82, year2016: 90 },
    { fruit: "Oranges", year2014: 72, year2015: 70, year2016: 76 }
];

const fruitProduction2 = [
    { fruit: "Apples", year: 2014, produced: 84 },
    { fruit: "Apples", year: 2015, produced: 82 },
    { fruit: "Apples", year: 2016, produced: 90 },
    { fruit: "Oranges", year: 2014, produced: 72 },
    { fruit: "Oranges", year: 2015, produced: 70 },
    { fruit: "Oranges", year: 2016, produced: 76 }
];
 
const ChartComponent = () => {

    const customizeSeries = (seriesName)=> {
        return seriesName === 2016 ? { type:"line"}: {};
    }
    return (
        <>
            <h2>Chart</h2>
            <Chart
                dataSource={fruitProduction}
            >
                <CommonSeriesSettings argumentField={"fruit"}/>
                <Series
                    valueField="year2014"
                    name="2014"
                    hoverMode="allSeriesPoints"
                />
                <Series
                    valueField="year2015"
                    name="2015"
                    hoverMode="includePoints"
                />
                <Series
                    valueField="year2016"
                    name="2016"
                />
            </Chart>
            <h2> Chart - 2</h2>
            <Chart
                dataSource={fruitProduction2}
            >
                <CommonSeriesSettings 
                    argumentField={"fruit"}
                    valueField={"produced"}
                    type="bar"
                />
                <SeriesTemplate
                    nameField={"year"}
                    customizeSeries={customizeSeries}
                />
            </Chart>
        </>
    );
};
 
export default ChartComponent;