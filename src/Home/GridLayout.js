import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import styles from "./homepage.module.scss"

import { Pie, Doughnut, Bar } from 'react-chartjs-2';
import { List, Progress } from 'antd';

import { data } from '../data'

const ResponsiveGridLayout = WidthProvider(Responsive);

const allExpenses = Math.abs(data.filter(data => data.type === "Expense").reduce(((acc, curr) => acc + curr.money), 0));
const allIncomes = data.filter(data => data.type === "Income").reduce(((acc, curr) => acc + curr.money), 0);


export default function GridLayout() {

    const layout = [
        { i: "a", x: 0, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
        { i: "b", x: 4, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
        { i: "c", x: 8, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
        { i: "d", x: 0, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
        { i: "e", x: 4, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
        { i: "f", x: 8, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
    ];

    return (
        <div className={styles.gridContainer} style={{ background: "rgb(245, 245, 245)" }}>

            <ResponsiveGridLayout className="layout"
                layouts={layout}
                breakpoints={{ lg: 1200 }}
                cols={{ lg: 12 }}
                rowHeight={281}
                width={1200}>

                <div
                    key="a"
                    data-grid={{ i: "a", x: 0, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.firstWidgetContainer}
                >
                    <Doughnut
                        data={{
                            labels: ["Income", "Expense"],
                            datasets: [
                                {
                                    label: '# of votes',
                                    data: [allIncomes, allExpenses],
                                    backgroundColor: [
                                        'rgba(75, 192, 192)',
                                        'rgba(153, 102, 255)',
                                        'rgba(255, 159, 64)',
                                        'rgba(54, 162, 235)',
                                        'rgba(255, 99, 132)',
                                        'rgba(255, 206, 86)',
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)',
                                    ],
                                    borderWidth: 1,
                                },
                            ],
                        }}
                        height={200}
                        width={200}
                        options={{
                            maintainAspectRatio: false,
                            tooltips: {
                                callbacks: {
                                    label: function(tooltipItem, data) {
                                        var label = data.datasets[tooltipItem.datasetIndex].label || '';
                    
                                        if (label) {
                                            label += ': ';
                                        }
                                        label += Math.round(tooltipItem.yLabel * 100) / 100;
                                        return label;
                                    }
                                }
                            }
                        }}
                    />
                </div>

                <div
                    key="b"
                    data-grid={{ i: "b", x: 4, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                >
                    <div>
                        <h2>Cash Flow</h2>

                        <div>
                            <h3>Income:</h3>
                            <Progress percent={50} showInfo={false} />
                        </div>

                        <div>
                            <h3>Expense:</h3>
                            <Progress percent={80} showInfo={false} />
                        </div>
                    </div>
                </div>

                <div
                    key="c"
                    data-grid={{ i: "c", x: 8, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                    className={styles.homePageLastRecordsContainer}
                >
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={item.type}
                                    description={item.title}

                                />
                                <div className={styles.priceContainer}>{item.money}лв</div>
                            </List.Item>
                        )}
                    />
                </div>

                <div
                    key="d"
                    data-grid={{ i: "d", x: 0, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "red" }}
                >
                </div>

                <div
                    key="e"
                    data-grid={{ i: "e", x: 4, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                >
                    <Pie
                        data={{
                            labels: data.filter(data => data.type == "Expense").map(data => data.title),
                            datasets: [
                                {
                                    label: '# of votes',
                                    data: data.filter(data => data.type == "Expense").map(data => data.money),
                                    backgroundColor: [
                                        'rgba(75, 192, 192)',
                                        'rgba(153, 102, 255)',
                                        'rgba(255, 159, 64)',
                                        'rgba(54, 162, 235)',
                                        'rgba(255, 99, 132)',
                                        'rgba(255, 206, 86)',
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)',
                                    ],
                                    borderWidth: 1,
                                },
                            ],
                        }}
                        height={200}
                        width={200}
                        options={{
                            maintainAspectRatio: false,
                        }}
                    />
                </div>

                <div
                    key="f"
                    data-grid={{ i: "f", x: 8, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 }}
                    style={{ background: "white" }}
                >
                    <Bar
                        data={{
                            labels: data.filter(data => data.type == "Income").map(data => data.title),
                            datasets: [
                                {
                                    label: 'Income Structure',
                                    data: data.filter(data => data.type == "Income").map(data => data.money),
                                    backgroundColor: [
                                        'rgba(75, 192, 192)',
                                        'rgba(153, 102, 255)',
                                        'rgba(255, 159, 64)',
                                        'rgba(54, 162, 235)',
                                        'rgba(255, 99, 132)',
                                        'rgba(255, 206, 86)',
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)',
                                    ],
                                    borderWidth: 1,
                                },
                            ],
                        }}
                        height={200}
                        width={200}
                        options={{
                            maintainAspectRatio: false,
                        }}
                    />
                </div>
            </ResponsiveGridLayout>
        </div>
    );
}


