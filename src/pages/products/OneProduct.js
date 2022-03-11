import React, { useEffect } from "react"
import { Select, Divider, Rate } from "antd"
import image from "./../imagesProduct/oneNikes.png"
import product02 from "./../../main/sectionImg/five.png"
import product03 from "./../../main/sectionImg/four.png"
import product01 from "./../../main/sectionImg/sx.png"
import { useSelector, useDispatch } from "react-redux"
import { addToCartAC } from "../../store/allReducer.js/CartReducer"
import { Link, useHistory } from "react-router-dom"

function handleChange(value) {
	console.log(`selected ${value}`)
}

export default function OneProduct({ product }) {
	const oneProduct = useSelector((state) => state.products.oneProduct)
	const dispatch = useDispatch()

	const { Option } = Select
	return (
		<div className="oneProduct">
			<Divider />
			<div className="container">
				<div className="leftHalf">
					<div className="banner">
						<img src={product?.image} alt="#"></img>
					</div>
					<div className="snTypes">
						{product?.images?.map((item, index) => {
							return (
								<>
								<div key={index} className="one">
									<img src={product.image} alt="#"></img>
								</div>
								<div key={index} className="one">
									<img src={product.image} alt="#"></img>
								</div>
								<div key={index} className="one">
									<img src={product.image} alt="#"></img>
								</div>
								<div key={index} className="one">
									<img src={product.image} alt="#"></img>
								</div>
								</>
							)
						})}
					</div>
				</div>
				<div className="rightHalf">
					<div className="title">
						<h2>{product?.name_uz}</h2>
					</div>
					<div className="rate">
						<Rate className="Rate" allowHalf defaultValue={0} />
					</div>
					<Divider style={{ margin: "15px 0 " }} />
					<div className="costs">
						<p>{product?.price}</p>
					</div>
					<div className="info">
						<p>
							<span>Availability:</span>
							<span>In stock</span>
						</p>
						<p>
							<span>Category:</span>
							<span>Accessories</span>
						</p>
						<p>
						<span>Free shipping</span>
						<span>20,000 UZS</span>
						</p>
					</div>
					<Divider style={{ margin: "15px 0 " }} />
					{/* <div className="color">
						<p>Select Color:</p>
						<div className="blue"></div>
						<div className="red"></div>
						<div className="black"></div>
						<div className="yellow"></div>
					</div> */}
					<div className="size">
						<p>Type</p>
						<Select
							defaultValue="xs"
							style={{ width: 120 }}
							onChange={handleChange}
						>
							<Option value="xs">Pro</Option>
							<Option value="l">Pro Max</Option>
							<Option value="xl">Pro 256 Gb</Option>
							<Option value="2xl">Pro Max 256 GB</Option>
						</Select>
					</div>
					<Divider style={{ margin: "15px 0 " }} />
					<div className="cart">
						{/* <div className="HowMany">
							<button className="resetBtn">-</button>
							<p>{}</p>
							<button className="add">+</button>
						</div> */}
						<div className="btns">
							<button
								className="oneButtons"
								onClick={() => dispatch(addToCartAC(product))}
							>
								<ion-icon name="cart-outline"></ion-icon> Add to
								cart{" "}
							</button>
						</div>
					</div>
					<Divider style={{ margin: "15px 0 " }} />
				</div>
			</div>
		</div>
	)
}
