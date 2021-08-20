import {Component, React} from 'react'
import {Link} from "react-router-dom";
import "../../Styles/Menu.css"

export default class Group extends Component {
	render() {
		return (
			<Link to={`${this.props.link}`} className={"col grp-btn"}>
				<div>
					<img className={"img"} src={this.props.img} alt=""/>
				</div>

				<div className={"text"}>
					<h2>{this.props.name}</h2>
				</div>
			</Link>
		)
	}
}