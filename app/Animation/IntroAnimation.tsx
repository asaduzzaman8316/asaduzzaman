'use client'
import { AnimatePresence, motion } from 'motion/react'
import React, { useEffect, useMemo, useState } from 'react'
function IntroAnimation({ finish }: { finish: VoidFunction }) {
    const greeting = useMemo(() => [
        "হ্যালো !" ,     // Bangla/Bengali - Hyālō
        "你好",        // Chinese (Mandarin)
        "Hola",       // Spanish
        "नमस्ते",      // Hindi
        "مرحبا",      // Arabic
        "Bonjour",    // French
        "Olá",        // Portuguese
        "Привет",     // Russian
        "こんにちは",    // Japanese
        "안녕하세요",    // Korean
        "Hello!",      // English
    ], [])
    const [index, setIndex] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        if (index < greeting.length - 1) {
            const id = setInterval(() => setIndex((i) => i + 1), 200);
            return () => clearInterval(id)
        } else {
            const i = setInterval(() => setVisible(false), 300);
            return () => clearInterval(i)
        }
    }, [index, greeting.length])
    return (
        <AnimatePresence onExitComplete={finish}>
            {visible && (
                <motion.div
                    className='fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-black '
                    initial={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{
                        duration: 1.05,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <motion.h1
                        key={index}
                        className='text-5xl md:text-7xl lg:text-8xl font-bold text-white italic'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.12 }}
                    >
                        {greeting[index]}
                    </motion.h1>
                </motion.div>
            )}

        </AnimatePresence>
    )
}

export default IntroAnimation
