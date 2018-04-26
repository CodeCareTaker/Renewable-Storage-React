import React, { Component } from 'react';
import paypalbutton from "./paypal-button.png";
import './PagePayMyBill.css';
	
class PagePayMyBill extends Component {
  render() {
	return (
	  <section>
	   <section className="bgimagepaymybill">
         <div className="container-fluid">
           <div className="row">
             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
             </div>
          </div>
         </div>
       </section>
	   <h3 className="title">Pay My Bill</h3>
	   <p>All Renewable Storage customers can pay bill through PayPal. For payment click on the PayPal link given below.</p>
	   <a href="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=b5b8864b4bad&mfid=1524699714534_b5b8864b4bad"><img className="ppbutton" src={ paypalbutton } alt="paypal"/></a>
	   <h4 className="title newcust">For New Customers</h4>
	   <p>Looking for the cost to rent a storage unit nearby? Or maybe you need a moving truck? Let Renewable Storage help you take a load off! Our rates are available online. Prices vary by storage unit size and length of rental time.</p>
	   <h4 className="title">Renewable Deals and Steals</h4>
	   <p>On a budget? Call our customer service and ask about our monthly and ongoing specials. We also offer great discounts to military personnel, seniors and more.</p>
	 </section>
	)
  }
}

export default PagePayMyBill;