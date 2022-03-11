import React, { useEffect } from "react"
import OneProduct from "./OneProduct"
import ProductDesc from "./ProductDesc"
import RelatedProducts from "./RelatedProducts"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useHistory } from "react-router-dom"
import { getProduct } from "../../store/allReducer.js/ProductsReducer"
import FullPageLoading from "../../components/FullPageLoading"
export default function ProductPage() {
	const dispatch = useDispatch()
	const location = useLocation()
	const product = useSelector((state) => state?.filteredProducts?.product)
	const recommendedProducts = useSelector(
		(state) => state?.filteredProducts?.recommendedProducts
	)
	const loading = useSelector((state) => state?.filteredProducts?.loading)

	useEffect(() => {
		dispatch(getProduct(location.pathname.split("/")[2]))
	}, [location])

	return (
		<>
			{loading ? (
			<FullPageLoading/>
			) : (
				<div className="productPage">
					<OneProduct product={product} />
					<ProductDesc />
					<RelatedProducts products={recommendedProducts} />
				</div>
			)}
		</>
	)
}
