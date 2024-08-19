import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const LandingPage = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#F9EBEB] text-[#272E3A] font-['Montserrat',sans-serif] flex flex-col items-center justify-center p-4">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Logo className="w-24 h-24 mx-auto mb-4 text-[#B81D24]" />
        <h1 className="text-5xl font-bold text-[#B81D24] mb-4">RescueRide</h1>
      </motion.div>

      {!showSignup && !showLogin && (
        <motion.div
          className="space-y-6 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="space-x-4">
            <button
              onClick={() => setShowSignup(true)}
              className="bg-[#B81D24] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-300 text-lg font-semibold"
            >
              Sign Up
            </button>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-white text-[#B81D24] border-2 border-[#B81D24] px-8 py-3 rounded-full hover:bg-[#B81D24] hover:text-white transition duration-300 text-lg font-semibold"
            >
              Login
            </button>
          </div>
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-8 text-text">
              Why Choose RescueRide?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="Quick Response"
                description="Our ambulances reach you in minutes"
                icon="🚑"
              />
              <FeatureCard
                title="Expert Care"
                description="Highly trained medical professionals"
                icon="👨‍⚕️"
              />
              <FeatureCard
                title="Hospital Selection"
                description="Choose from nearby hospitals"
                icon="🏥"
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {showSignup && <SignupForm onBack={() => setShowSignup(false)} />}

      {showLogin && <LoginForm onBack={() => setShowLogin(false)} />}
    </div>
  );
};

const FeatureCard = ({ title, description, icon }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const SignupForm = ({ onBack }) => {
  return (
    <motion.form
      className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-center text-[#B81D24]">
        Sign Up
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#B81D24]"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#B81D24]"
        />
        <input
          type="text"
          placeholder="License Number"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#B81D24]"
        />
        <select className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#B81D24]">
          <option value="">Select Ambulance Type</option>
          <option value="basic">Basic</option>
          <option value="advanced">Advanced</option>
          <option value="critical">Critical Care</option>
        </select>
        <input
          type="text"
          placeholder="Plate Number"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#B81D24]"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#B81D24]"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#B81D24] text-white py-2 rounded mt-6 hover:bg-opacity-90 transition duration-300"
      >
        Sign Up
      </button>
      <button
        onClick={onBack}
        className="w-full mt-4 text-[#B81D24] hover:underline"
      >
        Back to Main
      </button>
    </motion.form>
  );
};

const LoginForm = ({ onBack }) => {
  return (
    <motion.form
      className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-center text-[#B81D24]">
        Login
      </h2>
      <div className="space-y-4">
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#B81D24]"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#B81D24]"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#B81D24] text-white py-2 rounded mt-6 hover:bg-opacity-90 transition duration-300"
      >
        Login
      </button>
      <button
        onClick={onBack}
        className="w-full mt-4 text-[#B81D24] hover:underline"
      >
        Back to Main
      </button>
    </motion.form>
  );
};

export default LandingPage;
