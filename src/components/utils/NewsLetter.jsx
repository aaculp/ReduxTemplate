import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button, TabContent } from 'react-bootstrap'
import { addNewsletter, clearNewsletter } from '../../store/actions'
import { showToast } from './Tools'

const NewsLetter = () => {
    const userData = useSelector(state => state.user)
    const dispatch = useDispatch();
    const textInput = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = textInput.current.value;
        dispatch(addNewsletter({ email: value }))
    }

    useEffect(() => {
        if (userData.newsletter) {
            if (userData.newsletter === "added") {
                showToast("SUCCESS", "Thanks for subscribing")
                textInput.current.value = "";
                // dispatch(clearNewsletter())
            }
            if (userData.newsletter === "failed") {
                showToast("ERROR", "Looks like we already have you in our database! :)")
                textInput.current.value = "";
                // dispatch(clearNewsletter())
            }
        }
    }, [userData])

    useEffect(() => {
        return () => {
            dispatch(clearNewsletter())
        }
    }, [dispatch])

    return (
        <>
            <div className="newsletter_container">
                <h1>Join Our Newsletter</h1>
                <div className="form">
                    <Form onSubmit={handleSubmit} className="mt-4">
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Example: youremail@gmail.com"
                                name="email"
                                ref={textInput}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add Me To The List
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default NewsLetter
