import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button, Modal, Form, Input, InputNumber, Alert } from "antd"
import { addToCartAC } from "../../store/allReducer.js/CartReducer"

export default function ProductC({ product }) {
	const history = useHistory()
	const dispatch = useDispatch()
	const lang = useSelector(state => state.lang.lang)
	const [visible, setVisible] = useState(false)

	const [name, setName] = useState("")
	const [number, setNumber] = useState("")

	const handleAddBtn = () => {
		if (localStorage.getItem("user")) {
			dispatch(addToCartAC(product))
		} else {
			setVisible(true)
		}
	}

	const isOkFunction = () => {
		if (name.length > 0 && number.length > 0) {
			localStorage.setItem(
				"user",
				JSON.stringify({ name: name, number: number })
			)
			dispatch(addToCartAC(product))
			setVisible(false)
		}
	}

	return (
		<>
			<div className="imgProduct" key={product?.id}>
				<img
				style={{cursor:'pointer'}}
					onClick={() => history.push(`/product/${product?.slug}`)}
					className="imgOne"
					src={product?.image}
					alt="#"
				/>
				<h4 onClick={() => history.push(`/product/${product?.slug}`)}>
					{lang === 'uz' ? product?.name_uz.substring(0, 23): product?.name_ru.substring(0, 23)}...
				</h4>
				<div className="descProduct">
					<p className="blue">$1199</p>
					<p className="red">
						<span>$799</span>
						<span>24% Off</span>
					</p>
				</div>
				<button className="AddProductBtn"
				onClick={handleAddBtn}
				>
					Add Product
				</button>
			</div>

			<Modal
				title="Iltimos ro`yhatdan o`ting!"
				centered
				visible={visible}
				onOk={isOkFunction}
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
						<Input onChange={(e) => setName(e.target.value)} />
					</Form.Item>

					<Form.Item
						label="Telefon Raqam"
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
					>
						<Input
							onChange={(e) => setNumber(e.target.value)}
							placeholder="+998 99 *** ** **"
						/>
					</Form.Item>
				</Form>
			</Modal>
		</>
	)
}
