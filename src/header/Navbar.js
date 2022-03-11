import { DownOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { Button, Col, Dropdown, Menu, Select, Badge } from "antd"
import Search from "antd/lib/input/Search"
import { Option } from "antd/lib/mentions"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { getCategories } from "../store/allReducer.js/CategoriesReducer"
import apple from './logoapple.png'
import { changeLangAC } from "../store/allReducer.js/LanguageReducer"
import { getAllProducts } from "../store/allReducer.js/ProductsReducer"

export default function Navbar() {
	const dispatch = useDispatch()
	const categories = useSelector((state) => state?.categories?.categories)
	const cart = useSelector((state) => state.cart.cart)
	const lang = useSelector(state => state.lang.lang)
	const allProducts = useSelector(
		(state) => state?.filteredProducts?.allProducts
	)
	const [searchedProducts, setSearchedProducts] = useState([])
	const [search, setSearch] = useState(false)

	const changeSearch = (e) => {
		e === '' ?	setSearch(false) : setSearch(true)
		setSearchedProducts(allProducts.filter((item) => !item.name_uz.toLowerCase().indexOf(e.toLowerCase())))
	}


	const history = useHistory()
	const { SubMenu } = Menu
	const [visible, setVisible] = useState(false)
	const handleMenuClick = (e) => {
		if (e.key === "3") {
			setVisible(false)
		}
	}

	const changeLangSelect = (lang) => {
		localStorage.setItem('lang', lang)
		dispatch(changeLangAC(lang))
	} 

	useEffect(() => {
		dispatch(getCategories())
		dispatch(getAllProducts())
	}, [])

	const handleVisibleChange = (flag) => {
		setVisible(flag)
	}
	const menu = (
		<Menu onClick={handleMenuClick}>
			{categories?.map((item) => {
				return (
					<SubMenu key={item.id} title={item.name_uz}>
						{item.children.map((subitem) => {
							return (
								<SubMenu
									key={subitem.id}
									title={subitem.name_uz}
								>
									{subitem.children.map((sublink) => {
										return (
											<Menu.Item
												onClick={() =>
													history.push(
														`/products/${sublink.slug}`
													)
												}
												key={sublink.id}
											>
												{sublink.name_uz}
											</Menu.Item>
										)
									})}
								</SubMenu>
							)
						})}
					</SubMenu>
				)
			})}
		</Menu>
	)
	return (
		<div className="container">
			<div className="navbar">
				<Col className="leftNav" span={6}>
					<Link to="/">
						{" "}
						<img src={apple} alt="logo" />
					</Link>
					<span>appleSHOP</span>
				</Col>
				<Col className="centerNav" span={10}>
					<Search
						onSearch={(value) => changeSearch(value)}
						placeholder="Search query..."
						enterButton="Search"
						size="large"
						onBlur={(e) => changeSearch(e.target.value)}
					/>

				{
					search ? <div className="searched_products">
					{
						searchedProducts.splice(0,5).map((el) => {
									return (
										<Link to={`/product/${el.slug}`}>
											<div
											key={el?.id}
											className="searched_products__item"
										>
											<img
												src={el?.image}
												alt="img"
											/>
											<h4>{el?.name_uz}</h4>
										</div>
										</Link>
									)
								})
						}
						<div className="searched_products__item">
							{
								searchedProducts?.length > 0 ? 
									<Link to='/products/smartfonlar'>
										<h4>Barchasini ko`rsatish</h4>
									</Link> : 
										<h4>Mahsulot topilmadi</h4>
							}
						</div>
				</div> : null
				}
				</Col>
				<Col className="rightNav" span={8}>
					<Dropdown
						className="categor"
						overlay={menu}
						onVisibleChange={handleVisibleChange}
						visible={visible}
					>
						<div className="downText">
							<p className="text" style={{ cursor: "pointer" }}>
								Menu <DownOutlined />
							</p>
						</div>
					</Dropdown>
					<div>
						<Select
							className="listBar"
							defaultValue={lang === 'uz' ? 'Uz' : 'Ru'} 
							onChange={e => changeLangSelect(e)}
							style={{ width: 60, marginRight: "15px" }}
						>
							<Option sel value="uz">Uz</Option>
							<Option value="ru">Ru</Option>
						</Select>
						<Badge
							style={{ backgroundColor: "black" }}
							count={cart.length}
							showZero
						>
							<Link to="/cart">
								<Button
									className="topRbtn"
									type="default"
									icon={<ShoppingCartOutlined />}
								></Button>
							</Link>
						</Badge>
					</div>
				</Col>
			</div>
		</div>
	)
}
