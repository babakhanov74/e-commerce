import { Divider } from "antd"
import React from "react"
import Navbar from "./Navbar"
import TopNav from "./TopNav"

export default function Header() {
	return (
		<div className="header">
			{/* <div>
                <TopNav/>
            </div> */}
			{/* <Divider /> */}
			<div>
				<Navbar />
			</div>
		</div>
	)
}
