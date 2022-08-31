import React from 'react'
import ReactApexChart from 'react-apexcharts';

const CircleChart = () => {

    const chartOptions = {
        series: [40],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    startAngle: -175,
                    endAngle: 180,
                    hollow: {
                        margin: 0,
                        size: '70%',
                        background: '#fff',
                        image: undefined,
                        imageOffsetX: 0,
                        imageOffsetY: 0,
                        position: 'front',
                        dropShadow: {
                            enabled: true,
                            top: 1,
                            left: 0,
                            blur: 1,
                            opacity: 0.24
                        }
                    },
                    track: {
                        background: '#EDEDED',
                        strokeWidth: '67%',
                        margin: 0, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: 0,
                            left: 0,
                            blur: 1,
                            opacity: 0.35
                        }
                    },

                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: 30,
                            show: true,
                            color: '#191C1B',
                            fontSize: '17px'
                        },
                        value: {
                            offsetY: -20,
                            formatter: function (val) {
                                return val + "%";
                            },
                            color: '#111',
                            fontSize: '40px',
                            show: true,
                        }
                    }
                }
            },
            fill: {
                colors: ['#191C1B'],
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#717171'],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Terkumpul'],
        },
    };

    return (
        <>
            <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="radialBar" height={250} width={250} />
        </>
    )
}

export default CircleChart