import React, { useState, useEffect, useRef } from 'react'

import WordDisplay from './Worddisplay'
import ResultDisplay from './ResultDisplay'
import { Container, Row, Col } from 'react-bootstrap'
import Words from './Words'

const WordLearning = () => {
  const [words, setWords] = useState(Words)

  var randomNumber = Math.floor(Math.random() * words.length)

  const [word, setWord] = useState(words[randomNumber])
  const [wordInput, setWordInput] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [time, setTime] = useState(30)
  const [corretResult, setCorrectResult] = useState([])
  const [inCorretResult, setInCorrectResult] = useState([])
  const [correctCount, setCorrectCount] = useState(0)
  const [animateTimer, setAnimateTimer] = useState(null)

  const inputRef = useRef(null)

  const checkAnswer = () => {
    if (wordInput.trim() === word) {
      setCorrectResult((prevResult) => [...prevResult, wordInput])
      setCorrectCount((prevCount) => prevCount + 1)
      return
    }
    if (wordInput.trim() !== word) {
      setInCorrectResult((prevIncorrectResult) => [
        ...prevIncorrectResult,
        wordInput,
      ])
    }
  }
  var newRandomNumber = Math.floor(Math.random() * words.length)

  const onKeyPressEventHendler = (e) => {
    if (e.charCode === 13 && wordInput.trim() !== '') {
      checkAnswer()
      setWords(Words)
      setWord(words[newRandomNumber])
      setWordInput('')
    }
  }

  const startClicked = () => {
    setDisabled(() => !disabled)

    if (disabled === false) {
      setWordInput('')
      setCorrectResult([])
      setInCorrectResult([])
      setCorrectCount(0)
      setTime(30)
    }
  }

  useEffect(() => {
    if (time <= 30 && time !== 0 && disabled === false) {
      setTimeout(() => setTime((prevTime) => prevTime - 1), 1000)
      inputRef.current.focus()
    } else if (disabled) {
      setTime(30)
      setAnimateTimer(null)
    } else if (time === 0) {
      setDisabled(true)
    }
    if (time <= 10) {
      setAnimateTimer('flashtimer 2s infinite')
    }
  }, [disabled, time])

  /* useEffect(() => {
    setWord(words[newRandomNumber])
  }, ['']) */

  return (
    <Container className="h-100">
      <Row>
        <Col>
          <WordDisplay
            wordInput={wordInput}
            setWordInput={setWordInput}
            word={word}
            disabled={disabled}
            time={time}
            inputRef={inputRef}
            animateTimer={animateTimer}
            startClicked={startClicked}
            onKeyPressEventHendler={onKeyPressEventHendler}
          />
        </Col>
        <Col>
          <ResultDisplay
            correctCount={correctCount}
            correctResult={corretResult}
            inCorretResult={inCorretResult}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default WordLearning
