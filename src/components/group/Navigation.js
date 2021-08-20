import {Component, React} from 'react'
import "../../Styles/Navigation.css"

export default class Navigation extends Component {

	getElement = (element) => {
		return document.getElementById(element)
	}

	componentDidMount() {
		const nav = this.getElement('navigate')
		const navOffset = nav.offsetTop
		const headerOffset = this.getElement("header").offsetHeight

		document.onscroll = () => {
			const scrolled = document.documentElement.scrollTop
			let containsFixed = nav.classList.contains("fixed")

			console.log(scrolled);

			if (scrolled > navOffset - headerOffset && !containsFixed) {
				nav.classList.add("fixed")
			} else if (scrolled < navOffset - headerOffset && containsFixed) {
				nav.classList.remove("fixed")
			}
		}
	}

	render() {
		let i = 0
		return (
			<div className={"navigate"} id={this.props.id}>
				<ul className={"ul"}>
					{
						this.props.groups.map(group =>
							<li className={"li"} key={i++}>
								<a className={"link"} href={`#${group.linkName}`} title={group.name}>{group.name}</a>
							</li>
						)
					}
				</ul>
			</div>
		)
	}
}