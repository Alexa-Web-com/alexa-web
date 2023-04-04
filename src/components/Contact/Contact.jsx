import './Contact.css'
import { DICT } from '../../utils/dict'
import { useState, useEffect, useContext } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'
import { isValidEmail } from '../../utils/isValidEmail'

const Contact = () => {
    const [lang,] = useContext(ContextLanguage)

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userMessage, setUserMessage] = useState('')

    const [isUserNameValid, setIsUserNameValid] = useState(true)
    const [isUserEmailValid, setIsUserEmailValid] = useState(true)
    const [isUserMessageValid, setIsUserMessageValid] = useState(true)

    const [sentMessage, setSentMessage] = useState(false)

    useEffect(() => { setIsUserNameValid(true) }, [userName])
    useEffect(() => { setIsUserEmailValid(true) }, [userEmail])
    useEffect(() => { setIsUserMessageValid(true) }, [userMessage])

    const isFormValid = () => {
        let dataValid = true
        if (userName.length < 2) {
            dataValid = false
            setIsUserNameValid(false)
        }
        if (!isValidEmail(userEmail)) {
            dataValid = false
            setIsUserEmailValid(false)
        }
        if (userMessage.length < 5) {
            dataValid = false
            setIsUserMessageValid(false)
        }
        return dataValid
    }

    const sendBtnClicked = (e) => {
        e.preventDefault()

        if (!isFormValid()) { return }

        setSentMessage(true)

        setTimeout(() => {
            setSentMessage(false)
        }, 1000)

        setUserName('')
        setUserEmail('')
        setUserMessage('')
        setIsUserNameValid(true)
        setIsUserEmailValid(true)
        setIsUserMessageValid(true)
    }

    return (
        <div className='contact component' id='contact'>
            <div className='contact__title_cntr'>
                <div className='horizontal_line horizontal_line_before contact__line'></div>
                <p className='contact__title title'>{DICT[lang].navbarContact}</p>
                <div className='horizontal_line horizontal_line_after contact__line'></div>
            </div>

            {sentMessage
                ?
                <div className='contact__cntr'>

                    <div className='contact__wrapper'>
                        <h1 className='contact__form_title'>{DICT[lang].contactSentMessageFromPage}</h1>

                    </div>
                </div>
                :
                <div className='contact__cntr'>

                    <div className='contact__wrapper'>
                        <div className='contact_form_cntr'>
                            <h1 className='contact__form_title'>
                                {DICT[lang].contactFormTitle}
                            </h1>
                            <form className='contact__form_el_cntr'
                                onSubmit={sendBtnClicked}>

                                <input className={(isUserNameValid) ? 'contact__form_el' : 'contact__form_el_error'}
                                    type="text"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    placeholder={DICT[lang].contactFormUserNameInputPlaceholder} />
                                {!isUserNameValid &&
                                    <p className='contact__form_el_errMessage'>{DICT[lang].contactNameInvalid}</p>}

                                <input className={(isUserEmailValid) ? 'contact__form_el' : 'contact__form_el_error'}
                                    id="email"
                                    type="email"
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    placeholder={DICT[lang].contactFormUserEmailInputPlaceholder} />
                                {!isUserEmailValid &&
                                    <p className='contact__form_el_errMessage'>{DICT[lang].contactEmailInvalid}</p>}

                                <textarea className={(isUserMessageValid) ? 'contact__form_el' : 'contact__form_el_error'}
                                    type="text"
                                    value={userMessage}
                                    onChange={(e) => setUserMessage(e.target.value)}
                                    placeholder={DICT[lang].contactFormUserMessageInputPlaceholder} />
                                {!isUserMessageValid &&
                                    <p className='contact__form_el_errMessage'>{DICT[lang].contactMessageInvalid}</p>}

                                <button
                                    className={userName && userEmail && userMessage ? 'contact__form_send_btn' : 'contact__form_send_btn_error'}
                                    type='submit'
                                    disabled={!userName || !userEmail || !userMessage}
                                >
                                    {DICT[lang].contactFormSendBtn}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Contact