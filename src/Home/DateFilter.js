import React from 'react'
import { Select, Radio } from 'antd'
import styles from './homepage.module.scss'
const { Option } = Select;

export default function DateFilter() {


    function onClickHanler() {

    }

    return (
        <div className={styles.filtersSelectComp}
            onClick={onClickHanler}>
            {/* <div className={styles.filtersRadioBtns}>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a">Range</Radio.Button>
                    <Radio.Button value="b">Week</Radio.Button>
                    <Radio.Button value="c">Month</Radio.Button>
                </Radio.Group>
            </div> */}
            <Select defaultValue="month" style={{ width: 320 }} bordered={false}>
                <Option value="week">Last Week</Option>
                <Option value="month">Last Month</Option>
                <Option value="year">Last Year</Option>
            </Select>
        </div>
    )
}
