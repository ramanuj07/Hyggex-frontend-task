import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can education flashcards be used for all age groups?",
      answer:
        "Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.",
    },
    {
      question: "How do education flashcards work?",
      answer:
        "Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repitition.",
    },
    {
      question: "Can education flashcards be used for test preparation?",
      answer:
        "Absolutely, Flashcards are an excellent tool for test preparation allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.",
    },
  ];

  return (
    <div>
      <div className="ml-[104px] w-[97px] h-[35px] font-inter font-bold text-4xl tracking-wider leading-[58.09px]">
        <span className="bg-gradient-to-r from-[#06286E] via-[#164EC0] to-[#06286E] text-transparent bg-clip-text">
          FAQ
        </span>
      </div>

      <div className="ml-[104px] mt-[83px] w-[848px]">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-8 border border-blue-500 rounded-lg">
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center px-6 py-4 cursor-pointer transition-all duration-500"
            >
              <div className="font-inter font-semibold tracking-wider text-[rgba(40, 38, 44, 1)]">
                {faq.question}
              </div>
              <div className="text-gray-600">
                {activeIndex === index ? "^" : "⌄"}
              </div>
            </div>
            {activeIndex === index && (
              <div className="px-6 py-2 transition-all duration-500">
                <p className="text-[rgba(40, 38, 44, 1)]">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
