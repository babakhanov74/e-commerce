import { Button, Col, Row, Select, Badge } from "antd"
import React from "react"
import "antd/dist/antd.css"
import { Option } from "antd/lib/mentions"
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

export default function TopNav() {
	return (
		<div className="container">
			<div className="topBar">
				<Row justify="space-between">
					<Col className="leftBar" span={6}>
						<Select
							className="listBar"
							defaultValue="Uz"
							style={{ width: 60 }}
						>
							<Option value="Uz">Uz</Option>
							<Option value="Ru">Ru</Option>
						</Select>
					</Col>
					<Col className="rightBtn" span={6}>
						{/* <Link to="/products">
                   <Button
                      className="topBtn"
                      type="default"
                      icon={<UserOutlined />}
                      >
                          My Profile
                      </Button>

                   </Link> */}
						<Badge count={5} showZero>
							<Link to="/cart">
								<Button
									className="topRbtn"
									type="default"
									icon={<ShoppingCartOutlined />}
								></Button>
							</Link>
						</Badge>
					</Col>
				</Row>
			</div>
		</div>
	)
}
