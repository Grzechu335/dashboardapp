import classNames from 'classnames'
import React from 'react'
import { Oval } from 'react-loader-spinner'

type LoadingSpinnerProps = {
    className?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className }) => {
    return (
        <div
            className={classNames('grid place-content-center w-full h-full', {
                className,
            })}
        >
            <Oval
                color="#84cc16"
                strokeWidth="5"
                width="96"
                visible={true}
            />
        </div>
    )
}

export default LoadingSpinner
