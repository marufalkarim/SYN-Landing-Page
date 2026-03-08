"use client";

import { useState } from "react";
import { AntiGravityBackground } from "@/components/AntiGravityBackground";
import { Questionnaire } from "@/components/Questionnaire";
import { LandingReveal } from "@/components/LandingReveal";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep((prev) => Math.min(prev + 1, 4));
    };

    return (
        <main className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-8">
            <AntiGravityBackground />

            <div className="w-full max-w-7xl mx-auto z-10">
                <AnimatePresence mode="wait">
                    {step < 4 ? (
                        <motion.div
                            key="questionnaire"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            className="w-full flex items-center justify-center min-h-[80vh]"
                        >
                            <Questionnaire step={step} onNext={handleNext} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="reveal"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full"
                        >
                            <LandingReveal />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}
