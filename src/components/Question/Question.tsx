import styles from './Question.module.css'

import classNames from 'classnames'

import { useQuiz } from '@/components/QuizProvider/QuizProvider'

function Question() {
    const { question, nextQuestion, isRevealed, reveal } = useQuiz()

    function proceed() {
        if (isRevealed) {
            nextQuestion()
        } else {
            reveal()
        }
    }

    return <div className={styles.question} onClick={proceed}>
        <div className={classNames(styles.item, {[styles.itemFlag]: question.from.type == 'flag' })}>
            <h2 className={styles.title}>{question.from.type}</h2>
            <p className={styles.value}>{question.from.value}</p>
        </div>
        <div className={styles.arrow}>🡓🡓🡓</div>
        <div className={classNames(styles.item, {[styles.itemFlag]: question.to.type == 'flag' })}>
            <h2 className={styles.title}>{question.to.type}</h2>
            <p className={styles.value}>{isRevealed ? question.to.value : '???'}</p>
        </div>
    </div>
}

export default Question;
