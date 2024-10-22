import styles from './Question.module.css'

import { useQuiz } from '@/components/QuizProvider/QuizProvider'
import { PropsWithChildren } from 'react'

function Question() {
    const { question, nextQuestion, isRevealed, reveal } = useQuiz();

    function proceed() {
        if (isRevealed) {
            nextQuestion()
        } else {
            reveal()
        }
    }

    return <div className={styles.question} onClick={proceed}>
        <div className={styles.item}>
            <h2 className={styles.title}>{question.from.type}</h2>
            <p className={styles.value}>{question.from.value}</p>
        </div>
        <div className={styles.arrow}>🡓🡓🡓</div>
        <div className={styles.item}>
            <h2 className={styles.title}>{question.to.type}</h2>
            <p className={styles.value}>{isRevealed ? question.to.value : '???'}</p>
        </div>
    </div>
}

export default Question;
