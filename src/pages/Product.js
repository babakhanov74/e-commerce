import { MenuOutlined, TableOutlined } from "@ant-design/icons/lib/icons"
import { Button, Divider, Rate, Select, Slider } from "antd"
import { Option } from "antd/lib/mentions"
import React, { useEffect } from "react"
import adidasCard from "./imagesProduct/adidasCard.png"
import hotOne from "./imagesProduct/hotOne.png"
import hotTwo from "./imagesProduct/hotTwo.png"
import hotThree from "./imagesProduct/hotThree.png"
import hotFour from "./imagesProduct/hotFour.png"
import hotFive from "./imagesProduct/hotFive.png"
import hotSix from "./imagesProduct/hotSix.png"
import store from "../store/store"
import { addToCartAC } from "../store/allReducer.js/CartReducer"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useHistory } from "react-router-dom"
import { getCategoryProducts } from "../store/allReducer.js/ProductsReducer"
import ReactPaginate from "react-paginate"
import ProductC from "../components/product/Product"
import FullPageLoading from "../components/FullPageLoading"

export default function Product() {
	const dispatch = useDispatch()
	const location = useLocation()
	const history = useHistory()
	const products = useSelector((state) => state?.filteredProducts?.products)
	const loading = useSelector((state) => state?.filteredProducts?.loading)
	const pagination = useSelector(
		(state) => state?.filteredProducts?.pagination
	)

	function onChange(value) {
		console.log("onChange: ", value)
	}

	function onAfterChange(value) {
		console.log("onAfterChange: ", value)
	}

	const productSneakerAllCards = products

	const adidasCards = [
		{
			id: 1,
			title: "IPHONE 13 PRO MAX 256 GB...",
			Image: adidasCard,
			desc: "Performance and design. Taken right to the edge.",
		},
	]

	const pageChangeHandle = ({ selected }) => {
		history.push({ search: `page=${selected + 1}` })
	}

	console.log(location.search.split("=")[1])

	useEffect(() => {
		dispatch(
			getCategoryProducts(
				location.pathname.split("/")[2],
				location.search.split("=")[1]
			)
		)
	}, [location])

	return (
		<>
			{loading ? (
			<FullPageLoading/>
			) : (
				<div>
					<Divider />
					<div className="container">
						<div className="hotDeals">
							<div className="leftAllBlockBox">
								<div className="leftBox">
									<h3>All phone</h3>
									<div className="leftBoxText">
										<h6>Samsung S20 ULTRA </h6>
										<p>20</p>
									</div>
									<div className="leftBoxText">
										<h6>Apple 13</h6>
										<p>48</p>
									</div>
									<div className="leftBoxText">
										<h6>Apple 12</h6>
										<p>14</p>
									</div>
									<div className="leftBoxText">
										<h6>Apple 13 Pro</h6>
										<p>15</p>
									</div>
									<div className="leftBoxText">
										<h6>Apple 13 Pro MAX</h6>
										<p>23</p>
									</div>
									<div className="leftBoxText">
										<h6>Artel</h6>
										<p>1</p>
									</div>
									<div className="leftBoxText">
										<h6>Redmi</h6>
										<p>95</p>
									</div>
								</div>
								<div className="leftBrand">
									<h3>BRAND</h3>
									<div className="brandList">
										<h6>Samsung</h6>

										<p>99</p>
									</div>
									<div className="brandList">
										<h6>Apple</h6>
										<p>99</p>
									</div>
									<div className="brandList">
										<h6>Artel</h6>
										<p>99</p>
									</div>
									<div className="brandList">
										<h6>Redmi</h6>
										<p>99</p>
									</div>
								</div>
								<button className="leftBoxBtn">MORE</button>
							</div>
							<div className="rightBox">
								{adidasCards.map((item, index) => {
									return (
										<>
											<div
												className="rightBoxTopCard"
												key={index}
											>
												<div className="insideLeftDesc">
													<h1>{item.title}</h1>
													<p>{item.desc}</p>
													<button>SHOP NOW</button>
												</div>
												<div className="insideRightImg">
													<img
														src={item.Image}
														alt="adidasImage"
													/>
												</div>
											</div>
											<div className="rightBoxBtmCard">
												<div className="insideLeftDesc">
													<p>13 Items</p>
													<div className="nameBtn">
														<p>Sort By</p>
														<Select
															className="listBar"
															defaultValue="Iphone 13"
															style={{
																width: 100,
															}}
														>
															<Option value="Iphone 13">
																Iphone 13
															</Option>
															<Option value="	Iphone 12 ">
																Iphone 12 
															</Option>
															<Option value="	Samsung S 20">
																Samsung S 20
															</Option>
														
														</Select>
													</div>
													<div className="nameBtn">
														<p>GB</p>
														<Select
															className="listBar"
															defaultValue="128GB"
															style={{
																width: 100,
																backgroundColor:
																	"F6F7F8",
																border: "none",
															}}
														>
															<Option value="256GB">
																256GB
															</Option>
															<Option value="128GB">
																128GB
															</Option>
															<Option value="512GB">
																512GB
															</Option>
															<Option value="1024GB">
																1024GB
															</Option>
															<Option value="64GB">
																64GB
															</Option>
														
														</Select>
													</div>
												</div>
												<div className="insideRightBtn">
													<button>
														<TableOutlined />
													</button>
													<button>
														<MenuOutlined />
													</button>
												</div>
											</div>
										</>
									)
								})}
								<div className="productGridAllCards">
									{productSneakerAllCards.map(
										(items, index) => {
											return (
												<ProductC
													product={items}
													key={index}
												/>
											)
										}
									)}
								</div>
								<ReactPaginate
									breakLabel="..."
									nextLabel=">"
									containerClassName="productGridBtmBtn"
									pageCount={pagination?.total_pages}
									onPageChange={pageChangeHandle}
									previousLabel="<"
									pageClassName="pagination_page"
									previousClassName="pagination_page"
									nextClassName="pagination_page"
									activeClassName="pagination_page-active"
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
