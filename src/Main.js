import {Component} from 'react'
import Header from "./components/blocks/Header";
import Footer from "./components/blocks/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound";
import StartPage from "./components/StartPage";
import Menu from "./components/group/Menu";
import Products from "./components/product/Products";
import axios from "axios";
import {Global} from "./Global"


export default class Main extends Component {

	handleClick = () => {
		axios.get(`${Global.url}/api/group/del`).then(res => {
			res.data.map(el => {
				console.log(el);
			})
		})
	}


	render() {
		return (
			<Router className={"router"}>
				<Header/>
				<Switch>
					<Route exact path={"/"} component={StartPage}/>
					<Route exact path={"/menu"} component={Menu}/>
					<Route path={"/menu/:name"} component={Products}/>
					<Route component={NotFound}/>
				</Switch>
				<input type="submit" onClick={this.handleClick}/>
				<Footer/>
			</Router>
		)
	}
}