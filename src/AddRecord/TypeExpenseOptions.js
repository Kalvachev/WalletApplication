import React, { useState } from 'react'
import { Select } from 'antd'

function ExpenseOptions({ categorie, setCategorie }) {
    return (
        <>
            <Select
                required={true}
                onChange={(value) => setCategorie(value)}
                style={{ width: "310px" }}
            >
                <Select.Option value={"foodAndDrinks"}>Food &amp; Drinks</Select.Option>
                <Select.Option value="shopping">Shopping</Select.Option>
                <Select.Option value="housingAndUtilities">Housing &amp; Utilities</Select.Option>
                <Select.Option value="vehicleAndTransportation">Vehicle &amp; Transportation</Select.Option>
                <Select.Option value="communicationAndPC">Communication &amp; PC</Select.Option>
                <Select.Option value="entertainementAndLife">Entertainment &amp; Life</Select.Option>
                <Select.Option value="investments">Investments</Select.Option>
            </Select>
        </>
    )
}

function IncomeOptions({ categorie, setCategorie }) {
    return (
        <>
            <Select
                required={true}
                onChange={(value) => setCategorie(value)}
                style={{ width: "310px" }} >
                <Select.Option value="salary">Salary</Select.Option>
                <Select.Option value="lotteryAndGambling">Lottery &amp; Gambling</Select.Option>
                <Select.Option value="interestsAndDividents">Interests &amp; Dividends</Select.Option>
                <Select.Option value="lendingAndRenting">Lending &amp; Renting</Select.Option>
            </Select>
        </>
    )
}

export { ExpenseOptions, IncomeOptions }

