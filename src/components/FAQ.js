const FAQ = () => {
  const faqs = [
    {
      question: "Can education flashcards be used for all age groups?",
    },
    {
      question: "How do education flashcards work?",
    },
    {
      question: "Can education flashcards be used for test preparation?",
    },
  ];

  return (
    <div>
      <div className="ml-[104px] w-[97px] h-[35px] font-inter font-bold text-4xl tracking-wider leading-[58.09px]">
        FAQ
      </div>

      <div className="ml-[104px] mt-[83px] w-[848px]">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border border-blue-500 rounded-lg">
            <div className="flex justify-between items-center px-6 py-4">
              <div className="font-inter font-semibold text-xl tracking-wider">
                {faq.question}
              </div>
              <div className="text-gray-600">⌄</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
