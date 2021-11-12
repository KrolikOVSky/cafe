import {Component, React} from 'react'
import {Global} from "../../Global";
import "../../Styles/AddProduct.css"
import axios from "axios";

let base64String = "";
export default class AddProduct extends Component {
	state = {
		name: "",
		img: "",
		shortDesc: "",
		desc: "",
		price: "",
		group: "",
		show: false,
		groups: []
	}

	componentDidMount() {
		axios.get(Global.groups).then(res => {
			this.setState({
				groups: res.data
			})
		})
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
			shortDesc: this.state.shortDesc,
			description: this.state.desc,
			price: this.state.price,
			groupName: this.state.group,
			image: base64String
		}

		const requestOptions = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data)
		};

		fetch(Global.products, requestOptions).then(res => {
			console.log("res = ", res);
		}).catch(err => {
			console.log("res = ", err);
		})

		// console.log(this.state.name)
		// console.log(this.state.shortDesc)
		// console.log(this.state.desc)
		// console.log(this.state.price)
		// console.log(this.state.group)



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
		switch (e.target.id) {
			case "name" :
				console.log("--> name")
				this.setState({ name: e.target.value })
				break
			case "shortDesc" :
				console.log("--> shortDesc")
				this.setState({ shortDesc: e.target.value })
				break
			case "desc" :
				console.log("--> desc")
				this.setState({ desc: e.target.value })
				break
			case "price" :
				console.log("--> price")
				this.setState({ price: e.target.value })
				break
			case "group" :
				console.log("--> group")
				this.setState({ group: e.target.value })
				break
			default: console.log("-->wrong id")
		}

	};

	render() {
		return (
			<div>
				<h1>Добавление новой группы</h1>
				<form className={"form-control p-3 form"}>

					<label htmlFor="name">Название продукта</label>
					<input id={"name"} type="text" className={"form-control"} placeholder={"Введите название продукта"}
					       onChange={this.handleTextInput}/><br/>

					<label htmlFor="price">Цена</label>
					<input id={"price"} type="text" className={"form-control"} placeholder={"Введите цену"}
					       onChange={this.handleTextInput}/><br/>

					<label htmlFor="shortDesc">Краткое описание</label>
					<textarea id={"shortDesc"} rows={3} className={"form-control"}
					          placeholder={"Введите краткое описание"}
					          onChange={this.handleTextInput}/><br/>

					<label htmlFor={"desc"}>Описание</label>
					<textarea id={"desc"} rows={5} className={"form-control"} placeholder={"Введите полное описание"}
					          onChange={this.handleTextInput}/><br/>

					<label htmlFor="group">Группа</label>
					<select id={"group"} className={"form-select"} placeholder={"Введите название группы"}
					        onChange={this.handleTextInput}>
						{
							this.state.groups.map(item => {
								return (
									<option value={item.name} >{item.name}</option>
								)
							})
						}
					</select>

					<br/>

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