function cBond(){
    return (
        <div className="container">
            <h1><a className="footer-text">Create Bond</a></h1>
            <div>
                <label>Bond Name :</label>
                <input id="BondName" type="text"></input>
                <br/>
            </div>
            <br/>
            <div>
                <label>Bond StartDate :</label>
                <input id="BondStartDate"></input>
                <br/>
            </div>
            <br/>
            <div>
                <label>Bond Maturity Date :</label>
                <input id="BondMaturityDate" ></input>
                <br/>
            </div>
            <br/>
            <div>
                <label>Bond UnitPrice :</label>
                <input id="BondunitPrice"></input>
                <br/>
            </div>
            <br/>
            <div>
                <label>Bond Maximum Unit :</label>
                <input id="BondMaximumUnit"></input>
                <br/>
            </div>
            <br/>
            <div>
                <label>Bond Maximum Amount :</label>
                <input id="BondMaximumMaximum"></input>
                <br/>
            </div>
            <br/>
            <div>
                <button>Create Bond</button>
                <br/>
            </div>
        </div>
    );
}
export default cBond;