export default function ItemsBuy(props) {
	return props.contents.map((item, index) => <li key={index}>{item}</li>);
}
