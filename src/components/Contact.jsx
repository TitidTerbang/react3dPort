import {useState, useRef} from "react";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser"

import {styles} from "../style.js";
import {EarthCanvas} from "./canvas/index.js";
import {SectionWrapper} from "../hoc/index.js";
import {slideIn} from "../utils/motion.js";

//template_v7rxvjp
//service_f6h5c9j

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send("service_f6h5c9j", "template_v7rxvjp",
        {
          from_name: form.name,
          to_name: 'Yudhis',
          form_email: form.email,
          to_email: 'yudisbaek@gmail.com',
          message: form.message
        },'9h8lcQhHYDigUWtzT')
        .then(() => {
          setLoading(false)
          alert('Thanks You, I\'ll Reply As Soon As Possible')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        }, (error) => {
          setLoading(false)

          console.log(error)

          alert('Something Went Wrong')
        })
  }
  return (
    <div className={"xl:mt-12 xl:flex-row flex-col-reverse flex gap-0 overflow-hidden"}>
      <motion.div
          variants={slideIn('left', "tween", 0.2, 1)}
          className={"flex-[0.75] bg-black-100 p-8 rounded-2xl"}
      >
        <p className={styles.sectionSubText}>Touch Me</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={"mt-12 flex flex-col gap-8"}
        >
          <label className={"flex flex-col"}>
            <span className={"text-white font-medium mb-4"}>Your Name</span>
            <input
              type={"text"}
              name={"name"}
              value={form.name}
              onChange={handleChange}
              placeholder={"Type Your Name"}
              className={"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"}
            />
          </label>

          <label className={"flex flex-col"}>
            <span className={"text-white font-medium mb-4"}>Your email</span>
            <input
                type={"text"}
                name={"email"}
                value={form.email}
                onChange={handleChange}
                placeholder={"Type Your Email"}
                className={"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"}
            />
          </label>

          <label className={"flex flex-col"}>
            <span className={"text-white font-medium mb-4"}>Your message</span>
            <textarea
                rows={"7"}
                name={"message"}
                value={form.message}
                onChange={handleChange}
                placeholder={"Type Your Reason Why Contacting Me"}
                className={"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"}
            />
          </label>

          <button
            type={"submit"}
            className={"bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
          variants={slideIn('right', "tween", 0.2, 1)}
          className={"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")