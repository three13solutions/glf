import { useState } from 'react'
import './App.css'

export default function App() {
  // State for Applicant Basic Details
  const [applicationFormNo, setApplicationFormNo] = useState('')
  const [date, setDate] = useState('')
  const [applicantPhoto, setApplicantPhoto] = useState(null)
  const [salutation, setSalutation] = useState('')
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [gender, setGender] = useState('')
  const [maritalStatus, setMaritalStatus] = useState('')
  const [nationality, setNationality] = useState('')
  const [pan, setPan] = useState('')
  const [aadhaarNumber, setAadhaarNumber] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [alternatePhoneNumber, setAlternatePhoneNumber] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')

  // State for Financial Background
  const [employmentStatus, setEmploymentStatus] = useState('')
  const [numDependents, setNumDependents] = useState('')
  const [fileITReturn, setFileITReturn] = useState('')
  const [existingDebts, setExistingDebts] = useState('')
  const [monthlyIncome, setMonthlyIncome] = useState('')
  const [monthlyExpense, setMonthlyExpense] = useState('')
  const [monthlyIncomeDetails, setMonthlyIncomeDetails] = useState('')
  const [monthlyExpensesDetails, setMonthlyExpensesDetails] = useState('')
  const [haveCreditCard, setHaveCreditCard] = useState('')
  const [cibilPermission, setCibilPermission] = useState('')

  // State for Aid Details (Page 2)
  const [typeOfAidRequired, setTypeOfAidRequired] = useState([])
  const [totalAmountRequired, setTotalAmountRequired] = useState('')
  const [receivedAidFromOtherTrust, setReceivedAidFromOtherTrust] = useState('')
  const [otherAidDetails, setOtherAidDetails] = useState('')
  const [totalOtherAidsAmount, setTotalOtherAidsAmount] = useState('')
  const [totalSelfContribution, setTotalSelfContribution] = useState('')
  const [aboutYourself, setAboutYourself] = useState('')
  const [interestFreeLoanHelp, setInterestFreeLoanHelp] = useState('')
  const [loanRepaymentTerms, setLoanRepaymentTerms] = useState('')

  // State for Financial Aid (Conditional)
  const [purposeOfFinancialAid, setPurposeOfFinancialAid] = useState([])

  // State for Medical Aid (Conditional)
  const [purposeOfMedicalAid, setPurposeOfMedicalAid] = useState([])
  const [hospitalName, setHospitalName] = useState('')
  const [doctorName, setDoctorName] = useState('')
  const [treatmentTypeDetails, setTreatmentTypeDetails] = useState('')
  const [treatmentEstimate, setTreatmentEstimate] = useState('')
  const [treatmentDuration, setTreatmentDuration] = useState('')
  const [prescription, setPrescription] = useState('')

  // State for Educational Aid (Conditional)
  const [instituteName, setInstituteName] = useState('')
  const [courseName, setCourseName] = useState('')
  const [courseFeesCostBreakdown, setCourseFeesCostBreakdown] = useState('')
  const [currentEducationalQualification, setCurrentEducationalQualification] = useState('')

  // State for Page 3 - Documents Checklist
  const [identityProofDocs, setIdentityProofDocs] = useState([])
  const [addressProofDocs, setAddressProofDocs] = useState([])
  const [aidSupportDocs, setAidSupportDocs] = useState([])
  const [bankVerificationDocs, setBankVerificationDocs] = useState([])
  const [aidUtilizationDocs, setAidUtilizationDocs] = useState([])
  const [uploadedDocuments, setUploadedDocuments] = useState([])

  // State for Bank Details
  const [preferredPaymentMethod, setPreferredPaymentMethod] = useState('')
  const [bankName, setBankName] = useState('')
  const [bankBranch, setBankBranch] = useState('')
  const [ifscCode, setIfscCode] = useState('')
  const [accountName, setAccountName] = useState('')
  const [accountNumber, setAccountNumber] = useState('')

  // State for Declaration, Consent & Authorization
  const [declarationChecks, setDeclarationChecks] = useState([])
  const [applicantSignature, setApplicantSignature] = useState('')

  // Page state
  const [currentPage, setCurrentPage] = useState(1)

  // Handle checkbox changes for aid types
  const handleAidTypeChange = (aidType) => {
    setTypeOfAidRequired(prev => 
      prev.includes(aidType) 
        ? prev.filter(type => type !== aidType)
        : [...prev, aidType]
    )
  }

  // Handle checkbox changes for financial aid purposes
  const handleFinancialAidPurposeChange = (purpose) => {
    setPurposeOfFinancialAid(prev => 
      prev.includes(purpose) 
        ? prev.filter(p => p !== purpose)
        : [...prev, purpose]
    )
  }

  // Handle checkbox changes for medical aid purposes
  const handleMedicalAidPurposeChange = (purpose) => {
    setPurposeOfMedicalAid(prev => 
      prev.includes(purpose) 
        ? prev.filter(p => p !== purpose)
        : [...prev, purpose]
    )
  }

  // Handle checkbox changes for document types
  const handleDocumentCheckboxChange = (docType, setter) => {
    setter(prev => 
      prev.includes(docType) 
        ? prev.filter(doc => doc !== docType)
        : [...prev, docType]
    )
  }

  // Handle declaration checkbox changes
  const handleDeclarationChange = (declaration) => {
    setDeclarationChecks(prev => 
      prev.includes(declaration) 
        ? prev.filter(d => d !== declaration)
        : [...prev, declaration]
    )
  }

const handleFormSubmit = async (e) => {
  e.preventDefault();

  const formDataToSend = new FormData();

  // Append each field to FormData
  formDataToSend.append('applicationFormNo', applicationFormNo);
  formDataToSend.append('date', date);
  formDataToSend.append('salutation', salutation);
  formDataToSend.append('firstName', firstName);
  formDataToSend.append('middleName', middleName);
  formDataToSend.append('lastName', lastName);
  formDataToSend.append('dateOfBirth', dateOfBirth);
  formDataToSend.append('gender', gender);
  formDataToSend.append('maritalStatus', maritalStatus);
  formDataToSend.append('nationality', nationality);
  formDataToSend.append('pan', pan);
  formDataToSend.append('aadhaarNumber', aadhaarNumber);
  formDataToSend.append('phoneNumber', phoneNumber);
  formDataToSend.append('alternatePhoneNumber', alternatePhoneNumber);
  formDataToSend.append('emailAddress', emailAddress);
  formDataToSend.append('address', address);
  formDataToSend.append('city', city);
  formDataToSend.append('zipCode', zipCode);
  formDataToSend.append('state', state);
  formDataToSend.append('country', country);
  formDataToSend.append('employmentStatus', employmentStatus);
  formDataToSend.append('numDependents', numDependents);
  formDataToSend.append('fileITReturn', fileITReturn);
  formDataToSend.append('existingDebts', existingDebts);
  formDataToSend.append('monthlyIncome', monthlyIncome);
  formDataToSend.append('monthlyExpense', monthlyExpense);
  formDataToSend.append('monthlyIncomeDetails', monthlyIncomeDetails);
  formDataToSend.append('monthlyExpensesDetails', monthlyExpensesDetails);
  formDataToSend.append('haveCreditCard', haveCreditCard);
  formDataToSend.append('cibilPermission', cibilPermission);
  formDataToSend.append('typeOfAidRequired', typeOfAidRequired);
  formDataToSend.append('totalAmountRequired', totalAmountRequired);
  formDataToSend.append('receivedAidFromOtherTrust', receivedAidFromOtherTrust);
  formDataToSend.append('otherAidDetails', otherAidDetails);
  formDataToSend.append('totalOtherAidsAmount', totalOtherAidsAmount);
  formDataToSend.append('totalSelfContribution', totalSelfContribution);
  formDataToSend.append('aboutYourself', aboutYourself);
  formDataToSend.append('interestFreeLoanHelp', interestFreeLoanHelp);
  formDataToSend.append('loanRepaymentTerms', loanRepaymentTerms);
  formDataToSend.append('purposeOfFinancialAid', purposeOfFinancialAid);
  formDataToSend.append('purposeOfMedicalAid', purposeOfMedicalAid);
  formDataToSend.append('hospitalName', hospitalName);
  formDataToSend.append('doctorName', doctorName);
  formDataToSend.append('treatmentTypeDetails', treatmentTypeDetails);
  formDataToSend.append('treatmentEstimate', treatmentEstimate);
  formDataToSend.append('treatmentDuration', treatmentDuration);
  formDataToSend.append('prescription', prescription);
  formDataToSend.append('courseName', courseName);
  formDataToSend.append('instituteName', instituteName);
  formDataToSend.append('courseFeesCostBreakdown', courseFeesCostBreakdown);
  formDataToSend.append('currentEducationalQualification', currentEducationalQualification);
  formDataToSend.append('identityProofDocs', identityProofDocs.join(','));
  formDataToSend.append('addressProofDocs', addressProofDocs.join(','));
  formDataToSend.append('aidSupportDocs', aidSupportDocs.join(','));
  formDataToSend.append('bankVerificationDocs', bankVerificationDocs.join(','));
  formDataToSend.append('aidUtilizationDocs', aidUtilizationDocs.join(','));
  formDataToSend.append('preferredPaymentMethod', preferredPaymentMethod);
  formDataToSend.append('bankName', bankName);
  formDataToSend.append('bankBranch', bankBranch);
  formDataToSend.append('ifscCode', ifscCode);
  formDataToSend.append('accountName', accountName);
  formDataToSend.append('accountNumber', accountNumber);
  formDataToSend.append('declarationChecks', declarationChecks);
  formDataToSend.append('applicantSignature', applicantSignature);

  // Handle file uploads
  if (applicantPhoto) {
    formDataToSend.append('applicantPhoto', applicantPhoto);
  }

  if (uploadedDocuments && uploadedDocuments.length > 0) {
    for (let i = 0; i < uploadedDocuments.length; i++) {
      formDataToSend.append('uploadedDocuments', uploadedDocuments[i]);
    }
  }

  try {
    const response = await fetch('https://graceful-living-api-1.onrender.com/api/submit', {
      method: 'POST',
      body: formDataToSend,
    });

setSubmitStatus("loading");
setSubmitMessage("Submitting your form, please wait...");

try {
  const response = await fetch("https://graceful-living-api-1.onrender.com/api/submit", {
    method: "POST",
    body: formDataToSend,
  });

  if (response.ok) {
    const result = await response.json();
    setSubmitStatus("success");
    setSubmitMessage("✅ Form submitted successfully! Thank you.");
  } else {
    const errorText = await response.text();
    setSubmitStatus("error");
    setSubmitMessage(`❌ Form submission failed. (${response.status}): ${errorText}`);
  }
} catch (error) {
  setSubmitStatus("error");
  setSubmitMessage(`❌ An unexpected error occurred: ${error.message}`);
  console.error("💥 Submission error:", error);
}

};

  if (currentPage === 1) {
    return (
      <main>
        <h1>Aid Application - Page 1</h1>

        <form onSubmit={handleFormSubmit}>
          <h2>Applicant Basic Details</h2>

          {/* 1. Form No & Date + Applicant Photo (2 Columns) */}
          <div className="grid-2-col">
            <div className="form-date-group">
              <div className="field-group">
                <label>Application Form No.:</label>
                <input 
                  type="text" 
                  value={applicationFormNo} 
                  onChange={(e) => setApplicationFormNo(e.target.value)} 
                />
              </div>
              <div className="field-group">
                <label>Date:</label>
                <input 
                  type="date" 
                  value={date} 
                  onChange={(e) => setDate(e.target.value)} 
                />
              </div>
            </div>
            <div className="photo-upload-container">
              <label>Applicant Photo:</label>
              <div className="photo-frame">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={(e) => setApplicantPhoto(e.target.files[0])} 
                />
              </div>
            </div>
          </div>

          {/* 2. Salutation + Name Row (4x1) */}
          <div className="grid-4-col">
            <div className="field-group">
              <label>Salutation:</label>
              <select value={salutation} onChange={(e) => setSalutation(e.target.value)}>
                <option value="">Select</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="field-group">
              <label>First Name:</label>
              <input 
                type="text" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
              />
            </div>
            <div className="field-group">
              <label>Middle Name:</label>
              <input 
                type="text" 
                value={middleName} 
                onChange={(e) => setMiddleName(e.target.value)} 
              />
            </div>
            <div className="field-group">
              <label>Last Name:</label>
              <input 
                type="text" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
              />
            </div>
          </div>

          {/* 3. DOB + Gender + Marital Status (3x1) */}
          <div className="grid-3-col">
            <div className="field-group">
              <label>Date of Birth:</label>
              <input 
                type="date" 
                value={dateOfBirth} 
                onChange={(e) => setDateOfBirth(e.target.value)} 
              />
            </div>
            <div className="field-group">
              <label>Gender:</label>
              <div className="radio-group-vertical">
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="male" 
                    name="gender" 
                    value="Male" 
                    checked={gender === 'Male'} 
                    onChange={(e) => setGender(e.target.value)} 
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="female" 
                    name="gender" 
                    value="Female" 
                    checked={gender === 'Female'} 
                    onChange={(e) => setGender(e.target.value)} 
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>
            <div className="field-group">
              <label>Marital Status:</label>
              <div className="radio-group-vertical">
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="single" 
                    name="maritalStatus" 
                    value="Single" 
                    checked={maritalStatus === 'Single'} 
                    onChange={(e) => setMaritalStatus(e.target.value)} 
                  />
                  <label htmlFor="single">Single</label>
                </div>
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="married" 
                    name="maritalStatus" 
                    value="Married" 
                    checked={maritalStatus === 'Married'} 
                    onChange={(e) => setMaritalStatus(e.target.value)} 
                  />
                  <label htmlFor="married">Married</label>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Nationality + PAN + Aadhaar (3x1) */}
          <div className="grid-3-col">
            <div className="field-group">
              <label>Nationality:</label>
              <input 
                type="text" 
                value={nationality} 
                onChange={(e) => setNationality(e.target.value)} 
              />
            </div>
            <div className="field-group">
              <label>PAN:</label>
              <input 
                type="text" 
                value={pan} 
                onChange={(e) => setPan(e.target.value)} 
              />
            </div>
            <div className="field-group">
              <label>Aadhaar Number:</label>
              <input 
                type="text" 
                value={aadhaarNumber} 
                onChange={(e) => setAadhaarNumber(e.target.value)} 
              />
            </div>
          </div>

          {/* 5. Phone + Alternate + Email (3x1) */}
          <div className="grid-3-col">
            <div className="field-group">
              <label>Phone Number:</label>
              <input 
                type="tel" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
              />
            </div>
            <div className="field-group">
              <label>Alternate Phone Number:</label>
              <input 
                type="tel" 
                value={alternatePhoneNumber} 
                onChange={(e) => setAlternatePhoneNumber(e.target.value)} 
              />
            </div>
            <div className="field-group">
              <label>Email Address:</label>
              <input 
                type="email" 
                value={emailAddress} 
                onChange={(e) => setEmailAddress(e.target.value)} 
              />
            </div>
          </div>

          {/* 6. Address (full width) */}
          <div className="field-group">
            <label>Address:</label>
            <textarea 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
            />
          </div>

          {/* 7. City + Zip + State + Country (4x1) */}
          <div className="grid-4-col">
            <div className="field-group">
              <label>City:</label>
              <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
              />
            </div>
            <div className="field-group">
              <label>Zip Code:</label>
              <input 
                type="text" 
                value={zipCode} 
                onChange={(e) => setZipCode(e.target.value)} 
              />
            </div>
            <div className="field-group">
              <label>State:</label>
              <input 
                type="text" 
                value={state} 
                onChange={(e) => setState(e.target.value)} 
              />
            </div>
            <div className="field-group">
              <label>Country:</label>
              <input 
                type="text" 
                value={country} 
                onChange={(e) => setCountry(e.target.value)} 
              />
            </div>
          </div>

          <h2>Financial Background</h2>

          {/* 1. Employment Status + IT Return + Existing Debts + Dependents (4x1) */}
          <div className="grid-4-col">
            <div className="field-group">
              <label>Employment Status:</label>
              <div className="radio-group-vertical">
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="employed" 
                    name="employmentStatus" 
                    value="Employed" 
                    checked={employmentStatus === 'Employed'} 
                    onChange={(e) => setEmploymentStatus(e.target.value)} 
                  />
                  <label htmlFor="employed">Employed</label>
                </div>
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="unemployed" 
                    name="employmentStatus" 
                    value="Unemployed" 
                    checked={employmentStatus === 'Unemployed'} 
                    onChange={(e) => setEmploymentStatus(e.target.value)} 
                  />
                  <label htmlFor="unemployed">Unemployed</label>
                </div>
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="selfEmployed" 
                    name="employmentStatus" 
                    value="Self-Employed" 
                    checked={employmentStatus === 'Self-Employed'} 
                    onChange={(e) => setEmploymentStatus(e.target.value)} 
                  />
                  <label htmlFor="selfEmployed">Self-Employed</label>
                </div>
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="retired" 
                    name="employmentStatus" 
                    value="Retired" 
                    checked={employmentStatus === 'Retired'} 
                    onChange={(e) => setEmploymentStatus(e.target.value)} 
                  />
                  <label htmlFor="retired">Retired</label>
                </div>
              </div>
            </div>
            <div className="field-group">
              <label>Do you file an IT return:</label>
              <div className="radio-group-vertical">
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="itReturnYes" 
                    name="fileITReturn" 
                    value="Yes" 
                    checked={fileITReturn === 'Yes'} 
                    onChange={(e) => setFileITReturn(e.target.value)} 
                  />
                  <label htmlFor="itReturnYes">Yes</label>
                </div>
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="itReturnNo" 
                    name="fileITReturn" 
                    value="No" 
                    checked={fileITReturn === 'No'} 
                    onChange={(e) => setFileITReturn(e.target.value)} 
                  />
                  <label htmlFor="itReturnNo">No</label>
                </div>
              </div>
            </div>
            <div className="field-group">
              <label>Any Existing Debts:</label>
              <div className="radio-group-vertical">
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="debtsYes" 
                    name="existingDebts" 
                    value="Yes" 
                    checked={existingDebts === 'Yes'} 
                    onChange={(e) => setExistingDebts(e.target.value)} 
                  />
                  <label htmlFor="debtsYes">Yes</label>
                </div>
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="debtsNo" 
                    name="existingDebts" 
                    value="No" 
                    checked={existingDebts === 'No'} 
                    onChange={(e) => setExistingDebts(e.target.value)} 
                  />
                  <label htmlFor="debtsNo">No</label>
                </div>
              </div>
            </div>
            <div className="field-group">
              <label>No. of Dependents:</label>
              <input 
                type="number" 
                value={numDependents} 
                onChange={(e) => setNumDependents(e.target.value)} 
              />
            </div>
          </div>

          {/* 2. Monthly Income + Monthly Expense (2x1) */}
          <div className="grid-2-col">
            <div className="field-group">
              <label>Monthly Income:</label>
              <div className="currency-input">
                <span className="currency-symbol">₹</span>
                <input 
                  type="number" 
                  value={monthlyIncome} 
                  onChange={(e) => setMonthlyIncome(e.target.value)} 
                />
              </div>
            </div>
            <div className="field-group">
              <label>Monthly Expense:</label>
              <div className="currency-input">
                <span className="currency-symbol">₹</span>
                <input 
                  type="number" 
                  value={monthlyExpense} 
                  onChange={(e) => setMonthlyExpense(e.target.value)} 
                />
              </div>
            </div>
          </div>

          {/* 3. Monthly Income Details + Monthly Expenses Details (2x1) */}
          <div className="grid-2-col">
            <div className="field-group">
              <label>Monthly Income Details:</label>
              <textarea 
                value={monthlyIncomeDetails} 
                onChange={(e) => setMonthlyIncomeDetails(e.target.value)} 
              />
            </div>
            <div className="field-group">
              <label>Monthly Expenses Details / Existing Debt:</label>
              <textarea 
                value={monthlyExpensesDetails} 
                onChange={(e) => setMonthlyExpensesDetails(e.target.value)} 
              />
            </div>
          </div>

          {/* 5. Credit Card + CIBIL Score Permission (2x1) */}
          <div className="grid-2-col">
            <div className="field-group">
              <label>Do you have a Credit Card:</label>
              <div className="radio-group-vertical">
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="creditCardYes" 
                    name="haveCreditCard" 
                    value="Yes" 
                    checked={haveCreditCard === 'Yes'} 
                    onChange={(e) => setHaveCreditCard(e.target.value)} 
                  />
                  <label htmlFor="creditCardYes">Yes</label>
                </div>
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="creditCardNo" 
                    name="haveCreditCard" 
                    value="No" 
                    checked={haveCreditCard === 'No'} 
                    onChange={(e) => setHaveCreditCard(e.target.value)} 
                  />
                  <label htmlFor="creditCardNo">No</label>
                </div>
              </div>
            </div>
            <div className="field-group">
              <label>Permission to Access CIBIL Score:</label>
              <div className="radio-group-vertical">
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="cibilYes" 
                    name="cibilPermission" 
                    value="Yes" 
                    checked={cibilPermission === 'Yes'} 
                    onChange={(e) => setCibilPermission(e.target.value)} 
                  />
                  <label htmlFor="cibilYes">Yes</label>
                </div>
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="cibilNo" 
                    name="cibilPermission" 
                    value="No" 
                    checked={cibilPermission === 'No'} 
                    onChange={(e) => setCibilPermission(e.target.value)} 
                  />
                  <label htmlFor="cibilNo">No</label>
                </div>
              </div>
            </div>
          </div>

          <div className="button-container">
            <button type="button" onClick={() => setCurrentPage(2)}>Next</button>
          </div>
        </form>
      </main>
    )
  } else if (currentPage === 2) {
    return (
      <main>
        <h1>Aid Application - Page 2</h1>

        <form onSubmit={handleFormSubmit}>
          <h2>Aid Details</h2>

          {/* 1. Type of Aid Required + Total Amount Required (2x1) */}
          <div className="grid-2-col">
            <div className="field-group">
              <label>Type of Aid Required:</label>
              <div className="checkbox-group-vertical">
                <div className="checkbox-option">
                  <input 
                    type="checkbox" 
                    id="financialAid" 
                    checked={typeOfAidRequired.includes('Financial Aid')} 
                    onChange={() => handleAidTypeChange('Financial Aid')} 
                  />
                  <label htmlFor="financialAid">Financial Aid</label>
                </div>
                <div className="checkbox-option">
                  <input 
                    type="checkbox" 
                    id="medicalAid" 
                    checked={typeOfAidRequired.includes('Medical Aid')} 
                    onChange={() => handleAidTypeChange('Medical Aid')} 
                  />
                  <label htmlFor="medicalAid">Medical Aid</label>
                </div>
                <div className="checkbox-option">
                  <input 
                    type="checkbox" 
                    id="educationalAid" 
                    checked={typeOfAidRequired.includes('Educational Aid')} 
                    onChange={() => handleAidTypeChange('Educational Aid')} 
                  />
                  <label htmlFor="educationalAid">Educational Aid</label>
                </div>
              </div>
            </div>
            <div className="field-group">
              <label>Total Amount Required:</label>
              <div className="currency-input">
                <span className="currency-symbol">₹</span>
                <input 
                  type="number" 
                  value={totalAmountRequired} 
                  onChange={(e) => setTotalAmountRequired(e.target.value)} 
                />
              </div>
            </div>
          </div>

          {/* 2. Have You Received Aid + Details of Other Aid (full width) */}
          <div className="grid-2-col">
            <div className="field-group">
              <label>Have You Received Aid from Another Trust or Self-Contribute?:</label>
              <div className="radio-group-vertical">
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="receivedAidYes" 
                    name="receivedAidFromOtherTrust" 
                    value="Yes" 
                    checked={receivedAidFromOtherTrust === 'Yes'} 
                    onChange={(e) => setReceivedAidFromOtherTrust(e.target.value)} 
                  />
                  <label htmlFor="receivedAidYes">Yes</label>
                </div>
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="receivedAidNo" 
                    name="receivedAidFromOtherTrust" 
                    value="No" 
                    checked={receivedAidFromOtherTrust === 'No'} 
                    onChange={(e) => setReceivedAidFromOtherTrust(e.target.value)} 
                  />
                  <label htmlFor="receivedAidNo">No</label>
                </div>
              </div>
            </div>
            <div className="field-group">
              <label>Total of Other Aids Amount Received:</label>
              <div className="currency-input">
                <span className="currency-symbol">₹</span>
                <input 
                  type="number" 
                  value={totalOtherAidsAmount} 
                  onChange={(e) => setTotalOtherAidsAmount(e.target.value)} 
                />
              </div>
            </div>
          </div>

          {/* 3. Details of Other Aid/Help Received (full width) */}
          <div className="field-group">
            <label>Details of Other Aid/Help Received / Self Contribution:</label>
            <textarea 
              value={otherAidDetails} 
              onChange={(e) => setOtherAidDetails(e.target.value)} 
            />
          </div>

          {/* 4. Total Self-Contribution + Interest-free loan help (2x1) */}
          <div className="grid-2-col">
            <div className="field-group">
              <label>Total Self-Contribution Amount:</label>
              <div className="currency-input">
                <span className="currency-symbol">₹</span>
                <input 
                  type="number" 
                  value={totalSelfContribution} 
                  onChange={(e) => setTotalSelfContribution(e.target.value)} 
                />
              </div>
            </div>
            <div className="field-group">
              <label>Will an interest-free loan help you?:</label>
              <div className="radio-group-vertical">
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="loanHelpYes" 
                    name="interestFreeLoanHelp" 
                    value="Yes" 
                    checked={interestFreeLoanHelp === 'Yes'} 
                    onChange={(e) => setInterestFreeLoanHelp(e.target.value)} 
                  />
                  <label htmlFor="loanHelpYes">Yes</label>
                </div>
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="loanHelpNo" 
                    name="interestFreeLoanHelp" 
                    value="No" 
                    checked={interestFreeLoanHelp === 'No'} 
                    onChange={(e) => setInterestFreeLoanHelp(e.target.value)} 
                  />
                  <label htmlFor="loanHelpNo">No</label>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Tell us about yourself (full width) */}
          <div className="field-group">
            <label>Tell us about yourself, your current situation, and why you deserve this aid:</label>
            <textarea 
              value={aboutYourself} 
              onChange={(e) => setAboutYourself(e.target.value)}
              style={{ minHeight: '120px' }}
            />
          </div>

          {/* 6. Loan Repayment Terms (full width) */}
          <div className="field-group">
            <label>If yes, Loan Repayment Terms:</label>
            <textarea 
              value={loanRepaymentTerms} 
              onChange={(e) => setLoanRepaymentTerms(e.target.value)} 
            />
          </div>

          {/* Conditional Section: Financial Aid */}
          {typeOfAidRequired.includes('Financial Aid') && (
            <>
              <h2>Financial Aid (Conditional)</h2>
              <div className="field-group">
                <label>Purpose of Financial Aid:</label>
                <div className="checkbox-group-vertical">
                  <div className="checkbox-option">
                    <input 
                      type="checkbox" 
                      id="buyingHouse" 
                      checked={purposeOfFinancialAid.includes('Buying a House')} 
                      onChange={() => handleFinancialAidPurposeChange('Buying a House')} 
                    />
                    <label htmlFor="buyingHouse">Buying a House</label>
                  </div>
                  <div className="checkbox-option">
                    <input 
                      type="checkbox" 
                      id="payingRent" 
                      checked={purposeOfFinancialAid.includes('Paying Rent')} 
                      onChange={() => handleFinancialAidPurposeChange('Paying Rent')} 
                    />
                    <label htmlFor="payingRent">Paying Rent</label>
                  </div>
                  <div className="checkbox-option">
                    <input 
                      type="checkbox" 
                      id="rationEssentials" 
                      checked={purposeOfFinancialAid.includes('Ration & Essentials')} 
                      onChange={() => handleFinancialAidPurposeChange('Ration & Essentials')} 
                    />
                    <label htmlFor="rationEssentials">Ration & Essentials</label>
                  </div>
                  <div className="checkbox-option">
                    <input 
                      type="checkbox" 
                      id="clearingDebts" 
                      checked={purposeOfFinancialAid.includes('Clearing Debts')} 
                      onChange={() => handleFinancialAidPurposeChange('Clearing Debts')} 
                    />
                    <label htmlFor="clearingDebts">Clearing Debts</label>
                  </div>
                  <div className="checkbox-option">
                    <input 
                      type="checkbox" 
                      id="businessSupport" 
                      checked={purposeOfFinancialAid.includes('Business Support')} 
                      onChange={() => handleFinancialAidPurposeChange('Business Support')} 
                    />
                    <label htmlFor="businessSupport">Business Support</label>
                  </div>
                  <div className="checkbox-option">
                    <input 
                      type="checkbox" 
                      id="others" 
                      checked={purposeOfFinancialAid.includes('Others')} 
                      onChange={() => handleFinancialAidPurposeChange('Others')} 
                    />
                    <label htmlFor="others">Others</label>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Conditional Section: Medical Aid */}
          {typeOfAidRequired.includes('Medical Aid') && (
            <>
              <h2>Medical Aid (Conditional)</h2>

              {/* Purpose of Medical Aid */}
              <div className="field-group">
                <label>Purpose of Medical Aid:</label>
                <div className="checkbox-group-vertical">
                  <div className="checkbox-option">
                    <input 
                      type="checkbox" 
                      id="medicinePurchase" 
                      checked={purposeOfMedicalAid.includes('Medicine Purchase')} 
                      onChange={() => handleMedicalAidPurposeChange('Medicine Purchase')} 
                    />
                    <label htmlFor="medicinePurchase">Medicine Purchase</label>
                  </div>
                  <div className="checkbox-option">
                    <input 
                      type="checkbox" 
                      id="medicalEquipment" 
                      checked={purposeOfMedicalAid.includes('Medical Equipment')} 
                      onChange={() => handleMedicalAidPurposeChange('Medical Equipment')} 
                    />
                    <label htmlFor="medicalEquipment">Medical Equipment</label>
                  </div>
                  <div className="checkbox-option">
                    <input 
                      type="checkbox" 
                      id="testingDiagnostics" 
                      checked={purposeOfMedicalAid.includes('Testing & Diagnostics')} 
                      onChange={() => handleMedicalAidPurposeChange('Testing & Diagnostics')} 
                    />
                    <label htmlFor="testingDiagnostics">Testing & Diagnostics</label>
                  </div>
                  <div className="checkbox-option">
                    <input 
                      type="checkbox" 
                      id="surgery" 
                      checked={purposeOfMedicalAid.includes('Surgery')} 
                      onChange={() => handleMedicalAidPurposeChange('Surgery')} 
                    />
                    <label htmlFor="surgery">Surgery</label>
                  </div>
                  <div className="checkbox-option">
                    <input 
                      type="checkbox" 
                      id="specialisedTreatment" 
                      checked={purposeOfMedicalAid.includes('Specialised Treatment')} 
                      onChange={() => handleMedicalAidPurposeChange('Specialised Treatment')} 
                    />
                    <label htmlFor="specialisedTreatment">Specialised Treatment</label>
                  </div>
                  <div className="checkbox-option">
                    <input 
                      type="checkbox" 
                      id="hospitalizationCost" 
                      checked={purposeOfMedicalAid.includes('Hospitalization Cost')} 
                      onChange={() => handleMedicalAidPurposeChange('Hospitalization Cost')} 
                    />
                    <label htmlFor="hospitalizationCost">Hospitalization Cost</label>
                  </div>
                </div>
              </div>

              {/* Hospital Name + Doctor's Name (2x1) */}
              <div className="grid-2-col">
                <div className="field-group">
                  <label>Hospital/Nursing/Diagnostic Center Name:</label>
                  <input 
                    type="text" 
                    value={hospitalName} 
                    onChange={(e) => setHospitalName(e.target.value)} 
                  />
                </div>
                <div className="field-group">
                  <label>Doctor's Name:</label>
                  <input 
                    type="text" 
                    value={doctorName} 
                    onChange={(e) => setDoctorName(e.target.value)} 
                  />
                </div>
              </div>

              {/* Treatment Type Details + Treatment Estimate (2x1) */}
              <div className="grid-2-col">
                <div className="field-group">
                  <label>Diagnostics/Surgery/Treatment Type Details:</label>
                  <textarea 
                    value={treatmentTypeDetails} 
                    onChange={(e) => setTreatmentTypeDetails(e.target.value)} 
                  />
                </div>
                <div className="field-group">
                  <label>Diagnostic/Treatment Estimate/Cost Breakdown:</label>
                  <textarea 
                    value={treatmentEstimate} 
                    onChange={(e) => setTreatmentEstimate(e.target.value)} 
                  />
                </div>
              </div>

              {/* Treatment Duration + Prescription (2x1) */}
              <div className="grid-2-col">
                <div className="field-group">
                  <label>Treatment Days/Duration:</label>
                  <input 
                    type="text" 
                    value={treatmentDuration} 
                    onChange={(e) => setTreatmentDuration(e.target.value)} 
                  />
                </div>
                <div className="field-group">
                  <label>Prescription for Medicine / Device:</label>
                  <textarea 
                    value={prescription} 
                    onChange={(e) => setPrescription(e.target.value)} 
                  />
                </div>
              </div>
            </>
          )}

          {/* Conditional Section: Educational Aid */}
          {typeOfAidRequired.includes('Educational Aid') && (
            <>
              <h2>Educational Aid (Conditional)</h2>

              {/* Institute Name + Course Name (2x1) */}
              <div className="grid-2-col">
                <div className="field-group">
                  <label>Institute Name:</label>
                  <input 
                    type="text" 
                    value={instituteName} 
                    onChange={(e) => setInstituteName(e.target.value)} 
                  />
                </div>
                <div className="field-group">
                  <label>Course/Program Name:</label>
                  <input 
                    type="text" 
                    value={courseName} 
                    onChange={(e) => setCourseName(e.target.value)} 
                  />
                </div>
              </div>

              {/* Course Fees Cost Breakdown + Current Educational Qualification (2x1) */}
              <div className="grid-2-col">
                <div className="field-group">
                  <label>Course/Tuition Fees Cost Breakdown:</label>
                  <textarea 
                    value={courseFeesCostBreakdown} 
                    onChange={(e) => setCourseFeesCostBreakdown(e.target.value)} 
                  />
                </div>
                <div className="field-group">
                  <label>Current Educational Qualification:</label>
                  <input 
                    type="text" 
                    value={currentEducationalQualification} 
                    onChange={(e) => setCurrentEducationalQualification(e.target.value)} 
                  />
                </div>
              </div>
            </>
          )}

          <div className="button-container">
            <div className="grid-2-col">
              <button type="button" onClick={() => setCurrentPage(1)}>Previous</button>
              <button type="button" onClick={() => setCurrentPage(3)}>Next</button>
            </div>
          </div>
        </form>
      </main>
    )
  } else if (currentPage === 3) {
    return (
      <main>
        <h1>Aid Application - Page 3</h1>

        <form onSubmit={handleFormSubmit}>
          <h2>Documents Checklist</h2>

          {/* Identity Proof Documents */}
          <div className="field-group">
            <label>Identity Proof:</label>
            <div className="checkbox-group-vertical">
              <div className="checkbox-option">
                <input 
                  type="checkbox" 
                  id="passportPhoto" 
                  checked={identityProofDocs.includes('Passport-size Photograph')} 
                  onChange={() => handleDocumentCheckboxChange('Passport-size Photograph', setIdentityProofDocs)} 
                />
                <label htmlFor="passportPhoto">Passport-size Photograph</label>
              </div>
              <div className="checkbox-option">
                <input 
                  type="checkbox" 
                  id="aadhaarVoter" 
                  checked={identityProofDocs.includes('Aadhaar Card / Voter ID')} 
                  onChange={() => handleDocumentCheckboxChange('Aadhaar Card / Voter ID', setIdentityProofDocs)} 
                />
                <label htmlFor="aadhaarVoter">Aadhaar Card / Voter ID</label>
              </div>
              <div className="checkbox-option">
                <input 
                  type="checkbox" 
                  id="panCardCopy" 
                  checked={identityProofDocs.includes('PAN Card Copy')} 
                  onChange={() => handleDocumentCheckboxChange('PAN Card Copy', setIdentityProofDocs)} 
                />
                <label htmlFor="panCardCopy">PAN Card Copy</label>
              </div>
            </div>
          </div>

          {/* Address Proof Documents */}
          <div className="field-group">
            <label>Address Proof:</label>
            <div className="checkbox-group-vertical">
              <div className="checkbox-option">
                <input 
                  type="checkbox" 
                  id="electricityBill" 
                  checked={addressProofDocs.includes('Electricity Bill')} 
                  onChange={() => handleDocumentCheckboxChange('Electricity Bill', setAddressProofDocs)} 
                />
                <label htmlFor="electricityBill">Electricity Bill</label>
              </div>
              <div className="checkbox-option">
                <input 
                  type="checkbox" 
                  id="rentAgreement" 
                  checked={addressProofDocs.includes('L&L / Rent Agreement (if renting)')} 
                  onChange={() => handleDocumentCheckboxChange('L&L / Rent Agreement (if renting)', setAddressProofDocs)} 
                />
                <label htmlFor="rentAgreement">L&L / Rent Agreement (if renting)</label>
              </div>
              <div className="checkbox-option">
                <input 
                  type="checkbox" 
                  id="ownerNOC" 
                  checked={addressProofDocs.includes('Owner\'s NOC (required if name differs and no rent agreement)')} 
                  onChange={() => handleDocumentCheckboxChange('Owner\'s NOC (required if name differs and no rent agreement)', setAddressProofDocs)} 
                />
                <label htmlFor="ownerNOC">Owner's NOC (required if name differs and no rent agreement)</label>
              </div>
            </div>
          </div>

          {/* Aid Support Documents */}
          <div className="field-group">
            <label>Aid Support Documents:</label>
            <div className="checkbox-group-vertical">
              <div className="checkbox-option">
                <input 
                  type="checkbox" 
                  id="financialAidDoc" 
                  checked={aidSupportDocs.includes('For Financial Aid: Relevant Document for the Type')} 
                  onChange={() => handleDocumentCheckboxChange('For Financial Aid: Relevant Document for the Type', setAidSupportDocs)} 
                />
                <label htmlFor="financialAidDoc">For Financial Aid: Relevant Document for the Type</label>
              </div>
              <div className="checkbox-option">
                <input 
                  type="checkbox" 
                  id="medicalAidDoc" 
                  checked={aidSupportDocs.includes('For Medical Aid: Medical Cost Certificate from Hospital')} 
                  onChange={() => handleDocumentCheckboxChange('For Medical Aid: Medical Cost Certificate from Hospital', setAidSupportDocs)} 
                />
                <label htmlFor="medicalAidDoc">For Medical Aid: Medical Cost Certificate from Hospital</label>
              </div>
              <div className="checkbox-option">
                <input 
                  type="checkbox" 
                  id="educationalAidDoc" 
                  checked={aidSupportDocs.includes('For Educational Aid: Education Fees/Instruction Brochure')} 
                  onChange={() => handleDocumentCheckboxChange('For Educational Aid: Education Fees/Instruction Brochure', setAidSupportDocs)} 
                />
                <label htmlFor="educationalAidDoc">For Educational Aid: Education Fees/Instruction Brochure</label>
              </div>
            </div>
          </div>

          {/* Bank Verification Documents */}
          <div className="field-group">
            <label>Bank Verification Documents:</label>
            <div className="checkbox-group-vertical">
              <div className="checkbox-option">
                <input 
                  type="checkbox" 
                  id="cancelledCheque" 
                  checked={bankVerificationDocs.includes('Cancelled Cheque')} 
                  onChange={() => handleDocumentCheckboxChange('Cancelled Cheque', setBankVerificationDocs)} 
                />
                <label htmlFor="cancelledCheque">Cancelled Cheque</label>
              </div>
              <div className="checkbox-option">
                <input 
                  type="checkbox" 
                  id="bankPassbook" 
                  checked={bankVerificationDocs.includes('Bank Passbook Copy')} 
                  onChange={() => handleDocumentCheckboxChange('Bank Passbook Copy', setBankVerificationDocs)} 
                />
                <label htmlFor="bankPassbook">Bank Passbook Copy</label>
              </div>
            </div>
          </div>

          {/* Aid Utilization Proof */}
          <div className="field-group">
            <label>Aid Utilization Proof:</label>
            <div className="checkbox-group-vertical">
              <div className="checkbox-option">
                <input 
                  type="checkbox" 
                  id="invoiceBill" 
                  checked={aidUtilizationDocs.includes('Invoice/Bill')} 
                  onChange={() => handleDocumentCheckboxChange('Invoice/Bill', setAidUtilizationDocs)} 
                />
                <label htmlFor="invoiceBill">Invoice/Bill</label>
              </div>
              <div className="checkbox-option">
                <input 
                  type="checkbox" 
                  id="receiptInstitute" 
                  checked={aidUtilizationDocs.includes('Receipt from Institute with Applicant/Beneficiary Details')} 
                  onChange={() => handleDocumentCheckboxChange('Receipt from Institute with Applicant/Beneficiary Details', setAidUtilizationDocs)} 
                />
                <label htmlFor="receiptInstitute">Receipt from Institute with Applicant/Beneficiary Details</label>
              </div>
            </div>
          </div>

          {/* Document Upload */}
          <div className="field-group">
            <label>Upload the Checked Documents:</label>
            <input 
              type="file" 
              multiple 
              accept=".pdf,.jpg,.jpeg,.png,.gif" 
              onChange={(e) => setUploadedDocuments(Array.from(e.target.files))} 
            />
          </div>

          <h2>Bank Details</h2>

          {/* Preferred Payment Method + Bank Name (2x1) */}
          <div className="grid-2-col">
            <div className="field-group">
              <label>Preferred Payment Method:</label>
              <div className="radio-group-vertical">
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="cheque" 
                    name="preferredPaymentMethod" 
                    value="Cheque" 
                    checked={preferredPaymentMethod === 'Cheque'} 
                    onChange={(e) => setPreferredPaymentMethod(e.target.value)} 
                  />
                  <label htmlFor="cheque">Cheque</label>
                </div>
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="dd" 
                    name="preferredPaymentMethod" 
                    value="DD" 
                    checked={preferredPaymentMethod === 'DD'} 
                    onChange={(e) => setPreferredPaymentMethod(e.target.value)} 
                  />
                  <label htmlFor="dd">DD</label>
                </div>
                <div className="radio-option">
                  <input 
                    type="radio" 
                    id="bankTransfer" 
                    name="preferredPaymentMethod" 
                    value="Bank Transfer" 
                    checked={preferredPaymentMethod === 'Bank Transfer'} 
                    onChange={(e) => setPreferredPaymentMethod(e.target.value)} 
                  />
                  <label htmlFor="bankTransfer">Bank Transfer</label>
                </div>
              </div>
            </div>
            <div className="field-group">
              <label>Bank Name:</label>
              <input 
                type="text" 
                value={bankName} 
                onChange={(e) => setBankName(e.target.value)} 
              />
            </div>
          </div>

          {/* Bank Branch + IFSC Code (2x1) */}
          <div className="grid-2-col">
            <div className="field-group">
              <label>Bank Branch:</label>
              <input 
                type="text" 
                value={bankBranch} 
                onChange={(e) => setBankBranch(e.target.value)} 
              />
            </div>
            <div className="field-group">
              <label>IFSC Code:</label>
              <input 
                type="text" 
                value={ifscCode} 
                onChange={(e) => setIfscCode(e.target.value)} 
              />
            </div>
          </div>

          {/* Account Name + Account Number (2x1) */}
          <div className="grid-2-col">
            <div className="field-group">
              <label>In Favor of / Account Name:</label>
              <input 
                type="text" 
                value={accountName} 
                onChange={(e) => setAccountName(e.target.value)} 
              />
            </div>
            <div className="field-group">
              <label>Account Number:</label>
              <input 
                type="text" 
                value={accountNumber} 
                onChange={(e) => setAccountNumber(e.target.value)} 
              />
            </div>
          </div>

          <h2>Declaration, Consent & Authorization</h2>

          <div className="field-group">
            <div className="checkbox-group-vertical">
              <div className="checkbox-option">
                <input 
                  type="checkbox" 
                  id="declaration1" 
                  checked={declarationChecks.includes('I declare that the above information is true and accurate.')} 
                  onChange={() => handleDeclarationChange('I declare that the above information is true and accurate.')} 
                />
                <label htmlFor="declaration1">I declare that the above information is true and accurate.</label>
              </div>
              <div className="checkbox-option">
                <input 
                  type="checkbox" 
                  id="declaration2" 
                  checked={declarationChecks.includes('I consent to the verification of details by the Graceful Living Foundation.')} 
                  onChange={() => handleDeclarationChange('I consent to the verification of details by the Graceful Living Foundation.')} 
                />
                <label htmlFor="declaration2">I consent to the verification of details by the Graceful Living Foundation.</label>
              </div>
              <div className="checkbox-option">
                <input 
                  type="checkbox" 
                  id="declaration3" 
                  checked={declarationChecks.includes('I authorize the Graceful Living Foundation to access my CIBIL score for financial assessment.')} 
                  onChange={() => handleDeclarationChange('I authorize the Graceful Living Foundation to access my CIBIL score for financial assessment.')} 
                />
                <label htmlFor="declaration3">I authorize the Graceful Living Foundation to access my CIBIL score for financial assessment.</label>
              </div>
              <div className="checkbox-option">
                <input 
                  type="checkbox" 
                  id="declaration4" 
                  checked={declarationChecks.includes('I understand that acceptance of my Aid Application Form does not guarantee the aid.')} 
                  onChange={() => handleDeclarationChange('I understand that acceptance of my Aid Application Form does not guarantee the aid.')} 
                />
                <label htmlFor="declaration4">I understand that acceptance of my Aid Application Form does not guarantee the aid.</label>
              </div>
              <div className="checkbox-option">
                <input 
                  type="checkbox" 
                  id="declaration5" 
                  checked={declarationChecks.includes('I understand that an incomplete form will not be processed even if submitted.')} 
                  onChange={() => handleDeclarationChange('I understand that an incomplete form will not be processed even if submitted.')} 
                />
                <label htmlFor="declaration5">I understand that an incomplete form will not be processed even if submitted.</label>
              </div>
            </div>
          </div>

          <div className="field-group">
            <label>Applicant Signature / Thumb Impression:</label>
            <input 
              type="text" 
              value={applicantSignature} 
              onChange={(e) => setApplicantSignature(e.target.value)} 
              placeholder="Type your full name as signature"
            />
          </div>

          <div className="button-container">
            <div className="grid-2-col">
              <button type="button" onClick={() => setCurrentPage(2)}>Previous</button>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </main>
    )
  }
}
