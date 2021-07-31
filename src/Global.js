export class Global {
	static url = "https://cafe-back.herokuapp.com"
	static groups = `${this.url}/api/group`
	static deletedGroups = `${this.url}/api/group/del`
	static products = `${this.url}/api/product`
	static deletedProducts = `${this.url}/api/product/del`
	static ruble = "\u20bd"

	static testGroups =  [
			{
				name: "first",
				products: [
					{name: "first 1"},
					{name: "first 2"},
					{name: "first 3"},
					{name: "first 4"},
					{name: "first 5"},
					{name: "first 6"}
				]
			},
			{
				name: "second",
				products: [
					{name: "second 1"},
					{name: "second 2"},
					{name: "second 3"},
					{name: "second 4"},
					{name: "second 5"},
					{name: "second 6"}
				]
			},
			{
				name: "third",
				products: [
					{name: "third 1"},
					{name: "third 2"},
					{name: "third 3"},
					{name: "third 4"},
					{name: "third 5"},
					{name: "third 6"}
				]
			},
			{
				name: "fourth",
				products: [
					{name: "fourth 1"},
					{name: "fourth 2"},
					{name: "fourth 3"},
					{name: "fourth 4"},
					{name: "fourth 5"},
					{name: "fourth 6"}
				]
			},
			{
				name: "fifth",
				products: [
					{name: "fifth 1"},
					{name: "fifth 2"},
					{name: "fifth 3"},
					{name: "fifth 4"},
					{name: "fifth 5"},
					{name: "fifth 6"}
				]
			},
		];



}