import React, { useEffect } from "react"
import { addToCartAC } from "../store/allReducer.js/CartReducer"
import { useDispatch, useSelector } from "react-redux"
import {getProducts} from "../store/allReducer.js/ProductReducer"
import ProductC from "../components/product/Product"
import FullPageLoading from "../components/FullPageLoading"

export default function SectionTwo() {
	const dispatch = useDispatch()
	const products = useSelector((state) => state.products.products)
	const loading = useSelector((state) => state.products.loading)
	const lang = useSelector(state => state.lang.lang)

	useEffect(() => {
		dispatch(getProducts())
	}, [])

	console.log(lang)

	return (
		<>
			{
				loading ? <FullPageLoading/> : <div className="sectionTwo">
				<div className="container">
					<div className="title">
						<h1>{lang === 'uz' ? 'Ommabop mahsulotlar' : 'Популярные продукты'}</h1>
					</div>
					{/* <div className="listShop">
						<ul>
							<li>All</li>
							<li>Bags</li>
							<li>Sneakers</li>
							<li>Belt</li>
							<li>Sunglasses</li>
						</ul>
					</div> */}
					<div className="cardProduct">
						{
							products?.map((items) => {
								return <ProductC key={items?.id} product={items} />
							})
						
						}
					</div>
					<div className="productBtn">
						<button>LOAD MORE</button>
					</div>
				</div>
			</div>
			}
		</>
		
	)
}
