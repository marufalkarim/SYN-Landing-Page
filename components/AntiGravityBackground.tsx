"use client";

import { motion } from "framer-motion";

export function AntiGravityBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950">
            {/* Dark gradient overlay to give depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.8)_100%)] z-10 pointer-events-none" />

            {/* Teal Orb */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full bg-teal-500/20 blur-[120px]"
                animate={{
                    x: ["0%", "5%", "-5%", "0%"],
                    y: ["0%", "10%", "-10%", "0%"],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    top: "10%",
                    left: "20%",
                }}
            />

            {/* Purple Orb */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[120px]"
                animate={{
                    x: ["0%", "-10%", "10%", "0%"],
                    y: ["0%", "-5%", "5%", "0%"],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    bottom: "10%",
                    right: "10%",
                }}
            />

            {/* Small accent orb */}
            <motion.div
                className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[90px]"
                animate={{
                    x: ["0%", "15%", "-15%", "0%"],
                    y: ["0%", "15%", "-15%", "0%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    top: "40%",
                    left: "50%",
                    x: "-50%",
                }}
            />
        </div>
    );
}
