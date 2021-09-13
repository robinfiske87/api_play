import { motion } from "framer-motion"

export default function LoadingSpinner(){
    const containerStyle = {
      position: "relative",
      justifyContent: 'center',
      width: '1rem',
      height: '1rem',
    }
    const circleStyle = {
      display: 'block',
      width: '5rem',
      height: '5rem',
      border: '0.5rem solid #e9e9e9',
      borderTop: '0.5rem solid #3498db',
      borderRadius: '50%',
      position: 'absolute',
      boxSizing: 'border-box',
      top: '20vh',
      left: '28vw'
    }

    const spinTransition = {
      loop: Infinity
    }

    return (
      <span style={containerStyle}>
        <motion.span style={circleStyle} animate={{ rotate: 360}} transition={spinTransition} />
      </span>)
  }