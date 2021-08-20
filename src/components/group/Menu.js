import {Component, React} from 'react'
import {Global} from "../../Global";
import Product from "./Product";
import Navigation from "./Navigation";

const img = "/temp1.jpg"
// const img = "/temp_img.png"
export default class Menu extends Component {
	state = {
		groups: []
	}

	componentDidMount() {
		let groups = Global.testGroups;
		this.setState({groups})
		// console.log("groups === ", groups);
		// axios.get(Global.groups).then(res => {
		// groups = res.data
		// console.log("res.data = ", res.data)
		// console.log("groups = ", groups)
		// this.setState({groups})
		// })
	}

	render() {
		let i = 0;
		return (
			<div className={"container"} id={"menu"}>
				<Navigation id={"navigate"} groups={this.state.groups}/>
				<div id={"menuElements"}>
					{
						this.state.groups.map(group => (
							<div key={i++} id={`${group.linkName}`}>
								<h1 key={i++} className={"text-center"}>{group.name}</h1>
								<div key={i++} className={"m-4 row gap-5 "}>
									{
										group.products.map(product => (
											<Product
												name={product.name}
												img={img}
												shortDesc={"Short description an one more string in this text for testing Short description an one more string in this text for testing"}
												description={"Full description"}
												price={`250${Global.ruble}`}
												key={i++}
											/>
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