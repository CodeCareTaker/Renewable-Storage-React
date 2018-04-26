import React, { Component }  from 'react';
import './PageAbout.css';

class PageAbout extends Component {
  render() {
	return (
		<section className="about" id="about">
		    <section className="bgimageabout">
         <div className="container-fluid">
           <div className="row">
             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
             </div>
          </div>
         </div>
       </section>
			<h3 className="title">About Us:</h3>
			<p>Renewable Storage is proud to serve the storage needs of Canadians in the Greater Toronto Area. We take pride in providing exceptionally clean, safe, and affordable facilities, staffed with knowledgeable and friendly professionals to help you make the best decision for your storage requirements.

			Our goal is to make your storage experience as stress-free and convenient as possible - to that end, we provide a wide variety of services and supplies. In addition to storage spaces, we offer affordable outdoor parking spaces for your vehicles, secure mailboxes and an extensive line of moving supplies. We provide solutions during renovations, staging, when home closing dates don't coincide, for seasonal and other items not always wanted taking up space around the house, files or product for businesses in need of a little extra space, plus any other short or long term storage need.

			At Renewable Storage we strive to offer our customers outstanding service, peace of mind and a great price on storage space. Don't hesitate to give us a call or drop by our office in person, any one of our managers will be happy to show you around our facilities.</p>
			
			<h4 className="title">Why Renewable Storage? We Offer The Best Self Storage Features In Canada</h4>
			<p>When it comes to self storage features, here is how we stand apart from all other companies:</p>

			<ul>
			  <li>Rentals are Month to Month Terms</li>
			  <li>Affordable Pricing</li>
			  <li>Envrionmentally Friendly</li>
			</ul>
			
			<h4 className="title">Plus All These Important Self Storage Features</h4>
			<p>Payment and leasing options are both affordable and customer friendly, and our courtesy extras will save you both time and money.</p>
			
			<ul>
			  <li>Long Term Storage</li>
			  <li>Seasonal Storage</li>
			  <li>Temporary Storage</li>
			  <li>Affordable Self-Storage</li>
			  <li>Secure Storage</li>
			  <li>Climate Controlled Self-Storage</li>
			</ul>
			
			<p>For more information, <a href="#contact">contact</a> our experienced on-site managers Renewable Storage.</p>
			
			<h4 className="title">Customer Testimonials:</h4>
			<em>"I want to thank Renewable Storage for the kindness and consideration shown to me after I lost my job. I needed an affordabnle storage facility to keep my belongings while I moved to a new place as I was job hunting. They were flexible on pricing and took care of my things. Thanks guys!"</em>
			<p>- Tim H.</p>
			<em>"Renewable Storage offered me the best price for storage, at the same time safe kept my stuff safe!"</em>
			<p>- Tony F.</p>
		</section>		
	)
  }
}

export default PageAbout;