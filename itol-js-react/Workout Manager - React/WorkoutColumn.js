import React from 'react'

export const WorkoutColumn = ({ title, exercise, deleteExercise }) => {
    return (
        <section className="column">
            <h2>{title}</h2>


            {exercise.map(ex => (
                <div className="exercise-card" key={ex.id}>
                    <p>Exercise: {ex.exerciseName}</p>
                    <p>Exercise Type: {ex.exerciseType}</p>
                    <p>Category: {ex.categories.join(', ')}</p>

                    <button onClick={() => deleteExercise(ex.id)}>Delete</button>
                </div>)
            )}

        </section>
    )
}

