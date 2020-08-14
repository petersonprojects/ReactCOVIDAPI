

import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';

class Chart extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            chartReference: React.createRef()
        }
    }
        
    componentDidMount() 
    {
        console.log(this.state.chartReference); // returns a Chart.js instance reference
    }

    render() {
        const data = (canvas) => {
            const ctx = canvas.getContext("2d")
            const gradient = ctx.createLinearGradient(0,0,100,0);

            return {
                backgroundColor: gradient
            }
        }

        return (

                <Bar 

                    data={data}
                    width={100}
                    height={50}
                    options={{ maintainAspectRatio: false }}

                />
        )
    }
}

export default Chart
