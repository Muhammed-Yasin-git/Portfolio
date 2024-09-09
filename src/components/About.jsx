import React from "react";
import aboutImage from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

function About() {
  const cvUrl =
    "https://drive.google.com/file/d/1-AUrazPToMP3Ga3vAGBp8t3O2b68q7v7/view?usp=drivesdk";

  return (
    <div className="pb-4 border-b border-neutral-900">
      <h2 className="my-20 text-2xl text-center lg:text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-lg lg:rounded" src={aboutImage} alt="" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="max-w-xl py-6 my-2 font-light tracking-tighter">
              {ABOUT_TEXT}
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <a
              href={cvUrl} target="_blank"
              className="flex items-center px-6 py-3 mt-4 font-semibold text-white transition duration-300 rounded-lg shadow-lg bg-gradient-to-r from-purple-900 to-pink-900 hover:from-purple-800 hover:to-pink-800"
            >
              Check Resume <FaFilePdf className="ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
