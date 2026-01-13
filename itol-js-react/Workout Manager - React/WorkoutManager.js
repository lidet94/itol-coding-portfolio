import React, { use, useState } from 'react'
import { WorkoutColumn } from './WorkoutColumn'
import './WorkoutManager.css'

export const WorkoutManager = () => {

    const [exercise, setExercise] = useState([])
    const [exerciseName, setExerciseName] = useState('')
    const [exerciseType, setExerciseType] = useState('')
    const [categories, setCategories] = useState([])
    const [intensity, setIntensity] = useState('Low')

    const toggleCategory = (cat) => {
        if (categories.includes(cat)) {
            setCategories(categories.filter(c => c !== cat))
        } else {
            setCategories([...categories, cat])
        }

    }

    const addExercise = (e) => {
        e.preventDefault()

        if (categories.length === 0) {
            alert('Please select at least 1 Category')
            return;
        }

        const newExercise = {
            id: crypto.randomUUID(),
            exerciseName,
            exerciseType,
            categories,
            intensity
        }

        setExercise([...exercise, newExercise])

        resetForm()
    }

    const resetForm = () => {
        setExerciseName('')
        setExerciseType('')
        setCategories([])
        setIntensity('Low')
    }

    const deleteExercise = (id) => {
        setExercise(exercise.filter(ex => ex.id !== id))

    }


    return (
        <div className="workout-manager">
            <form className="workout-form" onSubmit={addExercise}>
                <h1 className='workout-heading'>WorkOut Planner</h1>
                <input
                    required
                    type='text'
                    value={exerciseName}
                    onChange={(e) => setExerciseName(e.target.value)}></input>

                <h3>Exercise</h3>
                <select
                    required
                    value={exerciseType}
                    onChange={(e) => setExerciseType(e.target.value)}>
                    <option value='Cardio'>Cardio</option>
                    <option value='Strength'>Strength</option>
                    <option value='Flexibility'>Flexibility</option>
                </select>

                <h3>Intensity</h3>
                <select
                    required
                    value={intensity}
                    onChange={(e) => setIntensity(e.target.value)}>
                    <option value='Low'>Low</option>
                    <option value='Medium'>Medium</option>
                    <option value='High'>High</option>
                </select>

                <h3>Pick a Category:</h3>
                <div className="category-buttons" >
                    <button
                        type='button'
                        className={categories.includes('Legs') ? 'selected' : ''}
                        onClick={() => toggleCategory('Legs')}>Legs</button>
                    <button
                        type='button'
                        className={categories.includes('Arms') ? 'selected' : ''}
                        onClick={() => toggleCategory('Arms')}>Arms</button>
                    <button
                        type='button'
                        className={categories.includes('Core') ? 'selected' : ''}
                        onClick={() => toggleCategory('Core')}>Core</button>
                    <button
                        type='button'
                        className={categories.includes('Full Body') ? 'selected' : ''}
                        onClick={() => toggleCategory('Full Body')}>Full Body</button>
                </div>

                <button className="add-exercise-btn" type='submit'>Add Exercise</button>
            </form>
            <div className='columns'>
                <WorkoutColumn
                    title='Low Intensity'
                    exercise={exercise.filter(ex => ex.intensity === 'Low')}
                    deleteExercise={deleteExercise}
                />

                <WorkoutColumn
                    title='Medium Intensity'
                    exercise={exercise.filter(ex => ex.intensity === 'Medium')}
                    deleteExercise={deleteExercise}
                />

                <WorkoutColumn
                    title='High Intensity'
                    exercise={exercise.filter(ex => ex.intensity === 'High')}
                    deleteExercise={deleteExercise}
                />
            </div>

        </div>
    )
}

