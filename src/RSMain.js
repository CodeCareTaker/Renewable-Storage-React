import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem} from 'react-bootstrap';
import PageIntro from "./PageIntro";
import PageAbout from "./PageAbout";
import PagePricing from "./PagePricing";
import PageContact from "./PageContact";
import PageFAQ from "./PageFAQ";
import PageCareers from "./PageCareers";
import PagePayMyBill from "./PagePayMyBill";
import 'bootstrap/dist/css/bootstrap.css';
import './RSMain.css';
import logo from './logo.png';


class RSMain extends Component {
  render() {
    return (
	  <HashRouter>
	  <div>
	    <Navbar fixedTop collapseOnSelect>
		  <Navbar.Header>
			<Navbar.Brand>
			  <NavLink to="/"><img src={logo} alt="logo"/></NavLink>
			</Navbar.Brand>
			<Navbar.Toggle />
		  </Navbar.Header>
		  <Navbar.Collapse>
		    <Nav pullRight>
			  <LinkContainer exact to="/">
			    <NavItem eventKey={1}>
				  Home
			    </NavItem>
			  </LinkContainer>
			  <LinkContainer to="/about">
			    <NavItem eventKey={2}>
				  About
			    </NavItem>
			  </LinkContainer>
			  <LinkContainer to="/pricing">
			    <NavItem eventKey={3}>
				  Pricing
			    </NavItem>
			  </LinkContainer>
			  <LinkContainer to="/contact">
			    <NavItem eventKey={4}>
				  Contact
			    </NavItem>
			  </LinkContainer>
			  <LinkContainer to="/faq">
			    <NavItem eventKey={5}>
				  FAQ
			    </NavItem>
			  </LinkContainer>
			  <LinkContainer to="/careers">
			    <NavItem eventKey={6}>
				  Careers
			    </NavItem>
			  </LinkContainer>
			  <LinkContainer to="/paymybill">
			    <NavItem eventKey={7}>
				  Pay My Bill
			    </NavItem>
			  </LinkContainer>
			</Nav>
		  </Navbar.Collapse>
		</Navbar>;
      
 	    <div className="content">
	      <Route exact path="/" component={PageIntro} />
		  <Route path="/about" component={PageAbout} />
		  <Route path="/pricing" component={PagePricing} />
		  <Route path="/contact" component={PageContact} />
		  <Route path="/faq" component={PageFAQ} />
		  <Route path="/careers" component={PageCareers} />
		  <Route path="/paymybill" component={PagePayMyBill} />
	    </div>
	  </div>
	  </HashRouter>
	);
  }
}

export default RSMain;