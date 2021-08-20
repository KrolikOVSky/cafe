export class Global {
	static url = "http://cafe-back.herokuapp.com"
	// static url = "http://localhost:8080"
	static groups = `${this.url}/api/group`
	static deletedGroups = `${this.url}/api/group/del`
	static products = `${this.url}/api/product`
	static deletedProducts = `${this.url}/api/product/del`
	static ruble = "\u20bd"

	static testGroups =  [
			{
				name: "First",
				linkName: "linkFirst",
				products: [
					{name: "First 1"},
					{name: "First 2"},
					{name: "First 3"},
					{name: "First 4"},
					{name: "First 5"},
					{name: "First 6"}
				]
			},
			{
				name: "Second",
				linkName: "linkSecond",
				products: [
					{name: "Second 1"},
					{name: "Second 2"},
					{name: "Second 3"},
					{name: "Second 4"},
					{name: "Second 5"},
					{name: "Second 6"}
				]
			},
			{
				name: "Third",
				linkName: "linkThird",
				products: [
					{name: "Third 1"},
					{name: "Third 2"},
					{name: "Third 3"},
					{name: "Third 4"},
					{name: "Third 5"},
					{name: "Third 6"}
				]
			},
			{
				name: "Fourth",
				linkName: "linkFourth",
				products: [
					{name: "Fourth 1"},
					{name: "Fourth 2"},
					{name: "Fourth 3"},
					{name: "Fourth 4"},
					{name: "Fourth 5"},
					{name: "Fourth 6"}
				]
			},
			{
				name: "Fifth",
				linkName: "linkFifth",
				products: [
					{name: "Fifth 1"},
					{name: "Fifth 2"},
					{name: "Fifth 3"},
					{name: "Fifth 4"},
					{name: "Fifth 5"},
					{name: "Fifth 6"}
				]
			},
		];



}