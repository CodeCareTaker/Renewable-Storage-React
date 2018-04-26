import React, { Component } from 'react';
import './PageIntro.css';
	
class PageIntro extends Component {
  render() {
	return (
	  <section className="intro" id="intro">
	   <section className="bgimage">
         <div className="container-fluid">
           <div className="row">
             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
             </div>
          </div>
         </div>
       </section>
	   <h3 className="title">Welcome to Renewable Storage!</h3>
	   <p>Renewable Storage is your eco-friendly Self Storage Solution for your Home or Business.
	   Canadian owned and operated, Renewable Storage has been providing Canadians with high quality, flexible, affordable and secure storage facilities. Renewable Storage's goal is to meet our customers´ demand for self-storage by reusing existing materials to create additional self-storage units and to reduce our impact on the environment. Renewable Storage reuses van and truck bodies that have been detached from retired commercial vehicles. This method of storage is environmentally friendly and cost effective while providing you with a safe and secure place to store your belongings.
	   Whether you need household self storage, commercial storage space or auto storage, you need security, convenience and access. Those features define the way we do business at Renewable Storage.</p>
	   <h4 className="title">Why Choose Renewable?</h4>
	   <p>Comparing self storage facilities? We can save you time. Here is how we stand apart from other storage rental companies:
	   The majority of the planets greenhouse gases are scientifically linked to the production or manufacturing of cement/concrete a simple calculation of 500 cubic yards of concrete will spew 200000 pounds of carbon dioxide into our precious atmosphere.
	   Please note: All carbon emissions have a negative impact for a healthy planet. By utilizing Renewable Storage sources we can reduce our carbon footprint by approximately 3 tons of carbon pollution emissions per storage unit. Thus resulting cleaner sustainable air source for future generations.
	   Our Renewable Storage units are designed to save you money while protecting our precious environment for the future.

	   Renewable Storage is a full service moving and storage solutions company providing your home or business with storage services using the highest-quality products and services at an affordable price.

	   We are fully Canadian Owned and Operated.

	   Affordable prices and your environmentally smart alternative to self storage.</p>
	   <h4 className="title">Service Area:</h4>
	   <p>Our storage units in Pickering range in floor space size from as little as 20 square feet to as much as 300 square feet, 
	   with total cubic volume from 200 cubic feet to over 1700 cubic feet. Use our handy storage calculator to input your items and estimate the right amount of space you need. 
	   At Renewable Storage, we provide storage solutions for all your household or business needs.</p>
	 </section>
	)
  }
}

export default PageIntro;