import React, { Component } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import CardContent from "./CardContent";
import styles from "./homepage.module.scss"

import { Line, Pie, Doughnut, Bar, defaults } from 'react-chartjs-2';
import { List, Progress } from 'antd';

import { data } from '../data'

const ResponsiveGridLayout = WidthProvider(Responsive);

const allExpenses = Math.abs(data.filter(data => data.type === "Expense").reduce(((acc, curr) => acc + curr.money), 0));
const allIncomes = data.filter(data => data.type === "Income").reduce(((acc, curr) => acc + curr.money), 0);

export default class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            value: true,
        };
        this.onHandle = this.onHandle.bind(this);
    }

    onHandle() {
        this.setState((prevState) => ({
            value: !prevState.value,
        }));
    }

    render() {
        var layout = [
            { i: "a", x: 0, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
            { i: "b", x: 4, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
            { i: "c", x: 8, y: 0, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
            { i: "d", x: 0, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
            { i: "e", x: 4, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
            { i: "f", x: 8, y: 1, w: 4, h: 1, minW: 4, maxW: 4, minH: 1, maxH: 1 },
        ];
        var layout1 = [
            { i: "a", x: 0, y: 0, w: 6, h: 1 },
            { i: "b", x: 6, y: 0, w: 6, h: 1 },
            { i: "c", x: 0, y: 1, w: 6, h: 1 },
            { i: "d", x: 6, y: 1, w: 6, h: 1 },
            { i: "e", x: 0, y: 2, w: 6, h: 1 },
            { i: "f", x: 6, y: 2, w: 6, h: 1 },
        ];

        var layout = { lg: this.state.value === true ? layout : layout1 };

        return (
            <div className={styles.gridContainer}>
                <button style={{ marginLeft: "45%" }} onClick={this.onHandle}>
                    {this.state.value === true ? "Increase" : "Decrease"} Grid by 2
          columns
        </button>
                <ResponsiveGridLayout
                    className="layout"
                    layouts={layout}
                    breakpoints={{ lg: 1200 }}
                    cols={{ lg: 12 }}
                    rowHeight={281}
                    width={1200}
                >
                    <div key="a" style={{ backgroundColor: "white" }} className={styles.firstWidgetContainer} >
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
                            }}
                        />
                    </div>
                    <div key="b" style={{ backgroundColor: "white" }}>
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
                    <div key="c" style={{ backgroundColor: "white" }} className={styles.homePageLastRecordsContainer}>
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
                    <div key="d" style={{ backgroundColor: "blue" }}>
                        <CardContent color={"blue"} />
                    </div>
                    <div key="e" style={{ backgroundColor: "white" }}>
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
                    <div key="f" style={{ backgroundColor: "white" }}>
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
}
