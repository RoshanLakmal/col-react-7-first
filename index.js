// class Hello extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 			</div>
// 		);
// 	}
// }

function getNum(){
	return Math.floor(Math.random() *10)+1;
}

class NumPicker extends React.Component{
	
	render(){
		const num = getNum();
		return(
			<div>
				<h1>Your number is {num}</h1>
				<p>{num===7? "Congratulations" : "Try again"}</p>
			</div>
		);
	}
}
ReactDOM.render(<NumPicker />, document.getElementById('root'));
