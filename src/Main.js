import {Component} from 'react'
import Header from "./components/blocks/Header";
import Footer from "./components/blocks/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound";
import StartPage from "./components/StartPage";
import Menu from "./components/group/Menu";
import UpButton from "./components/UpButton";
import Test from "./components/group/Test";
import AdminPanel from "./components/admin/AdminPanel";


export default class Main extends Component {
	render() {
		return (
			<Router>
				<Header/>
				<Switch>
					<Route exact path={"/"} component={StartPage}/>
					<Route exact path={"/menu"} component={Menu}/>
					<Route exact path={"/test"} component={Test}/>
					<Route exact path={"/admin"} component={AdminPanel}/>
					<Route component={NotFound}/>
				</Switch>
				<UpButton/>
				<Footer/>
			</Router>
		)
	}
}