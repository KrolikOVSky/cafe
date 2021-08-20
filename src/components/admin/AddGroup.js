import {Component, React} from 'react'
import {Global} from "../../Global";

let base64String = "";
export default class AddGroup extends Component {
	state = {
		name: "",
		show: false,
		img: ""
	}

	imageUploaded = (e) => {
		let file = e.target.files[0]
		let reader = new FileReader();
		reader.onload = () => {
			base64String = reader.result//.replace("data:", "").replace(/^.+,/, "");
			// console.log(base64String);
			this.displayString()
		}
		reader.readAsDataURL(file);
	}
	displayString = () => {
		// console.log("Base64String about to be printed");
		// alert(base64String);
		this.setState({
			show: true,
			img: base64String
		})
	}

	handleSubmit = e => {
		e.preventDefault()

		const data = {
			name: this.state.name,
			image: base64String
		}

		const requestOptions = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data)
		};

		fetch(Global.groups, requestOptions).then(res => {
			console.log("res = ", res);
		}).catch(err => {
			console.log("res = ", err);
		})

		// axios.post(Global.groups, data).then(res => {
		// 	console.log(res);
		// }).catch(err => {
		// 	console.error("Here is an error = ", err)
		// })

		// Post(Global.groups, {
		// 	name: `${this.state.name}`,
		// 	image: `${base64String}`
		// }, "POST").then((res, err) => {
		// 	console.log("res = ", res);
		// 	console.error("err = ", err)
		// })

		// console.log(this.state.name);
		// console.log(base64String);
	};

	handleTextInput = e => {
		this.setState({
			name: e.target.value
		})
	};

	render() {
		return (
			<div>
				<h1>Добавление новой группы</h1>
				<form className={"form-control p-3"}>
					<input type="text" className={"form-control"} placeholder={"Введите название группы"}
					       onChange={this.handleTextInput}/><br/>
					<input type="file" className={"form-control-file"} onChange={this.imageUploaded}
					       accept={"image/*"}/><br/>
					<hr/>
					<input type="submit" className={"btn btn-block btn-outline-success"} onClick={this.handleSubmit}/>
					{
						this.state.show ? <img src={base64String} alt="" height={80}/> : ""
					}
				</form>

			</div>
		)
	}
}