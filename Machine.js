class Machine extends React.Component{
    render(){
        return(
        <div>
            <div>{this.props.s1} {this.props.s2} {this.props.s3}</div>
        <p>{this.props.s1 === this.props.s2? (this.props.s2 === this.props.s3? "You win!" : "You lose!") : "You lose!"}</p>
        </div>
        )
    }
}