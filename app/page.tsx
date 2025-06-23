import { Navbar } from "@/components/navbar";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Code, Palette, Zap, ArrowRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import myImage from '@/app/assets/IMG_8912.CR2.jpg'; 
import myImage1 from '@/app/assets/IMG_8918.CR2.jpg';
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/productCard";
import { products } from "./data/data";
import AnimatedContent from "@/components/AnimatedContent";

export default function Home() {
  const upcomingGames = [
    {
      id: 1, 
      title: "Under 7years Competition",
      date: "Dec 25, 2024",
      time: "8:00 PM",
      location: "Crypto.com Arena",
      image: myImage,
    },
  ];

  const services = [
    {
      id: 1,
      icon: Code,
      title: "ACTIVITIES",
      description: "We offer various activities such as roller skating, hoverboards, video games, a cozy cafe and memberships.We offer daily roller skating that is charged per hour and the training membership where you have a dedicated coach to teach you how to skate from beginners to experts.",
      popular: false,
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      icon: Palette,
      title: "PRODUCT SOURCING",
      description: "We have a selection of Skating shoes and accessories for you to purchase.We source for your skating needs from roller skates, skate boards, accessories, and hover boards. Give us your preference and we source it for you",
      popular: true,
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
    },
    {
      id: 3,
      icon: Zap,
      title: "RENTAL",
      description: "The Rink Arena is open to rentals for private events.",
      popular: false,
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
  ];

  const membership = [
    {
      img: "",
      title: "Weekly Membership",
      text: "Enjoy Unlimited skating for a week"
    },
    {
      img: "",
      title: "Monthly membership",
      text: "Enjoy a month of unlimited rollerskating and hoverboarding"
    },
    {
      img: "",
      title: "Weekend only",
      text: "Roller skating weekend only membership, for 4 weekends in a month"
    },
    {
      img: "",
      title: "Video games",
      text: "Video games membership grants you unlimited access to the game room for a month"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Image */}
      <AnimatedContent distance={50} direction="vertical" duration={0.8}>
        <Image
          src="https://static.wixstatic.com/media/6f0f10_a3817df2a2124fd4a44bfc242028078a~mv2.png/v1/fill/w_1960,h_500,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/6f0f10_a3817df2a2124fd4a44bfc242028078a~mv2.png"
          alt="The Rink Arena"
          width={1960}
          height={500}
          priority
          className="w-full h-auto lg:mt-8"
        />
      </AnimatedContent>

      {/* Main Content Section */}
      <AnimatedContent distance={100} direction="vertical" duration={0.8} delay={0.2}>
        <div className="px-4 flex flex-col lg:flex-row justify-between items-start gap-8 my-16">
          {/* Booking Card */}
          <div className="max-w-2xl w-full mx-auto text-slate-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 md:p-10">
              <div className="text-center mb-6">
                <h2 className="text-md md:text-3xl font-bold uppercase tracking-wider mb-1">
                  ABUJA'S NO.1 ROLLER
                </h2>
                <h1 className="text-xl md:text-5xl font-extrabold uppercase text-slate-900 mb-6">
                  SKATING RINK
                </h1>
              </div>

              <div className="lg:mb-8 mb-2 text-center">
                <p className="text-sm lg:text-lg">ROLLER SKATING, HOVERBOARDS, DANCE CLASSES, <br /> VIDEO GAMES, KARAOKE.</p>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-md md:text-2xl font-bold mb-2">BOOK ONLINE NOW</h3>
                <p className="text-slate-800 italic text-sm lg:text-lg">JUMP THE QUEUE AND AVOID DELAYS</p>
              </div>

              <div className="text-center">
                <button className="bg-yellow-400 cursor-pointer hover:bg-yellow-300 text-purple-900 font-bold lg:py-3 lg:px-8 p-2 text-xs rounded-full  md:text-xl uppercase tracking-wider transform transition-transform hover:scale-105 shadow-lg">
                  BOOK
                </button>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="w-full max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold text-center mb-6">Upcoming Events</h2>
            <div className="flex shadow-lg border rounded-bl-lg rounded-tl-lg">
              <div className="bg-rose-700 flex items-center justify-center p-3 rounded-bl-lg rounded-tl-lg">
                <p className="text-white lg:text-2xl text-md lg:font-bold font-semibold">Activities <br /> Includes: </p>
              </div>
              <div className="w-full flex items-center px-4">
                <p className="lg:font-medium lg:text-lg text-xs">Roller Skating, Board games, Video games, <br />Karoake, Snack and Networking</p>
              </div>
            </div>
            {upcomingGames.map((game) => (
              <Card key={game.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-2">
                  <div className="lg:flex">
                    <div className="flex-shrink-0 border-2">
                      <Image src={game.image || "/placeholder.svg"} alt={game.title} className="lg:w-64 h-full object-cover" />
                    </div>
                    <div className="flex-1 lg:p-6">
                      <h3 className="lg:text-xl text-md font-semibold mb-4">{game.title}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="lg:text-xl text-xs">{game.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="lg:text-xl text-xs">{game.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="lg:text-xl text-xs">{game.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedContent>

      {/* Discount Promo Section */}
      <AnimatedContent distance={100} direction="vertical" duration={0.8}>
        <div className="lg:h-96  w-full lg:my-8 my-4 grid lg:grid-cols-2 grid-cols-1">
          <div className="bg-red-700 p-4 flex flex-col">
            <p className="lg:mt-8 lg:text-4xl text-xl text-center text-white">DISCOUNT <br /> PROMO! <br /> From </p>
            <div className="relative inline-block mx-auto">
              <span className="relative text-center text-white line-through lg:text-4xl text-xl">260,000</span>
            </div>
            <p className="text-center text-white lg:text-4xl text-xl">to 110,000 only for a LIMITED TIME!</p>
          </div>
          <div className="w-full lg:h-full relative h-48">
            <Image src={myImage1} alt={"Discount promotion"} className="object-cover" fill />
          </div>
        </div>
      </AnimatedContent>

      {/* Services Section */}
      <AnimatedContent distance={100} direction="vertical" duration={0.8}>
        <div className="">
          <section className="lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 lg:text-4xl text-xl">
                Our Services
              </Badge>
            </div>
          </section>
          
          <section className="lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => {
                  const IconComponent = service.icon
                  return (
                    <AnimatedContent key={service.id} distance={50} direction="vertical" duration={0.6} delay={service.id * 0.1}>
                      <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${service.color} ${service.popular ? "ring-2 ring-purple-500" : ""}`}>
                        {service.popular && (
                          <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                            Most Popular
                          </div>
                        )}
                        <CardHeader className="lg:pb-4">
                          <div className={`lg:w-12 lg:h-12 w-6 h-6 rounded-lg bg-white flex items-center justify-center mb-4 ${service.iconColor}`}>
                            <IconComponent className="lg:h-6 lg:w-6 h-3 w-3" />
                          </div>
                          <CardTitle className="lg:text-2xl text-md font-bold text-gray-900">{service.title}</CardTitle>
                          <CardDescription className="text-gray-600 lg:text-base text-sm">{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="pt-4 border-t border-gray-200">
                            <Button className="w-full group" variant={service.popular ? "default" : "outline"}>
                              Get Started
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedContent>
                  )
                })}
              </div>
            </div>
          </section>
        </div>
      </AnimatedContent>

      {/* Karaoke Section */}
      <AnimatedContent distance={100} direction="vertical" duration={0.8}>
        <div className="lg:h-96 w-full my-8 grid lg:grid-cols-2 grid-cols-1 bg-red-700 p-4 space-y-3">
          <div className="lg:p-4 flex flex-col">
            <p className="lg:mt-8 lg:text-4xl text-xl text-center text-white">Karaoke night <br />Every Wednesday and <br />Friday<br />5:00pm - 9:00pm</p>
            <Button
              variant={"secondary"}
              className="cursor-pointer mt-2 lg:mt-8 w-40 m-auto bg-indigo-700 text-white hover:bg-indigo-600"
            >
              Reservations
            </Button>
          </div>
          <div className="w-full h-full relative">
            <Image 
              src="https://static.wixstatic.com/media/6f0f10_ca086d33033944bbbabce7c5ddbe31ff~mv2.png/v1/fill/w_982,h_1320,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/6f0f10_ca086d33033944bbbabce7c5ddbe31ff~mv2.png"
              alt="Karaoke night"
              className="lg:object-contain rounded-md lg:block hidden"
              fill
            />
          </div>
        </div>
      </AnimatedContent>

      {/* Shop Section */}
      <AnimatedContent distance={100} direction="vertical" duration={0.8}>
        <section className="py-8 px-4 sm:px-6 lg:px-16">
          <div className="flex w-full justify-between items-center mb-4">
            <h2 className="lg:text-2xl text-md font-bold">SHOP ROLLERSKATES</h2>
            <div className="lg:px-4 p-2 border text-blue-700 lg:text-sm text-xs font-thin border-blue-300 cursor-pointer hover:bg-slate-100">
              Shop All
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <AnimatedContent key={product.id} distance={50} direction="vertical" duration={0.6} delay={index * 0.1}>
                <ProductCard
                  imageUrl={product.imageUrl}
                  altText={product.altText}
                  title={product.title}
                  price={product.price}
                  badgeText={product.badgeText}
                  taxInfo={product.taxInfo}
                  className={product.className}
                  originalPrice={product.originalPrice}
                />
              </AnimatedContent>
            ))}
          </div>
        </section>
      </AnimatedContent>

      {/* Membership Section */}
      <AnimatedContent distance={100} direction="vertical" duration={0.8}>
        <h1 className='my-16 text-center text-4xl font-bold'>BECOME A MEMBER</h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-6">
          {membership.map((mem, idx) => (
            <AnimatedContent key={idx} distance={50} direction="vertical" duration={0.6} delay={idx * 0.1}>
              <div className="bg-stone-100 flex flex-col lg:flex-row h-full">
                {/* Left side - Image */}
                <div className="lg:w-1/2 w-full h-64 lg:h-auto relative">
                  <Image
                    src={myImage}
                    alt="Roller derby athlete in protective gear skating"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Right side - Content */}
                <div className="lg:w-1/2 w-full flex flex-col justify-center items-center lg:p-8 p-4 lg:px-12 lg:py-8">
                  <div className="max-w-md text-center lg:space-y-8 space-y-3">
                    <h1 className="text-sm lg:text-xl font-bold text-black tracking-wide">{mem.title}</h1>
                    <p className="text-sm lg:text-md text-gray-800 font-light leading-relaxed">
                      {mem.text}
                    </p>
                    <Button
                      className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-6 text-lg font-medium tracking-wider"
                      size="lg"
                    >
                      REGISTER
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </AnimatedContent>

      {/* Footer */}
      <AnimatedContent distance={100} direction="vertical" duration={0.8}>
        <footer className="py-6 mt-auto">
          <div className="container mx-auto px-4 mt-16">
            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=100081409236762&mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/therink_arena?igshid=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/TheRink_arena"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>

            {/* Copyright Text */}
            <div className="text-center text-slate-700 text-sm">
              ©2023 by THE RINK ARENA. All rights reserved.
            </div>
          </div>
        </footer>
      </AnimatedContent>
    </div>
  );
}