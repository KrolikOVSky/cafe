export const Post = (URL, body, method) => {
	return new Promise((resolve, reject) => {
		fetch(URL, {
			method: `${method}`,
			body: body,
			headers: {
				'Content-type': 'application/json'
			}
		}).then(res => {
			resolve(res)
		})
	})
}

export function sendToServer(data, method, URL) {
	return new Promise((resolve) => {
		let formData = new FormData()
		for (let key in data) {
			formData.append(key, data[key])
		}
		fetch(URL, {
			method: `${method}`,
			body: formData
		}).then(res => {
			resolve({status: res.status})
		})
	})
}


export const Del = () => {

}

export const Upd = () => {

}