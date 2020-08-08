class Machine extends React.Component{
    render(){
        const {s1, s2, s3 } = this.props;
        const winner = (s1 === s2) && (s2 === s3);
        return(
        <div>
            <div>{this.props.s1} {this.props.s2} {this.props.s3}</div>
        <p>{winner? 'Winner!' : 'Loser!'}</p>
        {/* <p>{this.props.s1 === this.props.s2? (this.props.s2 === this.props.s3? "You win!" : "You lose!") : "You lose!"}</p> */}
        </div>
        )
    }
}