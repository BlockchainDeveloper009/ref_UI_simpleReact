function buyBond(){
    return (
        <div>
            <h1><a className="footer-text">Buy Bond</a></h1>
            <div>
                <label>Bond Id :</label>
                <input id="bondId" type="text"></input>
                <br/>
            </div>
            <br/>
            <div>
                <label>Units :</label>
                <input id="bondUnits"></input>
                <br/>
            </div>
            <br/>
            
            <button className="cta-button connect-wallet-button" onClick={() => callMintFunction()}>Buy</button>
        </div>
    );
}
export default buyBond;

function callMintFunction(): void {
    throw new Error("Function not implemented.");
}
