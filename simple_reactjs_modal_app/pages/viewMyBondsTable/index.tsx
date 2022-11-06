import internal from "stream";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
function viewMyBondsTable(){
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    // const persons: Person[] = 
    // [{Person.name="har",Person.age="1",Person.gender="4"},
    // {}];
    return (
        //<Header title="Develop. Preview. Ship. 🚀" ></Header>
        <div className="container">
            
            <h1><a className="footer-text">view Bonds TABLE</a></h1>
            
          
       
          <table id="viewMyBondsTable">
            <thead>
              <th>id</th>
              <th>value</th>
              <th>Status</th>
              <th>Action</th>
            </thead>
            <tbody>
                  
                {/* {names.map((name)=>(
                              
                              <tr>
                                <td>{name}</td>
                                <td>blank</td>
                                <td>blank</td>
                              // <td><button onClick={() => callUnStakeBond()}>Unstake</button></td>
                              </tr>    
                                  ))}  */}
            </tbody>  
          </table>
          <br/>
          
          
          
        </div>
        

        
    );
}
export default viewMyBondsTable;

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