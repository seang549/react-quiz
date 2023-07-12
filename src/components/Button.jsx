


const Button = ({toggleLogIn}) => {

    const handleClick = () => {
        toggleLogIn()
        // run the toggleLogIn Prop function that hs been passed down from App.jsx
    }

    return (
        <>
            <h1>create a button and add handleClick callback </h1>
            <button onClick={handleClick}>Toggle log state</button>
        </>
        
    )
}

export default Button