import React, { useState, useEffect } from 'react'

function RioHome() {

    const [requestValue, setRequestValue] = useState("");
    const [rioAnswer, setRioAnswer] = useState("");
    const [dotActive, setDotActive] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [keyPressed, setKeyPressed] = useState(false);
    const [question, setQuestion] = useState("");
    const mainRequest = "Anna please answer the following question";
    let str = "";
    let ans = "";
    const Keywords = ["Alt", "Control", "CapsLock", "Tab", "Shift", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Enter"];
    const RandomAnswers = ["Have Faith! Ask the right question"];

    const inputRequest = (e) => {
        let requestInputLength = requestValue.length;
        setKeyPressed(true);

        if (e.keyCode == 8 || e.keyCode == 46) {

            console.log("check", requestValue)
            if (requestInputLength == 0) {
                setDotActive(false)
                setRioAnswer("");

            }
            setRequestValue(requestValue.slice(0, requestInputLength - 1))

        }
        else if (Keywords.includes(e.key)) {
            console.log("do nothing")
        }
        else if (e.key === ".") {
            setDotActive(!dotActive)
        }
        else {
            if (!dotActive) {
                str = requestValue + e.key
                console.log("eee=>", str, e.key)
                setRequestValue(str);
            }
            else {
                let y = requestValue + mainRequest[requestValue.length]
                setRequestValue(y)
                ans = rioAnswer + e.key
                setRioAnswer(ans);

                console.log("show rio", ans)
            }
        }

    }

    useEffect(() => {
        console.log("testme", dotActive)

        if (dotActive) {

            let x = requestValue + mainRequest[requestValue.length]
            setRequestValue(x)

        }
        else {
            if (keyPressed) {
                let x = requestValue + mainRequest[requestValue.length]
                setRequestValue(x)
            }
        }
    }, [dotActive])

    const askRio = () => {
        if (rioAnswer.length > 0) {
            setShowAnswer(true);
        }
        else {
            setRioAnswer(RandomAnswers[0]);
            setShowAnswer(true);

        }
    }

    const askNewQuestion = () => {

        setRequestValue("");
        setRioAnswer("");
        setQuestion("");
        setDotActive(false);
        setShowAnswer(false);
    }


    return (
        <>
            <div className="first-section">
                <div className="first-section-cover">
                    <div className="first-section-1">
                        {/* Navbar */}
                    </div>
                    <div className="first-section-2">
                        Ask Anna
                    </div>

                    <div className="first-section-3">
                        Welcome to Ask Anna...
                        Do you need to ask a question? Are you looking for answers? Anna offers you a space to ask anything you want. However, before each question you must request. If the answer is not what you expected, at least you make catharsis and ask again.
                    </div>
                </div>

            </div>

            <div className="second-section">
                <div className="input-div">
                    <input className="input" type="text" placeholder="Request Anna" onKeyDown={(e) => inputRequest(e)} value={requestValue}>
                    </input>

                </div>
                <div className="input-div">
                    <input className="input" type="text" placeholder="Ask your question" onChange={(e) => setQuestion(e.target.value)} value={question}></input>
                </div>
                <div className="btn-section">
                    
                    <button className="ask-btn" onClick={() => askRio()}>Ask Anna</button>

                <button className="quest-btn" onClick={() => askNewQuestion()}>New Question</button>
                
                
                </div>
                {/* <div><button className="quest-btn" onClick={() => askNewQuestion()}>New Question</button></div> */}

            </div>

            <div className="third-section">
                {showAnswer ? <><p className="answer-class">{rioAnswer}</p></> : <></>}
            </div>
        </>
    )
}

export default RioHome
