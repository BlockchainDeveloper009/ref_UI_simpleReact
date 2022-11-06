
import React, { useState, useEffect } from "react";
function viewMyBondsTableUseEffect(){
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [randomNames, setRandomNames] = useState([]);
    // useEffect(() => {
      
    //   });
    // setRandomNames(names);

    // const persons: Person[] = 
    // [{Person.name="har",Person.age="1",Person.gender="4"},
    // {}];
    return (
        //<Header title="Develop. Preview. Ship. 🚀" ></Header>
        <div className="container">
            
            <h1><a className="footer-text">viewMyBondsTableUseEffect</a></h1>
            
          <table id="test">
            <thead>
              {/* <th>id</th>
              <th>value</th>
              <th>Status</th>
              <th>Action</th> */}
            </thead>
            <tbody>
              <tr>1</tr>
              <tr>2</tr>
            </tbody>

          </table>
       
          {/* <table id="viewMyBondsTableUseEffect">
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
                                  ))}  
            </tbody>  
          </table> */}
          <br/>
          
          
          
        </div>
        

        
    );
}
export default viewMyBondsTableUseEffect;

// function callUnStakeBond(): void {
//     throw new Error("Function not implemented.");
// }
// export interface Person {
//     name: string;
//     age: string;
//     gender: string;
// }