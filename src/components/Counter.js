
const Counter = ({counter, inc, dec, rnd}) => {
	return (
		<div className="jumbotron">
			<h1>{counter}</h1>
			<button onClick={dec} className="btn btn-primary">dec</button>
			<button onClick={inc} className="btn btn-primary">inc</button>
			<button onClick={rnd} className="btn btn-primary">rnd</button>
		</div>		
	)
}

export default Counter