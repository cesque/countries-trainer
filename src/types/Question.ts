import { Country } from './Country'

type QuestionDataPoint = keyof Pick<Country, 'name' | 'capital' | 'flag'>

export type QuestionType = {
    from: QuestionDataPoint
    to: QuestionDataPoint
}

export const allowedQuestionTypes: QuestionType[] = [
    { from: 'name', to: 'capital' },
    { from: 'name', to: 'flag' },
    { from: 'capital', to: 'name' },
    { from: 'flag', to: 'name' },
]

export type QuestionElement = {
    type: QuestionDataPoint
    value: string
}

export type PopulatedQuestion = {
    from: QuestionElement
    to: QuestionElement
}