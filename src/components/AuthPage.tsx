import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';

const AuthPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const allowedEmails = [
        "madimetjaterencechuene@gmail.com",
        "hairhubhq@gmail.com"
    ];

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            if (user.email && allowedEmails.includes(user.email)) {
                window.location.href = '/dashboard';
            } else {
                alert("Unauthorized! This Google account cannot access the blog.");
            }
        } catch (error: any) {
            console.error("Google sign-in failed:", error.code, error.message);
            alert("Google sign-in failed. Try again.");
        }
    };

    const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            if (user.email && allowedEmails.includes(user.email)) {
                window.location.href = '/dashboard';
            } else {
                alert("Unauthorized! This email cannot access the blog.");
            }
        } catch (error: any) {
            console.error("Login failed:", error.code, error.message);
            alert(`Login failed: ${error.message}`);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center mx-auto">
                <h2 className="text-gray-900 text-3xl font-bold mb-6">Login</h2>
                <form onSubmit={handleEmailLogin} className="space-y-4">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-500" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-500" />
                    <button type="submit" className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold uppercase transition duration-150 hover:bg-gray-700">Login with Email</button>
                </form>
                <button onClick={handleGoogleSignIn} className="w-full mt-4 bg-gray-900 text-white py-3 rounded-lg font-semibold uppercase transition duration-150 hover:bg-gray-700">Login with Google</button>
            </div>
        </div>
    );
};

export default AuthPage;