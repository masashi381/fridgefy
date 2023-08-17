export default function ItemsBuy(props) {
	console.log("contents: ", props.contents);

	// let items = [];

	// function findDuplicateData(data, arr) {
	// 	return arr.filter((item) => item.id === data.id);
	// }

	// props.contents.forEach((key, index) => {
	// 	let duplicates = findDuplicateData(key, props.contents.slice(0, index));
	// 	if (duplicates.length > 0) {
	// 		items.push(...duplicates);
	// 	}
	// });

	// let objDataWithoutDuplicates = props.contents.filter((item, index) => {
	// 	return items.findIndex((duplicate) => duplicate.id === item.id) === -1;
	// });

	// console.log("objDataWithoutDuplicates", objDataWithoutDuplicates);

	// return objDataWithoutDuplicates.map((uniqueItem, index) => <li key={uniqueItem.id}>{uniqueItem.name}</li>);

	return props.contents.map((item, index) => <li key={index}>{item}</li>);
}
