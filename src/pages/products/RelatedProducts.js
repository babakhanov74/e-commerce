import React from "react"
import { Button, Rate } from "antd"
import store, { AddToCart } from "../../store/store"
import { addToCartAC } from "../../store/allReducer.js/CartReducer"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export default function RelatedProducts({ products }) {
	const dispatch = useDispatch()
	const history = useHistory()
	return (
		<div className="relatedProducts">
			<div className="container">
				<div className="title">
					<h1>RELATED PRODUCTS</h1>
				</div>
				<div className="Cards">
					{products?.map((item, index) => {
						return (
							<div className="miniCard" key={index}>
								<div className="cardImg">
									<img
										onClick={() =>
											history.push(
												`/product/${item.slug}`
											)
										}
										src={item.image}
										alt="#"
									></img>
								</div>
								<h2>{item.name_uz.substring(0, 23)}...</h2>
								<div className="points">
									<Rate allowHalf defaultValue={0} />
								</div>
								<div className="miniCard_cost">
									<span>{item.price}</span>
								</div>
								<button className="AddProductBtn"  
									onClick={() => dispatch(addToCartAC(item))}
									>
										Add Product
								</button>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
