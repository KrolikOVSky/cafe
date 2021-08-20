import {Component, React} from 'react'
import {Link} from "react-router-dom";
import "../../Styles/Menu.css"

export default class Product extends Component {
	render() {
		return (
			<Link to={`${this.props.link}`} className={"col grp-btn"}>
				<div>
					<img className={"img"} src={this.props.img} alt=""/>
				</div>
				<h4>{this.props.name}</h4>
				<h6>{this.props.shortDesc}</h6>
				<h6 className={"text-left"}>{this.props.price}</h6>
			</Link>
		)
	}
}