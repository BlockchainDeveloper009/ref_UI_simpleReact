import { useEffect,useState } from "react";
import internal from "stream";
import axios from "axios";
import Table from "./Table";
import './table.module.css'

function eg_dynamicTableReact(): JSX.Element{
  const [dataTable, setDataTable] = useState([]);
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    // const persons: Person[] = 
    // [{Person.name="har",Person.age="1",Person.gender="4"},
    // {}];
    useEffect(()=> {
      axios('https:jsonplaceholder.typicode.com/users')
      .then(res=> ( setDataTable(res.data), console.log('--dataSuccesfullyRead--'), console.log(res.data))) //res=> ( setDataTable(res.data)
      .catch(err=> console.log(err))

    },[]);
    // useEffect(()=> {
    //   axios('https:jsonplaceholder.typicode.com/users')
    //   .then(res=>setDataTable(res.data)) //res=>setDataTable(res.data)
    //   .catch(err=> console.log(err))

    // },[]);
    const column = [
      { heading: 'Full Name', value: 'name'},
      { heading: 'Email', value: 'email'},
      { heading: 'Phone' , value: 'phone'},
      { heading: 'City' , value: 'address.city'},
    ]
    return (
        //<Header title="Develop. Preview. Ship. 🚀" ></Header>
        <div className="container">
            
            <h1>Dynamic Table</h1>
            <Table data={dataTable} column={column}/>            
          <br/>
        </div>
        

        
    );
}
export default eg_dynamicTableReact;

function callUnStakeBond(): void {
    throw new Error("Function not implemented.");
}
export interface Person {
    name: string;
    age: string;
    gender: string;
}

export type Pers = {
  name: string;
  addr: string;
  zip: number;
}
// export class Per{
//   name: string;
//   addr: string;
//   zip: number;
//   Per(a:string, b:string, c:number ){
//     name=a;
//     addr=b;
//     zip=c;
//   }
// }

// const t : Per[] = [
//   new Per("4","4",4),
//   {}
  
  
// ]