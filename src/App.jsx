import { useState } from 'react';
import './App.css';

export default function App() {
  const [textValue, setTextValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [singleFile, setSingleFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [selectValue, setSelectValue] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const [telValue, setTelValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [formStatus, setFormStatus] = useState('');

  const handleCheckboxChange = (value) => {
    setCheckboxValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      textValue,
      dateValue,
      singleFile,
      multipleFiles,
      selectValue,
      radioValue,
      telValue,
      emailValue,
      textareaValue,
      numberValue,
      checkboxValues,
    };
    console.log('Form Data:', formData);

    try {
      const response = await fetch("https://glf-form-submission-api.onrender.com/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (response.ok) {
        setFormStatus('✅ Submitted successfully!');
      } else {
        setFormStatus('❌ Submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('❌ Submission failed due to network error.');
    }
  };

  return (
    <main>
      <h1>All Field Types Form</h1>
      <form onSubmit={handleSubmit}>

        {/* Text Input */}
        <div className="field-group">
          <label>Text Field:</label>
          <input type="text" value={textValue} onChange={(e) => setTextValue(e.target.value)} />
        </div>

        {/* Date Input */}
        <div className="field-group">
          <label>Date Field:</label>
          <input type="date" value={dateValue} onChange={(e) => setDateValue(e.target.value)} />
        </div>

        {/* Single File Upload */}
        <div className="field-group">
          <label>Single File Upload:</label>
          <input type="file" onChange={(e) => setSingleFile(e.target.files[0])} />
        </div>

        {/* Multiple Files Upload */}
        <div className="field-group">
          <label>Multiple Files Upload:</label>
          <input type="file" multiple onChange={(e) => setMultipleFiles(Array.from(e.target.files))} />
        </div>

        {/* Select Dropdown */}
        <div className="field-group">
          <label>Select Dropdown:</label>
          <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
            <option value="">Select</option>
            <option value="Option1">Option 1</option>
            <option value="Option2">Option 2</option>
          </select>
        </div>

        {/* Radio Buttons */}
        <div className="field-group">
          <label>Radio Options:</label>
          <div className="radio-group-vertical">
            <div>
              <input type="radio" id="radio1" name="radioGroup" value="Radio1" checked={radioValue === 'Radio1'} onChange={(e) => setRadioValue(e.target.value)} />
              <label htmlFor="radio1">Radio 1</label>
            </div>
            <div>
              <input type="radio" id="radio2" name="radioGroup" value="Radio2" checked={radioValue === 'Radio2'} onChange={(e) => setRadioValue(e.target.value)} />
              <label htmlFor="radio2">Radio 2</label>
            </div>
          </div>
        </div>

        {/* Telephone Input */}
        <div className="field-group">
          <label>Telephone:</label>
          <input type="tel" value={telValue} onChange={(e) => setTelValue(e.target.value)} />
        </div>

        {/* Email Input */}
        <div className="field-group">
          <label>Email:</label>
          <input type="email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
        </div>

        {/* Textarea */}
        <div className="field-group">
          <label>Textarea:</label>
          <textarea value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)} />
        </div>

        {/* Number Input */}
        <div className="field-group">
          <label>Number:</label>
          <input type="number" value={numberValue} onChange={(e) => setNumberValue(e.target.value)} />
        </div>

        {/* Checkbox Group */}
        <div className="field-group">
          <label>Checkbox Options:</label>
          <div className="checkbox-group-vertical">
            <div>
              <input type="checkbox" id="checkbox1" checked={checkboxValues.includes('Option1')} onChange={() => handleCheckboxChange('Option1')} />
              <label htmlFor="checkbox1">Option 1</label>
            </div>
            <div>
              <input type="checkbox" id="checkbox2" checked={checkboxValues.includes('Option2')} onChange={() => handleCheckboxChange('Option2')} />
              <label htmlFor="checkbox2">Option 2</label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="button-container">
          <button type="submit">Submit</button>
          <p>{formStatus}</p>
        </div>

      </form>
    </main>
  );
}
