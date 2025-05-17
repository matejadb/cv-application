import GeneralInformation from './GeneralInformation';
import EducationInformation from './EducationInformation';
import EmploymentInformation from './EmploymentInformation';

export default function InputInformation({
	name,
	onSetName,
	mail,
	onSetMail,
	phoneNum,
	onSetPhoneNum,
	isSubmittedGeneral,
	setIsSubmittedGeneral,
	schoolName,
	onSetSchoolName,
	field,
	onSetField,
	years,
	onSetYears,
	isSubmittedEducation,
	setIsSubmittedEducation,
	companyName,
	onSetCompanyName,
	position,
	onSetPosition,
	duration,
	onSetDuration,
	isSubmittedWork,
	setIsSubmittedWork,
}) {
	return (
		<div className="cv-input-fields">
			<GeneralInformation
				name={name}
				onSetName={onSetName}
				mail={mail}
				onSetMail={onSetMail}
				phoneNum={phoneNum}
				onSetPhoneNum={onSetPhoneNum}
				isSubmitted={isSubmittedGeneral}
				setIsSubmitted={setIsSubmittedGeneral}
			/>
			<EducationInformation
				schoolName={schoolName}
				onSetSchoolName={onSetSchoolName}
				field={field}
				onSetField={onSetField}
				years={years}
				onSetYears={onSetYears}
				isSubmitted={isSubmittedEducation}
				setIsSubmitted={setIsSubmittedEducation}
			/>
			<EmploymentInformation
				companyName={companyName}
				onSetCompanyName={onSetCompanyName}
				position={position}
				onSetPosition={onSetPosition}
				duration={duration}
				onSetDuration={onSetDuration}
				isSubmitted={isSubmittedWork}
				setIsSubmitted={setIsSubmittedWork}
			/>
		</div>
	);
}
