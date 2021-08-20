import "../Styles/Modal.css"

const Modal = props => {
	const closeByKey = e => {
		if (e.keyCode === 27) {
			console.log("esc clicked")
			props.ModalOnClose()
		}
	}

	return (
		<div className={`modal__wrapper ${props.isOpened ? 'open' : 'close'}`} onKeyDown={closeByKey} tabIndex={-1}>
			<div className={"modal__body"}>
				<div className={"modal__close"} onClick={props.ModalOnClose}>X</div>
				<hr/>
				{ props.children }
			</div>
		</div>
	)
}

export default Modal
