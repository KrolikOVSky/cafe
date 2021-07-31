import {Component, React} from 'react'
import {Link} from "react-router-dom";
import "../../Styles/Products.css"

const img = "/temp1.jpg"

export default class Products extends Component {
	state = {
		name: "cat-1",
		prods: [
			{
				name: "prod-1-1",
				price: 255
			},
			{
				name: "prod-1-2",
				price: 255
			},
			{
				name: "prod-1-3",
				price: 255
			},
			{
				name: "prod-1-3",
				price: 255
			},
			{
				name: "prod-1-3",
				price: 255
			},
			{
				name: "prod-1-3",
				price: 255
			},
			{
				name: "prod-1-3",
				price: 255
			},
			{
				name: "prod-1-3",
				price: 255
			},
			{
				name: "prod-1-3",
				price: 255
			},
		]
	}

	componentDidMount() {
		this.setState({
			name: this.props.match.params.name
		})
	}

	render() {
		let i = 0;
		return (
			<div className={"container text-center"}>
				<h1>{this.state.name}</h1>
				<div className={"m-4 row gap-5"}>
					{

						this.state.prods.map(prod => {
							return (<Product name={prod.name} price={`${prod.price} rub`} img={img} shortDesc={`desc-${++i}`}/>)
						})
					}
				</div>
			</div>
		)
	}
}

class Product extends Component {
	render() {
		return (
			<Link to={`${this.props.link}`} className={"col grp-btn"}>
				<div>
					<img className={"img"} src={this.props.img} alt=""/>
				</div>

				<div className={"text-name"}>
					<h2>{this.props.name}</h2>
				</div>

				<div className={"text-desc"}>
					<h4>{this.props.shortDesc}</h4>
				</div>

				<div className={"text-price"}>
					<h4>{this.props.price}</h4>
				</div>
			</Link>
		);
	}
}
