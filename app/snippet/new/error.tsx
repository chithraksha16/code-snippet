"use client"

type Errorprops = {
    error: Error
}

const error = ({ error }: Errorprops) => {
    return (
        <div>
            {error.message}
        </div>
    )
}

export default error
