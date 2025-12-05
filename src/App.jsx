import React from 'react'
import {For, HStack, Stack, Table, VStack} from "@chakra-ui/react"
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {EmployeeTable} from "./components/ui/EmployeeTable.jsx";

const App = () => {

    return (
     <VStack gap="6" align="flex-start">
         <EmployeeTable />
     </VStack>
    )
    }





export default App
