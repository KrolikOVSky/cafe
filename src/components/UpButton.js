import {Component, React} from 'react'
import "../Styles/UpButton.css"

export default class UpButton extends Component {

	componentDidMount() {
		const offset = 100;
		const scrollUp = document.querySelector(".scroll-up");
		const scrollUpSvgPath = document.querySelector(".scroll-up__svg-path");
		const pathLength = scrollUpSvgPath.getTotalLength();

		scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`
		scrollUpSvgPath.style.transition = "stroke-dashoffset 20ms"

		const getTop = () => window.pageYOffset || document.documentElement.scrollTop

		const footer = document.getElementById("footer")

		const updateDashoffset = () => {
			const height = document.documentElement.scrollHeight - window.innerHeight
			const dashOffset = pathLength - (getTop() * pathLength / height)
			scrollUpSvgPath.style.strokeDashoffset = dashOffset
		}

		window.addEventListener("scroll", () => {
			updateDashoffset();
			if (getTop() > offset) {
				scrollUp.classList.add("scroll-up--active")
			} else {
				scrollUp.classList.remove("scroll-up--active")
			}

			const toFooter = document.documentElement.scrollHeight - window.innerHeight - footer.offsetHeight

			const footerOffset = window.pageYOffset - toFooter

			if (window.pageYOffset > toFooter) {
				if (footerOffset >= 0) {
					scrollUp.style.transform = `translateY(-${footerOffset - 20}px)`
					scrollUp.style.transition = "0ms"
				}
			} else {
				scrollUp.style.transform = ""
				scrollUp.style.transition = ""
			}
			// console.log(document.documentElement.scrollHeight - window.innerHeight - footer.offsetHeight);
			// console.log(window.pageYOffset)
		})

		scrollUp.addEventListener("click", () => {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			})
		})
	}

	render() {
		return (
			<div className={"scroll-up"}>
				<svg viewBox={"-2 -2 52 52"} className={"scroll-up__svg"}>
					<path
						className={"scroll-up__svg-path"}
						d="M24,0 a24,24 0 0,1 0,48 a24,24 0 0,1 0,-48"
					/>
				</svg>
			</div>
		)
	}
}