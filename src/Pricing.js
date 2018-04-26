import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './PagePricing.css';

class PagePricing extends React.Component {
  render() {
	return (
	  <section className="pricing">
		<h3 className="title">Pricing:</h3>
		
		<table className="pricetable">
		<tbody>
			<tr className="hd">
				<td className="cellsize">
					<strong>Size of Unit</strong></td>
				<td className="cellprice">
					<strong>Our Price</strong></td>
			</tr>
			<tr>
				<td className="cellfeet">
					8 x 14 (112 Cubic feet)</td>
				<td className="cellamount">
					$90.00/month</td>
			</tr>
			<tr>
				<td className="cellfeet">
					8 x 16 (128 Cubic Feet)</td>
				<td className="cellamount">
					$99.00/month</td>
			</tr>
			<tr>
				<td className="cellfeet">
					8 x 18 (144 Cubic Feet)</td>
				<td className="cellamount">
					$110.00/month</td>
			</tr>
			<tr>
				<td className="cellfeet">
					8 x 22 (176 Cubic Feet)</td>
				<td className="cellamount">
					$130.00/month</td>
			</tr>
			<tr>
				<td className="cellfeet">
					8 x 24 (192 Cubic Feet)</td>
				<td className="cellamount">
					$140.00/month</td>
			</tr>
			<tr>
				<td className="cellfeet">
					8 x 26 (208 Cubic Feet)</td>
				<td className="cellamount">
					$150.00/month</td>
			</tr>
			<tr>
				<td className="cellfeet">
					8 x 28 (224 Cubic Feet)</td>
				<td className="cellamount">
					$160.00/month</td>
			</tr>
			<tr>
				<td className="cellfeet">
					8 x 30 (240 Cubic Feet)</td>
				<td className="cellamount">
					$170.00/month</td>
			</tr>
			<tr>
				<td className="cellfeet">
					8 x 53 (424 Cubic Feet)</td>
				<td className="cellamount">
					$200.00/month</td>
			</tr>
		</tbody>
		</table>
		<h2 className="title">
		For larger sizes please contact us</h2>
		<p><strong>Outdoor storage parking also available</strong></p>
		<p>Sizes:</p>
		<table cellSpacing="1" className="pricetable">
		<tbody>
			<tr className="hd">
				<td className="cellsize">
					<strong>Size of Unit</strong></td>
				<td className="cellprice">
					<strong>Our Price</strong></td>
			</tr>
			<tr>
				<td className="cellfeet">
					RV's boats up to 20 feet</td>
				<td className="cellamount">
					$45.00/month</td>
			</tr>
			<tr>
				<td className="cellfeet">
					21-25 feet</td>
				<td className="cellamount">
					$50.00/month</td>
			</tr>
			<tr>
				<td className="cellfeet">
					25-30 feet</td>
				<td className="cellamount">
					$60.00/month</td>
			</tr>
			<tr>
				<td className="cellfeet">
					31-35 feet</td>
				<td className="cellamount">
					$70.00/month</td>
			</tr>
			<tr>
				<td className="cellfeet">
					36-40 feet</td>
				<td className="cellamount">
					$80.00/month</td>
			</tr>
			<tr>
				<td className="cellfeet">
					41-45 feet</td>
				<td className="cellamount">
					$90.00/month</td>
			</tr>
		</tbody>
		</table>

		<h2 className="titleline">Pricing Notes</h2>
		<ul>
			<li><strong>No deposit</strong></li>
			<li>All rates are per month</li>
			<li>One month minimum rent and one-time administration</li>
			<li>Customer may provide their own lock to secure storage<br />
				unit or purchase one of our high quality disc locks</li>
			<li>Prices subject to change without notice</li>
			<li>All units are available on a first come basis</li>
		</ul>
	  </section>		
	)
  }
}