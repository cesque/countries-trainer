import styles from './Filters.module.css'

import { type Continents, useQuiz } from '../QuizProvider/QuizProvider'
import classNames from 'classnames'

interface FilterProps {
    continent: keyof Continents
    value: boolean
}

function Filter({ continent, value }: FilterProps) {
    const { toggleContinent } = useQuiz()

    const classes = classNames(styles.filter, {
        [styles.filterDisabled]: value == false,
        [styles.filterEnabled]: value == true,
    })

    return <div className={classes} onClick={() => toggleContinent(continent)}>
        {continent}
    </div>
}

export default function Filters() {
    const { continents } = useQuiz()

    function getFilters() {
        const items = []
        for (const [key, value] of Object.entries(continents)) {
            const typedKey = key as keyof Continents

            items.push(<Filter key={typedKey} continent={typedKey} value={value} />)
        }
        return items
    }

    return <div className={styles.filters}>
        {getFilters()}
    </div>
}