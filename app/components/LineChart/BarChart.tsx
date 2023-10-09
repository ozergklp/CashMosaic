'use client'

import React, { useEffect, useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    BarElement,
    Legend,
} from 'chart.js';



import {  Chart } from 'react-chartjs-2';
import ChartBackgroundPlugin from './ChartBackgroundPlugin';
import { expense } from '@/app/types/Expense';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ChartBackgroundPlugin
);


export const options = {
    responsive: true,
    chartArea: {
        backgroundColor: 'rgba(251, 85, 85, 0.4)'
    },
    plugins: {

    legend: {
        position: 'top' as const,
    },
    },
    maintainAspectRatio: false,
    scales: {
        x: {

        },
        y: {
            
        },
    },
};



export default function LineChart({props, expenses_state} : {props: string, expenses_state: expense[]}) {
    const chartRef = useRef<ChartJS>(null);

    useEffect(() => {
        const chart = chartRef.current  ;
        
        if (chart) {
            const ctx = chart.ctx;
            const canvas = chart.canvas;
        }
    }, []);

    //const expenses_state = useSelector((state: RootState) => state.expenses.expenses);
    const labels1 = expenses_state.map(expense => expense.name);
    const data  = {
        labels: labels1,
        datasets: [
            {
                label: 'All',
                data: expenses_state.map(expense => expense.amount),
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
            ],
        };
    




    return (
        <section className='h-[500px] mr-3 '>
            <Chart  ref={chartRef} options={options} type='bar' data={data} height={200} width={620}  />
        </section>
    );
        

}