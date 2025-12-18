import React, { useState } from "react"

const JobCounter = () => {
    const [jobCount, setJobCount] = useState(0)

    const handleAddJob = () => {
        setJobCount(jobCount + 1)
        console.log(jobCount + 1)
    }

    const handleRemoveJob = () => {
        if (jobCount > 0) {
            setJobCount(jobCount - 1)
            console.log(jobCount - 1)
        }

    }
    const handleResetJob = () => {
        setJobCount(0)
        console.log(0)
    }

    return (
        <div>
            <h1>Job Counter</h1>
            <p>Current job count: {jobCount}</p>
            <button onClick={handleAddJob}>Add Job</button>
            <button onClick={handleRemoveJob}>Remove Job</button>
            <button onClick={handleResetJob}>Reset Job</button>
        </div>
    )

}

export default JobCounter
