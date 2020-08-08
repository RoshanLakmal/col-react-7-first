class Hello extends React.Component {
	static defaultProps = {
		from: 'Lazy'
	}
	render() {
		return (
			<div>
				<h1>Hello From {this.props.from} To {this.props.to}!</h1>
			</div>
		);
	}
}

