import React from 'react'
import {For, HStack, Stack, Table} from "@chakra-ui/react";
import {MdDelete} from "react-icons/md";
import {FaEdit} from "react-icons/fa";

export const EmployeeTable = () => {
    return (
        <Stack gap="10">
            <For each={["line", "outline"]}>
                {(variant) => (
                    <Table.Root key={variant} size="sm" variant={variant}>
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader>ID</Table.ColumnHeader>
                                <Table.ColumnHeader>Name</Table.ColumnHeader>
                                <Table.ColumnHeader>Email</Table.ColumnHeader>
                                <Table.ColumnHeader>Role</Table.ColumnHeader>
                                <Table.ColumnHeader>Age</Table.ColumnHeader>
                                <Table.ColumnHeader>Salary</Table.ColumnHeader>
                                <Table.ColumnHeader>Actions</Table.ColumnHeader>

                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {items.map((item) => (
                                <Table.Row key={item.id}>
                                    <Table.Cell>{item.id}</Table.Cell>
                                    <Table.Cell>{item.name}</Table.Cell>
                                    <Table.Cell>{item.email}</Table.Cell>
                                    <Table.Cell>{item.role}</Table.Cell>
                                    <Table.Cell>{item.age}</Table.Cell>
                                    <Table.Cell>{item.salary}</Table.Cell>

                                    <Table.Cell>
                                        <HStack gap="3">
                                            < MdDelete size={20} className="icon " />
                                            < FaEdit size={20}  className= "icon"/>
                                        </HStack>

                                    </Table.Cell>




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