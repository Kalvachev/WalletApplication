import React from 'react'
import { Menu } from 'antd';
import { DollarOutlined, HistoryOutlined, EuroOutlined } from '@ant-design/icons';
import styles from './analytics.module.scss';
import {
    BiDrink, BiShoppingBag, BiCar, BiBookOpen,
    BiMoney, BiHappy, BiDollar, BiCoinStack, BiEuro,
    BiBuildings
}
    from "react-icons/bi";

const { SubMenu } = Menu;

export default function AnalyticsFilters({ bills, setBills, allBills }) {
    const handleClick = e => {
        console.log('click ', e);
    };

    function allTypesHandler() {
        setBills(allBills)
    }

    function typeHandler(type) {
        setBills(allBills)
        let filterBills = allBills.filter(bill => bill.type === type);
        setBills(filterBills);
    }

    function categorieHandler(categorie) {
        setBills(allBills)
        let filterBills = allBills.filter(bill => bill.categorie === categorie)
        setBills(filterBills)
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
                    <Menu.Item key="1" onClick={allTypesHandler}><HistoryOutlined style={{ marginRight: '1em' }} />All Record Types</Menu.Item>
                    <Menu.Item key="2" onClick={() => typeHandler('income')}><DollarOutlined size='1.5em' style={{ marginRight: '0.7em' }} />Income</Menu.Item>
                    <Menu.Item key="3" onClick={() => typeHandler('expense')}><EuroOutlined style={{ marginRight: '0.7em' }} />Expense</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<DollarOutlined style={{ marginRight: '0.7em' }} />} title="Expenses">
                    <Menu.Item key="4" onClick={() => categorieHandler('foodAndDrinks')}><BiDrink size='1em' style={{ marginRight: '0.7em' }} />Food &amp; Drinks</Menu.Item>
                    <Menu.Item key="5" onClick={() => categorieHandler('shopping')}><BiShoppingBag size='1em' style={{ marginRight: '0.7em' }} />Shopping</Menu.Item>
                    <Menu.Item key="6" onClick={() => categorieHandler('vehicleAndTransportation')}><BiCar size='1em' style={{ marginRight: '0.7em' }} />Vehicle &amp; Transportation</Menu.Item>
                    <Menu.Item key="7" onClick={() => categorieHandler('communicationAndPC')}><BiBookOpen size='1em' style={{ marginRight: '0.7em' }} />Communication &amp; PC</Menu.Item>
                    <Menu.Item key="8" onClick={() => categorieHandler('entertainementAndLife')}><BiHappy size='1em' style={{ marginRight: '0.7em' }} />Entertainment &amp; Life</Menu.Item>
                    <Menu.Item key="9" onClick={() => categorieHandler('investments')}><BiMoney size='1em' style={{ marginRight: '0.7em' }} />Investments</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" icon={<EuroOutlined />} title="Income">
                    <Menu.Item key="10" onClick={() => categorieHandler('salary')}><BiDollar size='1em' style={{ marginRight: '0.7em' }} />Salary</Menu.Item>
                    <Menu.Item key="11" onClick={() => categorieHandler('lotteryAndGambling')}><BiCoinStack size='1em' style={{ marginRight: '0.7em' }} />Lottery &amp; Gambling</Menu.Item>
                    <Menu.Item key="12" onClick={() => categorieHandler('interestsAndDividents')}><BiEuro size='1em' style={{ marginRight: '0.7em' }} />Interests &amp; Dividends</Menu.Item>
                    <Menu.Item key="13" onClick={() => categorieHandler('lendingAndRenting')}><BiBuildings size='1em' style={{ marginRight: '0.7em' }} />Lending &amp; Renting</Menu.Item>
                </SubMenu>
            </Menu>
        </>
    )
}
