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
									{/* {name} */}
									{/* <img alt='Online Icon' src={onlineIcon} />{" "} */}
									<DropdownButton
										as={ButtonGroup}
										title={name}
										id='bg-vertical-dropdown-1'
										onSelect={(eventKey) => setStatus("Booked")}
									>
										<Dropdown.Item eventKey='1'>
											Monday 11 am - {status}
										</Dropdown.Item>
										<Dropdown.Item eventKey='2'>
											Monday 1 pm - {status}
										</Dropdown.Item>
									</DropdownButton>
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
