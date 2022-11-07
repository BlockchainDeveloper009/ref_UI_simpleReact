import React from 'react'
import './table.module.css'
//reference: https://www.youtube.com/watch?v=uFGKOCmEXPw

const Table = ({data, column}) => {

    return (
        <table>
            <thead>
                <tr>
                    {column.map((item, index) => <TableHeadItem key={index} item={item} />)}
                </tr>

            </thead>
            <tbody>
                {data.map((item,index)=> <TableRow key={index} item={item} column= {column} />)}
            </tbody>
        </table>
    )
}
const TableHeadItem = ({ item }) => <th>{item.heading}</th>
const TableRow = ({item, column}) => (
    <tr>
        {column.map((columnItem,index)=> {
            if(columnItem.value.includes('.')){
                const itemSplit = columnItem.value.split('.') //['address','city']
                return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
            }
            return <td>{item[`${columnItem.value}`]}</td>
        })}
    </tr>
)
    

// const TableRow = ({item, column}) => {
//     console.log(item['name']);
//     return <tr></tr>
// }
export default Table