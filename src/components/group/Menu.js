import {Component, React} from 'react'
import {Global} from "../../Global";
import Product from "./Product";
import Navigation from "./Navigation";
import axios from "axios";

const img = "/temp1.jpg"
// const img = "/temp_img.png"
export default class Menu extends Component {
	state = {
		groups: []
	}

	componentDidMount() {
		// let groups = Global.testGroups;
		axios.get(Global.groups).then(res => {
			let groups = res.data
			this.setState({groups: groups})
		})
	}

	clickHandle = () => {
		console.log(this.state.groups);
	}

	render() {
		let i = 0;
		return (
			<div className={"container"} id={"menu"}>
				<button onClick={this.clickHandle}>click</button>
				<Navigation id={"navigate"} groups={this.state.groups}/>
				<div id={"menuElements"}>
					{
						this.state.groups.map(group => (
							<div key={i++} id={`${group.linkName}`}>
								<h1 key={i++} className={"text-center"}>{group.name}</h1>

								<div>
									<img className={"img"} src={`${Global.image}/${group.image}`} alt={group.name}/>
								</div>

								<div key={i++} className={"m-4 row gap-5 "}>
									{
										group.products.map(product => (
											<div>
												<h1 className={"display-1"}>DEBUG</h1>
												<Product
													name={product.name}
													img={`${Global.image}/${product.image}`}
													shortDesc={"Short description an one more string in this text for testing Short description an one more string in this text for testing"}
													description={"Full description"}
													price={`250${Global.ruble}`}
													key={i++}
												/>
											</div>
										))
									}
								</div>
							</div>
						))
					}
				</div>
			</div>
		)
	}
}