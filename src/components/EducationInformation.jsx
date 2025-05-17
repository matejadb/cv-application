export default function EducationInformation({
	schoolName,
	onSetSchoolName,
	field,
	onSetField,
	years,
	onSetYears,
	isSubmitted,
	setIsSubmitted,
}) {
	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!schoolName || !field || !years) return;

		setIsSubmitted((is) => !is);
	};

	return (
		<div className="container">
			<form className="form">
				<h1>Education information:</h1>

				<label htmlFor="school-name">School</label>
				<input
					type="text"
					id="school-name"
					name="school-name"
					disabled={isSubmitted}
					value={schoolName}
					onChange={(e) => onSetSchoolName(e.target.value)}
				/>

				<br />
				<label htmlFor="field">Study Field</label>
				<input
					type="text"
					id="field"
					name="field"
					disabled={isSubmitted}
					value={field}
					onChange={(e) => onSetField(e.target.value)}
				/>
				<br />

				<label htmlFor="study-years">Study years</label>
				<input
					type="text"
					id="study-years"
					name="study-years"
					disabled={isSubmitted}
					value={years}
					onChange={(e) => onSetYears(e.target.value)}
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
