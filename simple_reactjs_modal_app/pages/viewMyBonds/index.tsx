
function viewMyBonds(){
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    // const persons: Person[] = 
    // [{Person.name="har",Person.age="1",Person.gender="4"},
    // {}];
    return (
        //<Header title="Develop. Preview. Ship. 🚀" ></Header>
        <div className="container">
            
            <h1><a className="footer-text">view Bonds</a></h1>
            
          <div>
          <ul>
            {names.map((name)=>(
                <li>{name}<h1></h1><a href="">UnStake</a></li>
                ))}
                
            </ul>
          </div>

           
            <br/>
          <div>

            <button className="cta-button connect-wallet-button" onClick={() => callUnStakeBond()}>Create</button>
          </div>
          <div>
            {
               /*
  <table>
                    {names.map((name)=>(
                        
                        <tr>{name}</tr>    
                            ))}
                        
                    </table>
               */
            }
            </div>
        </div>
        

        
    );
}
export default viewMyBonds;

function callUnStakeBond(): void {
    throw new Error("Function not implemented.");
}
export interface Person {
    name: string;
    age: string;
    gender: string;
}