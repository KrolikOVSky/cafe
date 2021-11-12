import {Component, React} from 'react'
import Modal from "../../services/modal"
import AddGroup from "./AddGroup";
import AddProduct from "./AddProduct";
import "../../Styles/Main.css"

export default class AdminPanel extends Component {

	state = {
		modalGroup: false,
		modalProduct: true
	}

	render() {
		return (
			<div className={"text-center"}>
				<h1 className={"display-1"}>Панель Админстратора</h1>
				<hr/>
				<button className={"btn btn-success"} onClick={() => this.setState({modalGroup: true})}>
					Add group
				</button>
				<button className={"btn btn-success"} onClick={() => this.setState({modalProduct: true})}>
					Add product
				</button>

				<Modal isOpened={this.state.modalGroup} ModalOnClose={() => this.setState({modalGroup: false})}>
					<AddGroup />
				</Modal>

				<Modal isOpened={this.state.modalProduct} ModalOnClose={() => this.setState({modalProduct: false})}>
					<AddProduct />
				</Modal>
				<div className={"content"}>

				</div>
			</div>
		)
	}
}