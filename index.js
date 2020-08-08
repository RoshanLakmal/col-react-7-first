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

// function getNum(){
// 	return Math.floor(Math.random() *10)+1;
// }

// class NumPicker extends React.Component{
	
// 	render(){
// 		const num = getNum();
// 		return(
// 			<div>
// 				<h1>Your number is {num}</h1>
// 				<p>{num===7? "Congratulations" : "Try again"}</p>
// 			</div>
// 		);
// 	}
// }

// class App extends React.Component{
	
// 	render(){
// 		return(
// 			<div>
// 				<Hello/>
// 				<Hello/>
// 				<Hello/>
// 			</div>
// 		);
// 	}
// }


// class App extends React.Component{
	
// 	render(){
// 		return(
// 			<div>
// 				<Hello 
// 					to="Ringo" 
// 					from="Roshan"
// 				/>
// 			</div>
// 		);
// 	}
// }

class App extends React.Component{
	
	render(){
		return(
			<div>
				<h1>Slot Machine!</h1>
				<Machine 
					s1="x"
					s2="y"
					s3="z"
				/>
				<Machine 
					s1="x"
					s2="x"
					s3="x"
				/>
				<Machine 
					s1="x"
					s2="y"
					s3="x"
				/>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));
