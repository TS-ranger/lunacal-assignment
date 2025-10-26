"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus, CircleHelp, GripVertical } from "lucide-react";

const initialImages = ["/images/gallery-1.jpg"];

export function ProfileWidget() {
  const [images, setImages] = useState(initialImages);
  const [activeTab, setActiveTab] = useState("about");
  const tabsRef = useRef<HTMLDivElement>(null);
  const [gliderStyle, setGliderStyle] = useState({
    width: "0px",
    transform: "translateX(0px)",
  });

  // 🔹 Gallery scroll functionality
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 250;

  const handleNext = () => scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  const handlePrev = () => scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });

  const addImage = () => setImages([...images, "/images/gallery-1.jpg"]);

  // 🔹 Tab glider animation
  useEffect(() => {
    if (tabsRef.current) {
      const activeTabNode = tabsRef.current.querySelector<HTMLElement>('[data-state="active"]');
      if (activeTabNode) {
        const { offsetWidth, offsetLeft } = activeTabNode;
        setGliderStyle({
          width: `${offsetWidth}px`,
          transform: `translateX(${offsetLeft}px)`,
        });
      }
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col mt-10 mb-10">
      {/* ---------- ABOUT CARD ---------- */}
      <Card className="py-4 bg-[#363C43] border-none h-[40vh] text-gray-300 rounded-2xl shadow-black shadow-[5px_5px_10px_-3px]">
        <CardHeader className="relative ml-6 mr-6">
          <CircleHelp className="absolute -left-2 top-0 w-5 h-5 text-gray-300/40 z-10" />
          <GripVertical className="absolute -left-3 top-30 h-10" />

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList
              ref={tabsRef}
              className="relative grid w-full h-15 grid-cols-3 bg-[#171717] rounded-3xl p-1.5 gap-1.5"
            >
              <span
                className="absolute h-[calc(100%-0.75rem)] top-1.5 z-0 rounded-2xl bg-[#28292F] shadow-2xl shadow-black transition-all duration-900 ease-in-out"
                style={gliderStyle}
                aria-hidden="true"
              />
              {["about", "experiences", "recommended"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="relative z-10 rounded-2xl text-[#404040] overflow-hidden transition-colors 
                    before:content-[''] before:absolute before:inset-0 before:bg-white/5 before:scale-x-0 
                    before:origin-left before:transition-transform before:duration-300 before:ease-out 
                    before:z-0 before:pointer-events-none hover:before:scale-x-100 data-[state=active]:bg-transparent
                    data-[state=active]:text-white data-[state=active]:before:scale-x-0"
                >
                  {tab === "about"
                    ? "About Me"
                    : tab === "experiences"
                    ? "Experiences"
                    : "Recommended"}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="mt-4 max-h-[22vh] overflow-y-auto pr-2">
              <TabsContent value="about" className="data-[state=active]:animate-in data-[state=active]:fade-in-50 data-[state=active]:duration-300">
                <div className="p-4 space-y-4">
                  <p className="text-md text-[#969696] leading-relaxed">
                    Hello! I&apos;m Dave, your sales rep here from Salesforce. I&apos;ve been working at this awesome company for 5 years now.
                  </p>
                  <p className="text-md text-[#969696] leading-relaxed">
                    I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="experiences">
                <div className="p-4">
                  <p>My experiences...</p>
                </div>
              </TabsContent>

              <TabsContent value="recommended">
                <div className="p-4">
                  <p>My recommendations...</p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </CardHeader>
      </Card>

      <div className="h-1 rounded-full w-10/12 bg-gray-600/50 mx-auto my-4 shadow-md shadow-black" />

      {/* ---------- GALLERY CARD ---------- */}
      <Card className="py-4 bg-[#363C43] border-none h-[40vh] text-gray-300 rounded-2xl shadow-[5px_5px_10px_-3px] shadow-black">
        <CardHeader className="relative flex flex-row items-center justify-between ml-6 mr-6">
          <CircleHelp className="absolute -left-2 top-0 w-5 h-5 text-gray-300/40 z-10" />
          <GripVertical className="absolute -left-3 top-30 h-10" />
          <div className="w-35 h-15 text-md bg-[#171717] rounded-3xl font-semibold justify-center items-center flex">
            Gallery
          </div>

          <div className="flex items-center space-x-2">
            <Button
              type="button"
              onClick={addImage}
              aria-label="Add image"
              className="relative z-10 bg-[#2F3337] text-white rounded-full px-4 py-2 mr-4 flex items-center space-x-2 border border-white/5 hover:bg-[#3A3F44] transition-colors font-semibold uppercase text-xs tracking-wide shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_24px_rgba(0,0,0,0.45)]"
            >
              <Plus className="w-4 h-4" />
              <span className="select-none">ADD IMAGE</span>
            </Button>

            <Button onClick={handlePrev} aria-label="Previous" className="mr-3 w-8 h-8 rounded-full bg-[#28292F] text-gray-300 flex items-center justify-center border border-white/5 shadow-[inset_0_6px_12px_rgba(255,255,255,0.02),0_8px_20px_rgba(0,0,0,0.7)] hover:bg-[#35393d] transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button onClick={handleNext} aria-label="Next" className="w-8 h-8 rounded-full bg-[#28292F] text-gray-300 flex items-center justify-center border border-white/5 shadow-[inset_0_6px_12px_rgba(255,255,255,0.02),0_8px_20px_rgba(0,0,0,0.7)] hover:bg-[#35393d] transition-colors">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="ml-6 mr-6 overflow-hidden">
          <div ref={scrollRef} className="flex p-4 gap-4 overflow-hidden scroll-smooth">
            {images.map((src, index) => (
              <div
                key={index}
                className="min-w-[30%] aspect-square relative rounded-xl overflow-hidden transform transition-transform duration-300 ease-out will-change-transform origin-bottom-left hover:scale-105 hover:-rotate-4 hover:shadow-2xl shadow-black"
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

      <div className="h-1 rounded-full w-10/12 bg-gray-600/50 mx-auto my-4 shadow-md shadow-black" />
    </div>
  );
}
