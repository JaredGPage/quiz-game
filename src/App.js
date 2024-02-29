import { useState, useEffect } from 'react';
import AvatarSelection from './components/avatarSelect/avatar';
import './App.css';
import Quiz from './components/quiz/quiz';
import Result from './components/result/result';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  const [avatar, setAvatar] = useState("");
  const [accessory, setAccessory] = useState("");
  const [score, setScore] = useState(0);

  const handleQuizComplete = (finalScore) => {
    setScore(finalScore);
  };

  const handleAvatarSelection = (selectedAvatar, selectedAccessory) => {
    setAvatar(selectedAvatar);
    setAccessory(selectedAccessory);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AvatarSelection onSelectAvatar={(selectedAvatar, selectedAccessory) => {
          setAvatar(selectedAvatar);
          setAccessory(selectedAccessory);
        }} />} />
        <Route path="/quiz" element={<Quiz onQuizComplete={handleQuizComplete} />} />
        <Route path="/result" element={<Result score={score} />} />
      </Routes>
    </Router>
  );
};

export default App;
