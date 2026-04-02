import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const questions = [
  {
    question: "What's your ideal Friday night?",
    options: [
      { text: "Chilling with a classic movie", trait: "classic" },
      { text: "Hitting the club with friends", trait: "bold" },
      { text: "Trying a new dessert spot", trait: "sweet" },
      { text: "Late night gaming session", trait: "intense" }
    ]
  },
  {
    question: "Pick a color palette:",
    options: [
      { text: "Deep reds and blacks", trait: "classic" },
      { text: "Neon and vibrant", trait: "bold" },
      { text: "Pastels and creams", trait: "sweet" },
      { text: "Dark mode everything", trait: "intense" }
    ]
  },
  {
    question: "How do you handle spicy food?",
    options: [
      { text: "A little kick is nice", trait: "classic" },
      { text: "Bring on the heat!", trait: "bold" },
      { text: "No thanks, I prefer sweet", trait: "sweet" },
      { text: "I put hot sauce on everything", trait: "intense" }
    ]
  }
];

const results = {
  classic: { name: "Dr Pepper Original", desc: "You appreciate the classics. You're unique, reliable, and always a good choice.", color: "bg-drp-burgundy" },
  bold: { name: "Cherry", desc: "You like to stand out. A little extra flair never hurt anybody.", color: "bg-drp-red" },
  sweet: { name: "Cream Soda", desc: "Smooth operator. You're chill, sweet, and easy to get along with.", color: "bg-[#D4A373]" },
  intense: { name: "Zero Sugar", desc: "All the flavor, no compromises. You know exactly what you want.", color: "bg-drp-black border border-drp-cream/20" }
};

export default function Experience() {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({ classic: 0, bold: 0, sweet: 0, intense: 0 });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (trait: string) => {
    const newScores = { ...scores, [trait]: scores[trait] + 1 };
    setScores(newScores);
    
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const topTrait = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    return results[topTrait as keyof typeof results];
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScores({ classic: 0, bold: 0, sweet: 0, intense: 0 });
    setShowResult(false);
  };

  return (
    <section id="experience" className="py-32 bg-drp-black relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl text-drp-cream mb-4">
            DISCOVER YOUR <span className="text-drp-red">FLAVOR</span> PERSONALITY
          </h2>
          <p className="text-drp-cream/70 text-lg">
            Take the quiz to find out which of the 23 flavors matches your vibe.
          </p>
        </motion.div>

        <div className="bg-drp-dark/50 border border-drp-burgundy/30 rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={`q-${currentQ}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="text-drp-red font-bold tracking-widest uppercase text-sm mb-4">
                  Question {currentQ + 1} of {questions.length}
                </div>
                <h3 className="text-2xl md:text-3xl text-drp-cream font-medium mb-8">
                  {questions[currentQ].question}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[currentQ].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt.trait)}
                      className="bg-drp-black hover:bg-drp-burgundy border border-drp-cream/10 hover:border-drp-red text-drp-cream p-6 rounded-xl transition-all duration-300 text-left font-medium"
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full text-center"
              >
                <h3 className="text-drp-cream/70 text-xl mb-2">Your match is...</h3>
                <div className={`inline-block ${getResult().color} px-8 py-4 rounded-2xl mb-6 shadow-2xl`}>
                  <h2 className="font-display text-5xl text-drp-cream">
                    {getResult().name}
                  </h2>
                </div>
                <p className="text-drp-cream/90 text-lg max-w-md mx-auto mb-10">
                  {getResult().desc}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-drp-red text-drp-cream px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-drp-red transition-colors">
                    Share Result
                  </button>
                  <button 
                    onClick={resetQuiz}
                    className="border border-drp-cream/30 text-drp-cream px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-drp-cream/10 transition-colors"
                  >
                    Retake Quiz
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
