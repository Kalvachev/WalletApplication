import React from 'react'
import { Menu } from 'antd';
import { DollarOutlined, HistoryOutlined } from '@ant-design/icons';
import styles from './analytics.module.scss';

const { SubMenu } = Menu;

export default function AnalyticsFilters({ bills, setBills }) {
    const handleClick = e => {
        console.log('click ', e);
    };

    function allTypesHandler() {
        setBills(bills)
    }

    function incomeHandler() {
        let incomeBills = bills.filter(bill => bill.type === 'income');
        setBills(incomeBills);
    }

    function expenseHandler() {
        let expenseBills = bills.filter(bill => bill.type === 'expense');
        setBills(expenseBills);
    }

    return (
        <>
            <Menu
                onClick={() => handleClick()}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                className={styles.analyticsMenu}
            >
                <SubMenu key="sub1" icon={<HistoryOutlined />} title="RECORD TYPES">
                    <Menu.Item key="1" onClick={allTypesHandler}>All Record Types</Menu.Item>
                    <Menu.Item key="2" onClick={incomeHandler}>Income</Menu.Item>
                    <Menu.Item key="3" onClick={expenseHandler}>Expense</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<DollarOutlined />} title="Expenses">
                    <Menu.Item key="4">Food &amp; Drinks</Menu.Item>
                    <Menu.Item key="5">Shopping</Menu.Item>
                    <Menu.Item key="6">Vehicle &amp; Transportation</Menu.Item>
                    <Menu.Item key="7">Communication &amp; PC</Menu.Item>
                    <Menu.Item key="8">Entertainment &amp; Life</Menu.Item>
                    <Menu.Item key="9">Investments</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" icon={<DollarOutlined />} title="Income">
                    <Menu.Item key="10">Salary</Menu.Item>
                    <Menu.Item key="11">Lottery &amp; Gambling</Menu.Item>
                    <Menu.Item key="12">Interests &amp; Dividends</Menu.Item>
                    <Menu.Item key="13">Lending &amp; Renting</Menu.Item>
                </SubMenu>
            </Menu>
        </>
    )
}
