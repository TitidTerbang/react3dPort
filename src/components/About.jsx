import React from 'react'
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";

import {styles} from "../style.js";
import {services} from "../constant/index.js";
import {fadeIN, textVariant} from "../utils/motion.js";
import {SectionWrapper} from "../hoc";

const ServiceCard = ({index, title, icon}) => {
    return (
        <Tilt className={"xs:w-[250px] w-full"}>{title}
            <motion.div
                variants={fadeIN("right", "spring", 0.5 * index, 0.75)}
                className={"w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"}
            >
                <div
                    option={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className={"bg-secondary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"}
                >
                    <img src={icon} alt={title}
                         className={"w-16 h-16 object-contain"}/>
                    <h3 className={"text-white text-[20px] font-bold text-center"}>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>About</p>
                <h2 className={styles.sectionHeadText}>Me</h2>
            </motion.div>

            <motion.p
                variants={fadeIN("", "", 0.1, 1)}
                className={"mt-4 text-testtext text-[17px] max-w-3xl leading-[30px]"}
            >
                Currently, I am concentrating on improving my web development skills with React and NextJS, as well as
                expanding my knowledge of data engineer. Both React and NextJS are well-known web development
                frameworks, and data analysis is critical in making decisions and improving business performance. I am
                always eager to learn and explore new technologies in order to improve the quality of my work and my
                technological skills.
            </motion.p>

            <div className={"mt-20 flex flex-wrap gap-10"}>
                {services.map((services, index) => (
                    <ServiceCard key={services.title} index={index} {...services} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about")