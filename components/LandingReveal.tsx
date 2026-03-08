"use client";

import { motion } from "framer-motion";
import { CheckCircle, Brain, Target, Zap, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function LandingReveal() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-6xl mx-auto py-12 px-6"
        >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
                {/* Left Col: Hero Copy */}
                <div className="flex-1 space-y-4 lg:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h1 className="text-[1.6rem] sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                            <span className="whitespace-nowrap">Transform Your Mind,</span> <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-400 inline-block mt-1 sm:mt-0 whitespace-normal">
                                Transform Your Life
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-[1.8] font-light mt-4">
                            The Complete <span className="font-semibold text-white">20-Chapter Blueprint</span> to Break Free from Mental Patterns,
                            Heal Past Wounds, and Design the Life You Actually Want to Live.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="pt-6 order-3 lg:order-none"
                    >
                        <div className="flex flex-col items-center lg:items-start gap-3">
                            <motion.a
                                href="https://sparksyouneed.gumroad.com/l/psychologyofbecomingabetteryou/SYNFAMS"
                                data-gumroad-overlay-checkout="true"
                                className="inline-block relative group w-full sm:w-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full blur-md opacity-80 group-hover:opacity-100 transition duration-500 -inset-y-1"></div>
                                <button className="relative w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-teal-500 to-purple-600 rounded-full text-white font-extrabold text-base sm:text-lg hover:from-teal-400 hover:to-purple-500 shadow-xl transition-all flex justify-center items-center gap-2 sm:gap-3">
                                    Get The Complete Blueprint Now
                                    <Zap className="w-5 h-5 text-yellow-300 group-hover:scale-125 transition-transform duration-300" />
                                </button>
                            </motion.a>
                            <span className="text-xs sm:text-sm text-slate-400 font-medium">✨ Instant Digital Download</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Col: Book Mockup */}
                <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0 w-full px-4 order-2 lg:order-none">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[460px] aspect-[800/1041] drop-shadow-2xl"
                    >
                        <Image
                            src="/my-book.png"
                            alt="The Complete 20-Chapter Blueprint"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </div>
            </div>

            {/* The Problem */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-16 lg:mb-24 border-red-500/20 text-center"
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white drop-shadow">The Pain You're Feeling Is Real</h2>
                <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 leading-relaxed font-medium">
                    Whether it's lying awake at 3 AM with a racing mind, returning to the same stress responses, or feeling like you have one foot on the gas and one on the brakes...
                    <br /><br />
                    <span className="text-teal-400 block mt-2">You are not broken. You are just running outdated software.</span>
                </p>
            </motion.div>

            {/* The Solution Ecosystem GRID */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-24"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">The Solution Ecosystem</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SolutionCard
                        icon={<Brain className="w-8 h-8 text-teal-400" />}
                        title="Foundation (Ch 1-5)"
                        subtitle="Neuroscience & Reprogramming"
                        desc="Understand how your mind is wired and learn the exact frameworks to start reprogramming your subconscious mind."
                    />
                    <SolutionCard
                        icon={<Target className="w-8 h-8 text-purple-400" />}
                        title="Transformation (Ch 6-10)"
                        subtitle="Healing & Breaking Patterns"
                        desc="Identify root traumas, dissolve limiting beliefs, and step out of the reactive loops holding you hostage."
                    />
                    <SolutionCard
                        icon={<Zap className="w-8 h-8 text-yellow-400" />}
                        title="Mastery (Ch 11-15)"
                        subtitle="Flow State & Habits"
                        desc="Build elite psychological momentum, engineer fail-proof habits, and enter flow states on command."
                    />
                    <SolutionCard
                        icon={<ShieldCheck className="w-8 h-8 text-blue-400" />}
                        title="Integration (Ch 16-20)"
                        subtitle="Emotional Intelligence & 90-Day Plan"
                        desc="Finalize your transformation with advanced EQ tools and a concrete 90-day action plan for real-world results."
                    />
                </div>
            </motion.div>

            {/* The Value Stack & Guarantee */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7 }}
                className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch bg-black/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/5"
            >
                <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 text-center lg:text-left">What You Get Today</h3>
                    <ul className="space-y-4">
                        {[
                            "The Complete 20-Chapter Blueprint",
                            "Practical Reprogramming Exercises mapping",
                            "The 90-Day Implementation Plan",
                            "13+ Hour Audiobook/Podcast Bonus",
                            "Lifetime Updates & Revisions"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start sm:items-center gap-3 text-base sm:text-lg text-slate-200">
                                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500 shrink-0 mt-0.5 sm:mt-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1 w-full flex flex-col justify-center bg-gradient-to-br from-purple-900/40 to-slate-900 p-6 sm:p-8 rounded-2xl border border-purple-500/30 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <ShieldCheck className="w-24 h-24 sm:w-32 sm:h-32" />
                    </div>
                    <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-teal-400 mx-auto mb-4" />
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 relative z-10">7-Day Risk-Free Guarantee</h4>
                    <p className="text-sm sm:text-base text-slate-300 relative z-10">
                        Dive entirely into the blueprint. If you don't feel a fundamental shift in your understanding of your own mind within 7 days, get a full, immediate refund. No questions asked.
                    </p>
                </div>
            </motion.div>

        </motion.div>
    );
}

function SolutionCard({ icon, title, subtitle, desc }: { icon: React.ReactNode, title: string, subtitle: string, desc: string }) {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass p-8 rounded-2xl flex flex-col gap-4 border border-white/10 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10 transition-all cursor-default"
        >
            <div className="p-3 bg-white/5 rounded-xl w-fit drop-shadow-md">{icon}</div>
            <div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-sm text-teal-300 uppercase tracking-wider font-semibold mt-1">{subtitle}</p>
            </div>
            <p className="text-slate-400">{desc}</p>
        </motion.div>
    );
}
