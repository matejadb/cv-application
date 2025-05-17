export default function Output({
	name,
	mail,
	phoneNum,
	schoolName,
	field,
	years,
	companyName,
	position,
	duration,
}) {
	return (
		<div className="output-fields">
			<h1>General Information:</h1>
			<div className="general-information output">
				<div className="left">
					<h3>Full name</h3>
					<h3>{name}</h3>
					<h3>Email</h3>
					<h3>{mail}</h3>
				</div>
				<div className="right">
					<h3>Phone Number</h3>
					<h3>{phoneNum}</h3>
				</div>
			</div>

			<h1>Education Information:</h1>
			<div className="education-information output">
				<div className="left">
					<h3>Schoold Name</h3>
					<h3>{schoolName}</h3>
					<h3>Field</h3>
					<h3>{field}</h3>
				</div>
				<div className="right">
					<h3>Study Years</h3>
					<h3>{years}</h3>
				</div>
			</div>

			<h1>Work Information:</h1>
			<div className="work-information output">
				<div className="left">
					<h3>Company Name</h3>
					<h3>{companyName}</h3>
					<h3>Position</h3>
					<h3>{position}</h3>
				</div>
				<div className="right">
					<h3>Duration</h3>
					<h3>{duration}</h3>
				</div>
			</div>
		</div>
	);
}
