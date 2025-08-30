import Image from "next/image";
import FeatureImg from "@/assets/featureImg.webp";
import advanceAnalytics from "@/assets/advanceAnalytics.webp";

export default function FeatureSection() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Feature 1 - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <Image
                src={FeatureImg}
                alt="Expense tracking interface showing budget categories and spending analysis"
                className="w-full h-auto object-cover"
                width={600}
                height={400}
                priority
              />
              <div className="absolute inset-0 bg-gradient-card opacity-5"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-40"></div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Smart Expense Tracking
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Automatically categorize your expenses and gain insights into your
              spending patterns. Our intelligent system learns from your habits
              to provide personalized recommendations for better financial
              management.
            </p>
            <button className="px-4 py-2 rounded-lg border-1 cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-smooth">
              Learn More
            </button>
          </div>
        </div>

        {/* Feature 2 - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Advanced Analytics
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Visualize your financial data with beautiful charts and
              comprehensive reports. Track your progress toward goals, monitor
              investment performance, and make data-driven decisions for your
              financial future.
            </p>
            <button className="px-4 py-2 rounded-lg border-1 cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-smooth">
              Learn More
            </button>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <Image
                src={advanceAnalytics}
                alt="Investment analytics dashboard with growth charts and performance metrics"
                className="w-full h-auto object-cover"
                width={600}
                height={400}
                priority
              />
              <div className="absolute inset-0 bg-gradient-card opacity-5"></div>
            </div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-light rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
