"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus, CircleHelp, GripVertical} from "lucide-react";

const initialImages = [
  "/images/gallery-1.jpg",
];

export function ProfileWidget() {
  const [images, setImages] = useState(initialImages);
  
  const [activeTab, setActiveTab] = useState("about");
  const tabsRef = useRef<HTMLDivElement>(null);
  const [gliderStyle, setGliderStyle] = useState({
    width: "0px",
    transform: "translateX(0px)",
  });

  useEffect(() => {
    if (tabsRef.current) {
      // Find the currently active tab trigger
      const activeTabNode = tabsRef.current.querySelector<HTMLElement>(
        `[data-state="active"]`
      );
      
      if (activeTabNode) {
        // Get its width and position relative to the TabsList
        const { offsetWidth, offsetLeft } = activeTabNode;
        
        // Update the glider's style to match
        setGliderStyle({
          width: `${offsetWidth}px`,
          transform: `translateX(${offsetLeft}px)`,
        });
      }
    }
  }, [activeTab]); // Re-run this effect whenever activeTab changes

  const addImage = () => {
    setImages([...images, "/images/gallery-1.jpg"]);
  };

  return (
    <div className="grid grid-rows-2 mt-10 mb-10 gap-10">
      <Card className="py-4 bg-[#363C43] border-none h-[40vh] text-gray-300 rounded-2xl shadow-lg">
        <CardHeader className="relative ml-6 mr-6">
          <CircleHelp className="absolute -left-2 top-0 w-5 h-5 text-gray-300/40 z-10" />
          <GripVertical className="absolute -left-3 top-30 h-10" />
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab} 
            className="w-full"
          >
            <TabsList 
              ref={tabsRef}
              className="relative grid w-full h-15 grid-cols-3 bg-[#171717] rounded-3xl p-1.5 gap-1.5"
            >
              <span
                className="absolute h-[calc(100%-0.75rem)] top-1.5 z-0 rounded-2xl bg-[#28292F] shadow-2xl shadow-black transition-all duration-900 ease-in-out"
                style={gliderStyle}
                aria-hidden="true"
              />
              <TabsTrigger
                value="about"
                className="relative z-10 rounded-2xl text-[#404040] overflow-hidden transition-colors before:content-[''] before:absolute before:inset-0 before:bg-white/5 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-out before:z-0 before:pointer-events-none hover:before:scale-x-100 data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:before:scale-x-0 data-[state=active]:hover:before:scale-x-0"
              >
                About Me
              </TabsTrigger>
              <TabsTrigger
                value="experiences"
                className="relative z-10 rounded-2xl text-[#404040] overflow-hidden transition-colors before:content-[''] before:absolute before:inset-0 before:bg-white/5 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-out before:z-0 before:pointer-events-none hover:before:scale-x-100 data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:before:scale-x-0 data-[state=active]:hover:before:scale-x-0"
              >
                Experiences
              </TabsTrigger>
              <TabsTrigger
                value="recommended"
                className="relative z-10 rounded-2xl text-[#404040] overflow-hidden transition-colors before:content-[''] before:absolute before:inset-0 before:bg-white/5 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-out before:z-0 before:pointer-events-none hover:before:scale-x-100 data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:before:scale-x-0 data-[state=active]:hover:before:scale-x-0"
              >
                Recommended
              </TabsTrigger>
            </TabsList>

            <div className="mt-4 max-h-[22vh] overflow-y-auto pr-2">
              <TabsContent
                value="about"
                className="data-[state=active]:animate-in data-[state=active]:fade-in-50 data-[state=active]:duration-300"
              >
                <div className="p-4 space-y-4">
                  <p className="text-md text-[#969696] leading-relaxed">
                    Hello! I&apos;m Dave, your sales rep here from Salesforce. I&apos;ve been
                    working at this awesome company for 5 years now.
                  </p>
                  <p className="text-md text-[#969696] leading-relaxed">
                    I was born and raised in Albany, NY & have been living in Santa
                    Carla for the past 10 years my wife Tiffany and my 4 year old twin
                    daughters - Emma and Ella. Both of them are just starting school,
                    so my calender is usually blocked between 9-10 AM. This is a...
                  </p>
                </div>
              </TabsContent>

              <TabsContent
                value="experiences"
                className="data-[state=active]:animate-in data-[state=active]:fade-in-50 data-[state=active]:duration-300"
              >
                <div className="p-4">
                  <p>My experiences...</p>
                </div>
              </TabsContent>

              <TabsContent
                value="recommended"
                className="data-[state=active]:animate-in data-[state=active]:fade-in-50 data-[state=active]:duration-300"
              >
                <div className="p-4">
                  <p>My recommendations...</p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </CardHeader>
      </Card>
      
      {/* ... The rest of your component (second Card) remains unchanged ... */}
      
      <Card className="py-4 bg-[#363C43] border-none h-[40vh] text-gray-300 rounded-2xl shadow-lg">
        <CardHeader className="relative flex flex-row items-center justify-between ml-6 mr-6">
          <CircleHelp className="absolute -left-2 top-0 w-5 h-5 text-gray-300/40 z-10" />
          <GripVertical className="absolute -left-3 top-30 h-10" />
          <div className="w-35 h-15 text-md bg-[#171717] rounded-3xl font-semibold justify-center items-center flex">Gallery</div>
          <div className="flex items-center space-x-2">
            <div className="relative flex items-center">
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full filter blur-sm translate-y-0.5 shadow-[0_10px_30px_rgba(0,0,0,0.65),0_0_18px_rgba(99,102,241,0.08)]"
              />
              <Button
                type="button"
                onClick={addImage}
                aria-label="Add image"
                className="relative z-10 bg-[#2F3337] text-white rounded-full px-4 py-2 flex items-center space-x-2 border border-white/5 hover:bg-[#3A3F44] transition-colors font-semibold uppercase text-xs tracking-wide shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_6px_18px_rgba(0,0,0,0.6)]"
              >
                <Plus className="w-4 h-4" />
                <span className="select-none">ADD IMAGE</span>
              </Button>
            </div>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="bg-[#333333] rounded-lg text-white hover:bg-[#444444] hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="bg-[#333333] rounded-lg text-white hover:bg-[#444444] hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0 ml-6 mr-6">
          <div className="grid grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="aspect-square relative rounded-xl overflow-hidden transform transition-transform duration-300 ease-out will-change-transform origin-bottom-left hover:scale-105 hover:-rotate-4 hover:shadow-2xl"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}