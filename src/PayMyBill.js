import React, { Component } from 'react';
import storagelockers from './storagelockers.jpg';
import './PageIntro.css';
	
class PagePayMyBill extends Component {
  render() {
	return (
	  <section className="intro" id="intro">
	   <section className="bgimage">
         <div className="container-fluid">
           <div className="row">
             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
             <h5>Hello, world! Full width Hero-unit header</h5>
             <p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
             <p><a href="#" className="btn btn-primary btn-large">Learn more »</a></p>
           </div>
          </div>
         </div>
       </section>
	   <h1 className="title">Pay My Bill</h1>
	   <p>All Renewable Storage customers can pay bill through PayPal. For payment click on the PayPal link given below.</p>
	   <h3 className="title">For New Customers</h3>
	   <p>Looking for the cost to rent a storage unit nearby? Or maybe you need a moving truck? Let Renewable Storage help you take a load off! Our rates are available online. Prices vary by storage unit size and length of rental time.</p>
	   <h3 className="title">Renewable Deals and Steals</h3>
	   <p>On a budget? Call our customer service and ask about our monthly and ongoing specials. We also offer great discounts to military personnel, seniors and more.</p>
	 </section>
	)
  }
}

export default PagePayMyBill;