export default function GeneralInformation({
	name,
	onSetName,
	mail,
	onSetMail,
	phoneNum,
	onSetPhoneNum,
	isSubmitted,
	setIsSubmitted,
}) {
	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!name || !mail || !phoneNum) return;

		setIsSubmitted((is) => !is);
	};

	return (
		<div className="container">
			<form className="form">
				<h1>General information:</h1>

				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					disabled={isSubmitted}
					value={name}
					onChange={(e) => onSetName(e.target.value)}
				/>

				<br />
				<label htmlFor="mail">Email</label>
				<input
					type="email"
					id="mail"
					name="mail"
					disabled={isSubmitted}
					value={mail}
					onChange={(e) => onSetMail(e.target.value)}
				/>
				<br />

				<label htmlFor="phone-number">Phone</label>
				<input
					type="text"
					id="phone-number"
					name="phone-number"
					disabled={isSubmitted}
					value={phoneNum}
					onChange={(e) => onSetPhoneNum(e.target.value)}
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
