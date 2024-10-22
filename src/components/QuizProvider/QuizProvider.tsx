import React, { createContext, useContext, useState, ReactNode, PropsWithChildren } from 'react'
import generateQuestion from '@/utils/generateQuestion'
import { PopulatedQuestion } from '@/types/Question'
import { Country } from '@/types/Country'

interface QuizContextType {
    question: PopulatedQuestion
    isRevealed: boolean

    continents: Continents
    toggleContinent: (continent: keyof Continents) => void

    nextQuestion: () => void
    reveal: () => void
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export interface Continents {
    "Europe": boolean
    "South America": boolean
    "Asia": boolean
    "Oceania": boolean
    "North America": boolean
    "Africa": boolean
}

const defaultValue: PopulatedQuestion = {
    from: {
        type: "name",
        value: "Click to"
    },
    to: {
        type: "capital",
        value: "Show answer"
    }
}

export function QuizProvider({ children }: PropsWithChildren) {
    const [question, setQuestion] = useState<PopulatedQuestion>(defaultValue);
    const [isRevealed, setIsRevealed] = useState<boolean>(false)
    const [continents, setContinents] = useState<Continents>({
        "Europe": true,
        "South America": true,
        "Asia": true,
        "Oceania": true,
        "North America": true,
        "Africa": true,
    })

    function nextQuestion() {
        const filterFunction = (country: Country) => {
            const continent = country.continent

            return continents[continent as keyof Continents]
        }

        const next = generateQuestion(filterFunction)
        setQuestion(next)
        setIsRevealed(false)
    }

    function toggleContinent(continent: keyof Continents) {
        setContinents({
            ...continents,
            [continent]: !continents[continent],
        })
    }

    const value: QuizContextType = {
        question,
        isRevealed,

        continents,
        toggleContinent,

        nextQuestion,
        reveal: () => setIsRevealed(true),
    }

    return <QuizContext.Provider value={value}>
        {children}
    </QuizContext.Provider>
}

export const useQuiz = (): QuizContextType => {
    const context = useContext(QuizContext)

    if (context === undefined) {
        throw new Error('useQuiz must be used within a QuizProvider')
    }

    return context
}

