import React, { createContext } from 'react'

export const AuthContext = createContext()

function AuthProvider({ children }) {
    return (
        <div>
            <AuthContext.Provider value={"saikat"}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider