import {Component, React} from 'react'
import axios from "axios";
import {Global} from "../../Global";
import Product from "./Product";

const img = "/temp1.jpg"
// const img = "/temp_img.png"
export default class Menu extends Component {
    prods = ["first", "second", "third", "fourth"];
    state = {
        groups: []
    }

    componentDidMount() {
        let groups = Global.testGroups;
        this.setState({groups})
        console.log("groups === ", groups);
        axios.get(Global.groups).then(res => {
            // groups = res.data
            // console.log("res.data = ", res.data)
            // console.log("groups = ", groups)
            // this.setState({groups})
        })
    }

    render() {
        console.log(this.state.groups)
        return (
            <div className={"container "}>
                <h1 className={"display-1"}>Меню</h1>
                {
                    this.state.groups.map(group => (
                        <div>
                            <h1 className={"text-center"}>{group.name}</h1>
                            <div className={"m-4 row gap-5 "}>
                                {
                                    group.products.map(product => (
                                        <Product
                                            name={product.name}
                                            img={img}
                                            shortDesc={"Short description an one more string in this text for testing"}
                                            description={"Full description"}
                                            price={`250${Global.ruble}`}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}