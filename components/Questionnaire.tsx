"use client";

import { motion, AnimatePresence } from "framer-motion";

type Option = { label: string; text: string };
type QuestionData = {
    headline?: string;
    dynamicText?: string;
    question: string;
    options: Option[];
};

const questions: QuestionData[] = [
    {
        headline: "Let's find out what's really holding you back.",
        question: "Do you ever find yourself lying awake at 3 AM with your mind racing, or reacting to stress with the same emotional patterns you swore you'd break?",
        options: [
            { label: "A", text: "Yes, constantly. It's exhausting." },
            { label: "B", text: 'Sometimes, but I try to "just stay positive."' },
        ],
    },
    {
        dynamicText: "Trying to 'just stay positive' rarely works when the root cause is hidden.",
        question: "Did you know that 95% of your daily life is controlled by outdated subconscious programs installed when you were a child?",
        options: [
            { label: "A", text: "I had no idea it was that high. How do I fix it?" },
            { label: "B", text: "I knew it! But I don't have the roadmap to change it." },
        ],
    },
    {
        headline: "The Cost of Doing Nothing.",
        question: "You can keep running these same mental programs and wondering why nothing changes. If you don't rewrite your mental operating system today, where will you be exactly one year from now?",
        options: [
            { label: "A", text: "Stuck in the exact same loop. I'm ready to break the cycle." },
            { label: "B", text: "I can't afford another year like this. Show me the system." },
        ],
    },
];

export function Questionnaire({
    step,
    onNext,
}: {
    step: number;
    onNext: () => void;
}) {
    const currentQ = questions[step - 1];

    if (!currentQ) return null;

    return (
        <div className="relative w-full max-w-3xl mx-auto flex items-center justify-center min-h-[60vh]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -30 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-full glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center relative mx-4 sm:mx-0"
                >
                    {/* Continuous floating animation on the card content */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {currentQ.headline && (
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-400 mb-3 sm:mb-4">
                                {currentQ.headline}
                            </h2>
                        )}
                        {currentQ.dynamicText && (
                            <p className="text-purple-300 italic mb-3 sm:mb-4 text-base sm:text-lg">
                                "{currentQ.dynamicText}"
                            </p>
                        )}

                        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-slate-100 mb-8 sm:mb-10 font-medium">
                            {currentQ.question}
                        </p>

                        <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-xl mx-auto">
                            {currentQ.options.map((opt, i) => (
                                <motion.button
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={onNext}
                                    className="w-full text-left glass hover:bg-white/10 transition-colors p-4 sm:p-6 rounded-2xl flex items-center gap-3 sm:gap-4 group border border-white/20 hover:border-purple-500/50"
                                >
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center rounded-full bg-white/10 text-teal-300 font-bold text-base sm:text-lg group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors">
                                        {opt.label}
                                    </div>
                                    <span className="text-base sm:text-lg text-slate-200 group-hover:text-white transition-colors">
                                        {opt.text}
                                    </span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
