export default function EmploymentInformation({
	companyName,
	onSetCompanyName,
	position,
	onSetPosition,
	duration,
	onSetDuration,
	isSubmitted,
	setIsSubmitted,
}) {
	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!companyName || !position || !duration) return;

		setIsSubmitted((is) => !is);
	};

	return (
		<div className="container">
			<form className="form">
				<h1>Past Work Experience:</h1>

				<label htmlFor="company-name">Company</label>
				<input
					type="text"
					id="company-name"
					name="company-name"
					disabled={isSubmitted}
					value={companyName}
					onChange={(e) => onSetCompanyName(e.target.value)}
				/>

				<br />
				<label htmlFor="position">Position</label>
				<input
					type="text"
					id="position"
					name="position"
					disabled={isSubmitted}
					value={position}
					onChange={(e) => onSetPosition(e.target.value)}
				/>
				<br />

				<label htmlFor="employment-duration">Employment duration</label>
				<input
					type="text"
					id="employment-duration"
					name="employment-duration"
					disabled={isSubmitted}
					value={duration}
					onChange={(e) => onSetDuration(e.target.value)}
				/>
				<br />

				<div className="buttons">
					{isSubmitted ? (
						<button onClick={handleFormSubmit}>Edit</button>
					) : null}
					{isSubmitted ? null : (
						<button onClick={handleFormSubmit}>Submit</button>
					)}
				</div>
			</form>
		</div>
	);
}
