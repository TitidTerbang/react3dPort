import {motion} from "framer-motion";

import {styles} from "../style.js";
import {ComputersCanvas} from "./canvas"
import Computers from "./canvas/Computers.jsx";

const Hero = () => {
    return (
        <section className={"relative w-full h-screen mx-auto"}>
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className={"flex flex-col justify-center items-center mt-5"}>
                    <div className={"w-5 h-5 rounded-full bg-warnalima"}/>
                    <div className={"w-1 sm:h-80 h-60 orange-gradient"}/>
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>Hello, I'm <span
                        className={"text-warnalima"}>Yudhis</span></h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        Tech enthusiast <br/> Passionate about web development <br/> Learning <span
                        className={"text-warnalima font-semibold"}>React/NextJS</span> <br/>And data
                        analysis
                    </p>
                </div>
            </div>

            <ComputersCanvas/>
        </section>
    )
}

export default Hero