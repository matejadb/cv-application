import { useState } from 'react';
import SubmitCv from './SubmitCv';
import InputInformation from './InputInformation';
import Output from './Output';

export default function App() {
	/* CV Submision */
	const [isSubmittedCv, setIsSubmitCv] = useState(false);

	/* General */
	const [name, setName] = useState('');
	const [mail, setMail] = useState('');
	const [phoneNum, setPhoneNum] = useState('');
	const [isSubmittedGeneral, setIsSubmittedGeneral] = useState(false);

	/* Education */
	const [schoolName, setSchoolName] = useState('');
	const [field, setField] = useState('');
	const [years, setYears] = useState('');
	const [isSubmittedEducation, setIsSubmittedEducation] = useState(false);

	/* Work */
	const [companyName, setCompanyName] = useState('');
	const [position, setPosition] = useState('');
	const [duration, setDuration] = useState('');
	const [isSubmittedWork, setIsSubmittedWork] = useState(false);

	return (
		<>
			{isSubmittedCv ? (
				<Output
					name={name}
					mail={mail}
					phoneNum={phoneNum}
					schoolName={schoolName}
					field={field}
					years={years}
					companyName={companyName}
					position={position}
					duration={duration}
				/>
			) : (
				<InputInformation
					name={name}
					onSetName={setName}
					mail={mail}
					onSetMail={setMail}
					phoneNum={phoneNum}
					onSetPhoneNum={setPhoneNum}
					isSubmittedGeneral={isSubmittedGeneral}
					setIsSubmittedGeneral={setIsSubmittedGeneral}
					schoolName={schoolName}
					onSetSchoolName={setSchoolName}
					field={field}
					onSetField={setField}
					years={years}
					onSetYears={setYears}
					isSubmittedEducation={isSubmittedEducation}
					setIsSubmittedEducation={setIsSubmittedEducation}
					companyName={companyName}
					onSetCompanyName={setCompanyName}
					position={position}
					onSetPosition={setPosition}
					duration={duration}
					onSetDuration={setDuration}
					isSubmittedWork={isSubmittedWork}
					setIsSubmittedWork={setIsSubmittedWork}
				/>
			)}

			{isSubmittedGeneral && isSubmittedEducation && isSubmittedWork ? (
				<SubmitCv isSubmitted={isSubmittedCv} setIsSubmitted={setIsSubmitCv} />
			) : null}
		</>
	);
}
