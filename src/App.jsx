import React from 'react'
import { For, Stack, Table } from "@chakra-ui/react"

const App = () => {

        return (
            <Stack gap="10">
                <For each={["line", "outline"]}>

                        <Table.Root  size="MD" variant="outline">
                            <Table.Header>
                                <Table.Row>
                                    <Table.ColumnHeader>Product</Table.ColumnHeader>
                                    <Table.ColumnHeader>Category</Table.ColumnHeader>
                                    <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {items.map((item) => (
                                    <Table.Row key={item.id}>
                                        <Table.Cell>{item.name}</Table.Cell>
                                        <Table.Cell>{item.category}</Table.Cell>
                                        <Table.Cell textAlign="end">{item.price}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Root>
                    )}
                </For>
            </Stack>
        )
    }

    const items = [
        {
            "name": "John Michael",
            "email": "john.michael@company.com",
            "role": "Software Developer",
            "age": 27,
            "salary": 2800
        },
        {
            "name": "Grace Kalu",
            "email": "grace.kalu@company.com",
            "role": "Backend Engineer",
            "age": 31,
            "salary": 3500
        },
        {
            "name": "Samuel Osei",
            "email": "samuel.osei@company.com",
            "role": "UI/UX Designer",
            "age": 25,
            "salary": 2400
        },
        {
            "name": "Linda Okafor",
            "email": "linda.okafor@company.com",
            "role": "HR Manager",
            "age": 29,
            "salary": 3000
        },
        {
            "name": "Peter Ade",
            "email": "peter.ade@company.com",
            "role": "Project Manager",
            "age": 34,
            "salary": 4000
        }
    ]



export default App
