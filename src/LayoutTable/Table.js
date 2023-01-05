import React, { Fragment } from 'react';

const Table = () => {
    return (
        <Fragment>
            <div id="pricing-table" className="clear">
                <div className="plan">
                    <h3>Enterprise<span>$59</span></h3>      
                    <ul>
                        <li><b>10GB</b> Disk Space</li>
                        <li><b>100GB</b> Monthly Bandwidth</li>
                        <li><b>20</b> Email Accounts</li>
                        <li><b>Unlimited</b> subdomains</li>			
                    </ul> 
                </div>
                <div className="plan">
                    <h3>Professional<span>$29</span></h3>       
                    <ul>
                        <li><b>5GB</b> Disk Space</li>
                        <li><b>50GB</b> Monthly Bandwidth</li>
                        <li><b>10</b> Email Accounts</li>
                        <li><b>Unlimited</b> subdomains</li>			
                    </ul>    
                </div>
                <div className="plan">
                    <h3>Standard<span>$17</span></h3>
                    <ul>
                        <li><b>3GB</b> Disk Space</li>
                        <li><b>25GB</b> Monthly Bandwidth</li>
                        <li><b>5</b> Email Accounts</li>
                        <li><b>Unlimited</b> subdomains</li>			
                    </ul>
                </div>
                <div className="plan">
                    <h3>Basic<span>$9</span></h3>	
                    <ul>
                        <li><b>1GB</b> Disk Space</li>
                        <li><b>10GB</b> Monthly Bandwidth</li>
                        <li><b>2</b> Email Accounts</li>
                        <li><b>Unlimited</b> subdomains</li>			
                    </ul>
                </div> 	
            </div>
            <div className="container">
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-1">Job Id</div>
                        <div className="col col-2">Customer Name</div>
                        <div className="col col-3">Amount Due</div>
                        <div className="col col-4">Payment Status</div>
                    </li>
                    <li className="table-row">
                        <div className="col col-1" data-label="Job Id">42235</div>
                        <div className="col col-2" data-label="Customer Name">John Doe</div>
                        <div className="col col-3" data-label="Amount">$350</div>
                        <div className="col col-4" data-label="Payment Status">Pending</div>
                    </li>
                    <li className="table-row">
                        <div className="col col-1" data-label="Job Id">42442</div>
                        <div className="col col-2" data-label="Customer Name">Jennifer Smith</div>
                        <div className="col col-3" data-label="Amount">$220</div>
                        <div className="col col-4" data-label="Payment Status">Pending</div>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Table