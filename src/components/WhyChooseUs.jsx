import { FileText, Shield, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <img className="w-12 h-12" src="/Icon (2).png" alt="" />,
      title: "Wide Range of Properties",
      description:
        "We offer expert legal help for all related property items in Dubai.",
    },
    {
      icon: <img className="w-12 h-12" src="/Icon (1).png" alt="" />,
      title: "Buy or Rent Homes",
      description:
        "We sell your home at the best market price and very quickly as well.",
    },
    {
      icon: <img className="w-12 h-12" src="/Icon.png" alt="" />,
      title: "Trusted by Thousands",
      description:
        "We offer you free consultancy to get a loan for your new home.",
    },
  ];

  return (
    <section className="py-16 lg:py-32">
      <div className="container mx-auto px-4 lg:px-16">
        <h2 className="text-3xl text-center md:text-5xl font-bold mb-2">
          Why You Should Work With Us
        </h2>
        <p className="text-yellow font-bold text-sm text-center mb-20">
          We provide full service at every step.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center relative bg-white rounded-2xl shadow-lg border border-teal-100 p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-5 left-5 flex flex-col gap-1 items-center">
                <img src="./Logo.png" alt="" className="w-7 h-7" />
                <h1 className="text-[9px]">Islamabad Link</h1>
              </div>
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
