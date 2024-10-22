import { allowedQuestionTypes, PopulatedQuestion, type QuestionType } from '@/types/Question'
import type { Country } from '@/types/Country'
import countries from '@/data/data-processed.json'

function pick<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

export default function generateQuestion(countriesFilter?: (country: Country) => boolean) {
    const type: QuestionType = pick(allowedQuestionTypes)

    const allCountries = countries as Country[]
    const filteredCountries = countriesFilter ? allCountries.filter(countriesFilter) : countries

    const country = pick(filteredCountries.length == 0 ? countries : filteredCountries)

    const uniqueContinents = new Set(allCountries.map(country => country.continent));

    const question: PopulatedQuestion = {
        from: { type: type.from, value: country[type.from] },
        to: { type: type.to, value: country[type.to] },
    }

    return question
}