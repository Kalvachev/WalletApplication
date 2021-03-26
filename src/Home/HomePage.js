import React from 'react'
import HomePageForm from './HomePageForm';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import { Card } from 'antd';

export default function HomePage() {
    const layouts = [
        { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
        { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: 'c', x: 4, y: 0, w: 1, h: 2 }
    ];

    return (
        <div>
            <HomePageForm />
            <ResponsiveGridLayout className="layout" layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}>
                <div key="a"><Card><div>asdasdasasddasdsasasadasdadsadsasdsaddsadasdsadsadasddsadas</div></Card></div>
                <div key="b"><Card><div>asddasdasasdasdadsdsadasdadsadsasdsaddsaassdasaddasdsadsads</div></Card></div>
                <div key="c"><Card><div>asdadasdassdaassadasadasdadsadsasdsaddsasdasddasdsadsadas</div></Card></div>
            </ResponsiveGridLayout>
        </div >
    )
}

