'use client'

import Question from '@/components/Question/Question'
import styles from './page.module.css'

import { QuizProvider } from '@/components/QuizProvider/QuizProvider'
import Filters from '@/components/Filters/Filters'

export default function Home() {
    return <div className={styles.page}>
        <QuizProvider>
            <Filters />

            <Question />
        </QuizProvider>
    </div>
}