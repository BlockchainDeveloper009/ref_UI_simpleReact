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
} from '@chakra-ui/react';

function viewMyBondsTable(): JSX.Element{
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    // const persons: Person[] = 
    // [{Person.name="har",Person.age="1",Person.gender="4"},
    // {}];
    return (
        //<Header title="Develop. Preview. Ship. 🚀" ></Header>
        <div className="container">
            
            <h1><a className="footer-text">view Bonds TABLE</a></h1>
            
          
       
         
          <br/>
          <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
          
          
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