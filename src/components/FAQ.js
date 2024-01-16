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
        "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build designs directly in your markup.",
    },
    {
      question: "How do education flashcards work?",
      answer:
        "You can install Tailwind CSS using npm or yarn. Run the command: npm install tailwindcss",
    },
    {
      question: "Can education flashcards be used for test preparation?",
      answer:
        "Yes, you can customize Tailwind CSS styles by modifying the configuration file (tailwind.config.js) and using utilities provided by Tailwind.",
    },
  ];

  return (
    <div>
      <div className="ml-[104px] w-[97px] h-[35px] font-inter font-bold text-4xl tracking-wider leading-[58.09px] ">
        <span className="bg-gradient-to-r from-[#06286E] via-[#164EC0] to-[#06286E] text-transparent bg-clip-text">
          FAQ
        </span>
      </div>

      <div className="ml-[104px] mt-[83px] w-[848px]">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border border-blue-500 rounded-lg">
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center px-6 py-4 cursor-pointer"
            >
              <div className="font-inter font-semibold text-xl tracking-wider">
                {faq.question}
              </div>
              <div className="text-gray-600">
                {activeIndex === index ? "^" : "⌄"}
              </div>
            </div>
            {activeIndex === index && (
              <div className="px-6 py-4">
                <p className="text-gray-800">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
