import React, { useState } from "react";

import onlineIcon from "./../../icons/onlineIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import "./TextContainer.css";

const TextContainer = ({ users }) => {
	const [status, setStatus] = useState("Unbooked");
	return (
		<div className='textContainer'>
			{users ? (
				<div>
					<h1>People currently chatting:</h1>
					<div className='activeContainer'>
						<h2>
							{users.map(({ name }) => (
								<div key={name} className='activeItem'>
									{name}
									<img alt='Online Icon' src={onlineIcon} />{" "}
								</div>
							))}
						</h2>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default TextContainer;
