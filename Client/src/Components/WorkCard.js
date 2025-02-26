import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import "./Asset/Workcard.css";

const WorkCard = (props) => {
    return (
        <motion.div 
            className='project-card'
            initial={{ opacity: 0, y: 50 }} // Start from below
            whileInView={{ opacity: 1, y: 0 }} // Move up smoothly
            transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of card is visible
        >
            <img src={props.imgsrc} alt='img' />
            <h2 className='project-title'>{props.title}</h2>
            <div className='pro-details'>
                <p>{props.text}</p>
                <div className='pro-btns'>
                    <NavLink to={props.view} className="btn">View</NavLink>
                    <NavLink to={props.github} className="btn btn-light">GitHub</NavLink>
                </div>
            </div>
        </motion.div>
    );
};

export default WorkCard;
