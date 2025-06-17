import { Navbar } from "@/components/navbar";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Check, Code, Palette, Zap, ArrowRight, Star } from "lucide-react";
import myImage from '@/app/assets/IMG_8912.CR2.jpg'; 
import myImage1 from '@/app/assets/IMG_8918.CR2.jpg';
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
    description: "We offer various activities such as roller skating, hoverboards, video games, a cozy cafe and memberships.We offer daily roller skating that is charged per hour and the training membership where you have a dedicated coach to teach you how to skate from beginners to experts. ",
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
    description: "The Rink Arena is open to rentals for private events. ",
    popular: false,
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
  },
]


  return (
    <div className=" min-h-screen bg-gray-50">
     <Navbar />
      <Image
        src="https://static.wixstatic.com/media/6f0f10_a3817df2a2124fd4a44bfc242028078a~mv2.png/v1/fill/w_1960,h_500,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/6f0f10_a3817df2a2124fd4a44bfc242028078a~mv2.png"
        alt="Description of your image"
        width={1960}
        height={500}
        priority // Optional - if this is above the fold
        className="w-full h-auto lg:mt-8" // Optional - for responsive styling
      />
       <div className="max-w-2xl mx-auto text-slate-900 rounded-2xl overflow-hidden shadow-2xl my-16">
      <div className="p-8 md:p-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider mb-1">
            ABUJA'S NO.1 ROLLER
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-slate-900 mb-6">
            SKATING RINK
          </h1>
        </div>

        <div className="mb-8 text-center">
         <p>ROLLER SKATING, HOVERBOARDS, DANCE CLASSES, <br/> VIDEO GAMES, KARAOKE.</p>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-bold mb-2">BOOK ONLINE NOW</h3>
          <p className="text-slate-800 italic">JUMP THE QUEUE AND AVOID DELAYS</p>
        </div>

        <div className="text-center">
          <button className="bg-yellow-400 cursor-pointer hover:bg-yellow-300 text-purple-900 font-bold py-3 px-8 rounded-full text-lg md:text-xl uppercase tracking-wider transform transition-transform hover:scale-105 shadow-lg">
            BOOK
          </button>
        </div>
      </div>
    </div>
     <div className="w-full max-w-2xl mx-auto space-y-4 p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Upcoming Events</h2>
      <div className="flex shadow-lg border rounded-bl-lg rounded-tl-lg">
       <div className="bg-rose-800 flex items-center justify-center p-3 rounded-bl-lg rounded-tl-lg">
          <p className="text-white text-2xl font-bold">Activities <br/> Includes: </p>
       </div>
       <div className="w-full flex items-center px-4">
        <p className="font-medium text-lg">Roller Skating, Board games, Video games, <br/>Karoake, Snack and Networking</p>
       </div>
      </div>
      {upcomingGames.map((game) => (
        <Card key={game.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardContent className="p-2">
            <div className="flex">
              <div className="flex-shrink-0 border-2">
                <Image src={game.image || "/placeholder.svg"} alt={game.title} className="w-64 h-full object-cover" />
              </div>
              <div className="flex-1 p-6">
                <h3 className="text-xl font-semibold mb-4">{game.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{game.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{game.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{game.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
    <div className="h-96 w-full my-8 grid lg:grid-cols-2 grid-cols-1">
      <div className="bg-red-700  p-4 flex flex-col">
        <p className="lg:mt-8 text-4xl text-center">DISCOUNT <br/> PROMO! <br/> From </p>
          <div className="relative inline-block mx-auto">
            <span className="relative text-3xl z-10 text-center">260,000</span>
            <div className="absolute left-0 right-0 top-1/2 h-[3px] bg-current  -translate-y-1/2 "></div>
          </div>
        <p className="text-4xl text-center">to 110,000 only for a LIMITED TIME!</p>
      </div>
      <div className="w-full h-full relative">
      <Image src={myImage1} alt={"pic"} className=" object-cover" fill />
      </div>
    </div>
    <div>
     <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 text-4xl">
            Our Services
          </Badge>
        </div>
      </section>
 {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={service.id}
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${service.color} ${service.popular ? "ring-2 ring-purple-500" : ""}`}
                >
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4 ${service.iconColor}`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
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
              )
            })}
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}