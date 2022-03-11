import { CloseCircleOutlined } from "@ant-design/icons"
import { Button, Divider, Modal, Form, Input } from "antd"
import React, { useState } from "react"
import { changeQtyAC, deleteToCartAC } from "../store/allReducer.js/CartReducer"
import store from "../store/store"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function Cart() {
	const cart = useSelector((state) => state.cart.cart)
	const user = localStorage.getItem("user")
		? JSON.parse(localStorage.getItem("user"))
		: null
	const dispatch = useDispatch()
	const [name, setName] = useState(user ? user.name : "")
	const [address, setAddress] = useState("")
	const [number, setNumber] = useState(user ? user.number : "")
	const [desc, setDesc] = useState("")
	const pilus = (id, qty) => {
		dispatch(changeQtyAC(id, qty))
	}
	const minus = (id, qty) => {
		dispatch(changeQtyAC(id, qty))
	}

	const [visible, setVisible] = useState(false)

	const totalSum = cart.reduce(
		(a, b) => Number(a) + Number(b.price) * Number(b.qty),
		0
	)

	const deliveryPrice = 20000

	const handleCheckOutBtn = () => {
		setVisible(true)
	}

	console.log(name, number)

	// useEffect(() => {
	// 	if(localStorage.getItem('user')){
	// 		let user =
	// 		setName
	// 	}
	// }, [])

	return (
		<>
			{cart.length > 0 ? (
				<div>
					<div className="productPage">
						<div className="container">
							<Divider />
							<div className="topProductName">
								<h3>PRODUCT</h3>
								<div className="rightProductName">
									<h3>PRICE</h3>
									<h3>QTY</h3>
									<h3>UNIT PRICE</h3>
								</div>
							</div>
							<Divider />
							<div className="productAllSneakers">
								{cart?.map((item) => {
									return (
										<div key={item.title}>
											<div className="productSneaker">
												<div className="productName">
													<button
														style={{
															width: "30px",
															background: "none",
															border: "none",
															borderRadius:
																"50px",
															color: "red",
														}}
														onClick={() =>
															dispatch(
																deleteToCartAC(
																	item.id
																)
															)
														}
													>
														<CloseCircleOutlined
															style={{
																cursor: "pointer",
															}}
														/>
													</button>
													<img src={item.image} />
													<h4>{item.name_uz}</h4>
												</div>
												<div className="productPrice">
													<p>
														{Intl.NumberFormat().format(
															item.price
														)}{" "}
														UZS
													</p>
													<div className="clickAdd">
														<button
															onClick={() =>
																minus(
																	item.id,
																	item.qty ===
																		1
																		? 1
																		: item.qty -
																				1
																)
															}
														>
															-
														</button>
														<p>{item.qty}</p>
														<button
															onClick={() =>
																pilus(
																	item.id,
																	item.qty + 1
																)
															}
														>
															+
														</button>
													</div>
													<p>
														{Intl.NumberFormat().format(
															item.price *
																item.qty
														)}{" "}
														UZS
													</p>
												</div>
											</div>
											<Divider />
										</div>
									)
								})}
							</div>
						</div>
					</div>
					<div className="totalCheck">
						<div className="container">
							<div className="allCheck">
								<div className="check">
									<h6>Mahsulotlar summasi</h6>
									<p>
										{Intl.NumberFormat().format(totalSum)}{" "}
										UZS
									</p>
								</div>
								<div className="check">
									<h6>Yetkazib berish narxi</h6>
									<p>
										{Intl.NumberFormat().format(
											deliveryPrice
										)}{" "}
										UZS
									</p>
								</div>
								<div className="check">
									<h6>Kupon</h6>
									<p>Yo`q</p>
								</div>
							</div>
							<Divider />
							<div className="checkTotals">
								<h6>Jami</h6>
								<p>
									{Intl.NumberFormat().format(
										totalSum + deliveryPrice
									)}{" "}
									UZS
								</p>
							</div>
							<button onClick={handleCheckOutBtn}>
								Check out
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className="container" style={{ height: "100%" }}>
					<div
						className="empty_cart"
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							height: "100%",
						}}
					>
						<h2>Savatchada mahsulot yo`q</h2>
						<Link to="/">
							<Button>Bosh sahifaga qaytish</Button>
						</Link>
					</div>
				</div>
			)}

			<Modal
				title="To`lovni bajarish!"
				centered
				visible={visible}
				// onOk={isOkFunction}
				onCancel={() => setVisible(false)}
			>
				<Form
					name="basic"
					layout="vertical"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 14 }}
					initialValues={{ remember: true }}
					// onFinish={onFinish}
					// onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						label="Ismingiz"
						name="username"
						rules={[
							{
								required: true,
								message: "Please input your username!",
							},
						]}
					>
						<Input
							defaultValue={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Form.Item>

					<Form.Item
						label="Telefon Raqam"
						name="number"
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
					>
						<Input
							defaultValue={number}
							onChange={(e) => setNumber(e.target.value)}
							placeholder="+998 99 *** ** **"
						/>
					</Form.Item>

					<Form.Item
						label="Manzil"
						name="address"
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
					>
						<Input
							defaultValue={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</Form.Item>

					<Form.Item
						label="Izoh!"
						name="desc"
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
					>
						<Input.TextArea
							defaultValue={desc}
							onChange={(e) => setDesc(e.target.value)}
						/>
					</Form.Item>
				</Form>
			</Modal>
		</>
	)
}
