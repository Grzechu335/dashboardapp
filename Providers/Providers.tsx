'use client'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../store/store'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return <ReduxProvider store={store}>{children}</ReduxProvider>
}

export default Providers
