function MyFridgeCheckBox({ element, setChecked, checked, handleChange }) {
	const handleCheck = (e) => {
		handleChange(e.target.value);
	};

	return <input type="checkbox" value={element} onChange={handleCheck} checked={checked} />;
}

export default MyFridgeCheckBox;
