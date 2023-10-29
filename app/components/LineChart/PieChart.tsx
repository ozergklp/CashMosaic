'use client'

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Pie } from 'react-chartjs-2';
import ChartBackgroundPlugin from './ChartBackgroundPlugin';
import { expense } from '@/app/types/Expense';

ChartJS.register(ArcElement, Tooltip, Legend,ChartBackgroundPlugin);

export const options = {
    responsive: true,
    chartArea: {
        backgroundColor: 'rgba(251, 85, 85, 0.4)'
    },
    plugins: {

    
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

    //const expenses_state = useSelector((state: RootState) => state.expenses.expenses);
    const labels1 = expenses_state.map(expense => expense.name);
    const data  = {
        labels: labels1,
        datasets: [
            {
                label: 'Data',
                data: expenses_state.map(expense => expense.amount),
                fill: false,
                borderColor: [  'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',],
                backgroundColor: [  'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',],
                },
            ],
        };
    




    return (
        <section className='h-[500px] mr-1 w-[400px] sm:w-[820px] mb-14'>
            <Pie  options={options}  data={data} height={200} width={720}  />
        </section>
    );
        

}