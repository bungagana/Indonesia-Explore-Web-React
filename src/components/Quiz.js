import React, { useState } from 'react';
import './css/Quiz.css';

const quizQuestions = [
    {
        question: 'Kapan Indonesia merdeka?',
        options: ['17 Agustus 1945', '20 Mei 1908', '28 Oktober 1928', '1 Juni 1945'],
        correctAnswer: '17 Agustus 1945'
    },
    {
        question: 'Siapa presiden pertama Indonesia?',
        options: ['Soekarno', 'Soeharto', 'B.J. Habibie', 'Gus Dur'],
        correctAnswer: 'Soekarno'
    },
    {
        question: 'Apa makna dari Sumpah Pemuda?',
        options: [
            'Perjuangan melawan penjajah',
            'Persatuan pemuda Indonesia',
            'Kebangkitan nasional',
            'Pembentukan BPUPKI'
        ],
        correctAnswer: 'Persatuan pemuda Indonesia'
    },
    {
        question: 'Apa nama alat musik tradisional dari Jawa Barat?',
        options: ['Angklung', 'Gamelan', 'Sasando', 'Kolintang'],
        correctAnswer: 'Angklung'
    },
    {
        question: 'Apa arti dari warna merah pada bendera Indonesia?',
        options: ['Berani', 'Suci', 'Damai', 'Merdeka'],
        correctAnswer: 'Berani'
    }
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (selectedAnswer) => {
        if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="quiz-container">
            {showScore ? (
                <div className="score-section">
                    <h2>Skor Kamu: {score} dari {quizQuestions.length}</h2>
                    {score >= 4 ? (
                        <div className="result-illustration">
                            <img
                                src="https://i.pinimg.com/originals/33/ef/b9/33efb9d6f4bae437f584876e35469403.png"
                                alt="KAMU SANGAT INDONESIA SEKALI"
                            />
                            <h3>MANTAP ANAK MUDA</h3>
                        </div>
                    ) : (
                        <h3>Terus belajar tentang Indonesia ya!</h3>
                    )}
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Pertanyaan {currentQuestion + 1}</span>/{quizQuestions.length}
                        </div>
                        <div className="question-text">
                            {quizQuestions[currentQuestion].question}
                        </div>
                    </div>
                    <div className="answer-section">
                        {quizQuestions[currentQuestion].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Quiz;
