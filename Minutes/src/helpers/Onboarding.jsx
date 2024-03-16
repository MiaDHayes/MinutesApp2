import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


function Onboarding({handleOnboardingCompletion}) {
    const [step, setStep] = useState(1)
    const initalState = {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        birthdate: '',
        valid: true
    }

    const [isCompleted, setIsCompleted] = useState(false)
    const [inputErrors, setInputErrors] = useState({})
    const [formState, setFormState] = useState(initalState)
    const [isAccountCreated, setIsAccountCreated] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (isAccountCreated) {
            const timer = setTimeout(() => {
                navigate('/')
            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [isAccountCreated, navigate])

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value, valid: true})
        setInputErrors({ ...inputErrors, [e.target.name]: undefined})
    }

    //Steps
    const handleNextStep = () => {
        setStep(step +1)
    }

    console.log('Current step:', step)
    if (isCompleted) {
        return 
    }

    const validateUserInputs = () => {
		let isFormValid = true
		let errors = {}
		if (!formState.firstName) {
			errors.fullName = 'Full name is required'
			isFormValid = false
		}
        if (!formState.lastName) {
			errors.fullName = 'Full name is required'
			isFormValid = false
		}
		if (!formState.username) {
			errors.username = 'Username is required'
			isFormValid = false
		}
		if (formState.password.length < 7) {
			errors.password = 'Password must be at least 7 characters'
			isFormValid = false
		}
		if (formState.password !== formState.confirmPassword) {
			errors.confirmPassword = 'Passwords do not match'
			isFormValid = false
		}
		if (!formState.phoneNumber) {
			errors.phoneNumber = 'Phone number is required'
			isFormValid = false
		}
		if (!formState.email) {
			errors.email = 'Email is required'
			isFormValid = false
		}
		if (!formState.birthdate) {
			errors.birthdate = 'Birthdate is required'
			isFormValid = false
		}
		setFormState({ ...formState, valid: isFormValid })
		setInputErrors(errors)
		return isFormValid
	}

    const handleSubmit = (e) => {
		e.preventDefault()

		if (validateUserInputs()) {
			setUserInfo({
				fullName: formState.fullName,
				username: formState.username,
				email: formState.email,
				phoneNumber: formState.phoneNumber,
				birthdate: formState.birthdate,
			})
			console.log('Updated User Info:', {
				fullName: formState.fullName,
				username: formState.username,
				email: formState.email,
				phoneNumber: formState.phoneNumber,
				birthdate: formState.birthdate,
			})
			setIsLoggedIn(true)
			setIsAccountCreated(true)
		} else {
			console.log('Account creation unsuccessful')
			setIsAccountCreated(false)
		}
	}




    return (
        <div className="onboardingForm">
            <h1> Create new account </h1>
            {isAccountCreated ? (
                <p className="valid"> Officially welcome to Minutes</p>
            ) : (
                <div>
                    {step === 1 && (
                        <div>
                            <h2> What's Your Name? </h2>
                            <label htmlFor="fullName">Full Name</label>
                            <input 
                                type= "text"
                                id= "fullName"
                                value= {formState.fullName}
                                onChange= {handleChange}
                                placeholder= "Enter your name"
                            />
                            {inputErrors.fullName && (
                                <p className="error">{inputErrors.fullName}</p>
                            )}
                            <button onClick={handleNextStep}> Next </button>
                        </div>
                )}
                    {step === 2 && (
                        <div>
                            <h2> Email? </h2>
                            <label htmlFor="email">Email</label>
                            <input
                                type= "email"
                                id= "email"
                                value= {formState.email}
                                onChange= {handleChange}
                                placeholder= "Enter your email"
                            />
                            {inputErrors.email && (
                                <p className="error">{inputErrors.email}</p>
                            )}
                        <button onClick={handleNextStep}> Next </button>
                    </div>
                )}
                    {step === 3 && (
                        <div>
                        <h2> Super Secret Password </h2>
                        <label htmlFor="password">Password</label>
                        <input
                            type= "password"
                            id= "password"
                            value= {formState.password}
                            onChange={handleChange}
                        />
                        {inputErrors.email && (
                                <p className="error">{inputErrors.password}</p>
                            )}
                        <button onClick={handleNextStep}> Next </button>
                </div>
                )}
                    {step === 4 && (
                        <div>
                            <h2> Confirm Secret Password </h2>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type= "password"
                                id= "confirmPassword"
                                value= {formState.confirmPassword}
                                onChange= {handleChange}
                            />
                            {inputErrors.confirmPassword && (
                                <p className="error">{inputErrors.confirmPassword}</p>
                            )}
                        <button onClick={handleNextStep}> Next </button>
                    </div>
                )}
                    {step === 5 && (
                        <div>
                            <h2> Can I have your number? </h2>
                            <label htmlFor="phoneNumber"> Phone Number </label>
                            <input
                                type= "text"
                                id= "phoneNumber"
                                value= {formState.phoneNumber}
                                onChange= {handleChange}
                            />
                            {inputErrors.phoneNumber && (
                                <p className="error">{inputErrors.phoneNumber}</p>
                            )}
                        <button onClick={handleNextStep}> Next </button>
                    </div>
                )}
                    {step === 6 && (
                        <div>
                            <h2> Let's Party! </h2>
                            <label htmlFor="birthdate">Birthdate</label>
                            <input
                                type= "date"
                                id= "birthdate"
                                value= {formState.birthdate}
                                onChange= {handleChange}
                            />
                            {inputErrors.birthdate && (
                                <p className="error">{inputErrors.birthdate}</p>
                            )}
                        <button onClick={handleNextStep}> Next </button>
                    </div>
                )}
                <p>
                    Already on our time? <Link to= "/login"> Login </Link>
                </p>
            </div>
        )}
        </div>    
    )
}

export default Onboarding