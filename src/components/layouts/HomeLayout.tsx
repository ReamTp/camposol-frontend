import React from 'react'
import { Column, Row } from '../common'

type Props = {
    title: string,
    children: React.ReactNode
}

export function HomeLayout(props: Props) {
    return (
        <Row>
            <Column>
                <h1>Heas</h1>
            </Column>
            <Column>
                <h2>SDASd</h2>
            </Column>
        </Row>
    )
}
