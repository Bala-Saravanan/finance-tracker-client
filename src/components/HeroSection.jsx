import Image from "next/image";
import HeroImg from "@/assets/HeroImg.jpg";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[600px] bg-subtle py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Master Your
            <span className="bg-hero bg-clip-text text-transparent">
              {" "}
              Financial
            </span>
            <br />
            Future
          </h1>

          <div className="space-y-4">
            <p className="text-xl text-muted-foreground">
              Take control of your finances with intelligent tracking and
              insights
            </p>
            <p className="text-lg text-muted-foreground">
              Transform your spending habits and achieve your financial goals
            </p>
          </div>

          <button className="bg-hero text-primary-foreground px-8 py-2 rounded-lg text-lg cursor-pointer shadow-elegant hover:shadow-glow transition-all duration-300 ease-bounce transform hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Right Side - Hero Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            <Image
              src={HeroImg}
              alt="Financial dashboard showing analytics and tracking features"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-hero opacity-10"></div>
          </div>
          {/* Floating accent elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-light rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-glow rounded-full opacity-30 animate-pulse delay-700"></div>
        </div>
      </div>
    </section>
  );
}
