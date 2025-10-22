"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"; // Import icons

// Placeholder images - get these from your Figma file
const initialImages = [
  "/images/gallery-1.jpg", // Make sure you have images in /public/images
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
];

export function GalleryWidget() {
  const [images, setImages] = useState(initialImages);

  const addImage = () => {
    // Adds a dummy image. This fulfills instruction #7.
    setImages([...images, "/images/gallery-1.jpg"]);
  };

  return (
    // Use Figma Inspect to get the *exact* color, shadow, and border-radius
    <Card className="bg-[#282828] border-none text-gray-300 rounded-2xl shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between p-4"> {/* Adjust padding */}
        <h2 className="text-lg font-semibold">Gallery</h2>
        <div className="flex items-center space-x-2">
          {/* EFFECT ADDED: 
            Added `transition-colors` and `hover:bg-[#444444]`.
            Used Figma inspect to get the exact background color `#333333`.
          */}
          <Button
            onClick={addImage}
            className="bg-[#333333] text-white rounded-lg px-3 py-2 text-sm hover:bg-[#444444] transition-colors"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Image
          </Button>
          
          {/* EFFECT ADDED: 
            Added arrow buttons with hover effects.
          */}
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
      <CardContent className="p-4 pt-0"> {/* Adjust padding */}
        <div className="grid grid-cols-3 gap-4">
          {images.map((src, index) => (
            /* EFFECT ADDED (Wrapper): 
              Added `overflow-hidden` to "clip" the zooming image.
            */
            <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
              {/* EFFECT ADDED (Image): 
                Added `transition-transform`, `duration-300`, and `hover:scale-110`.
                This creates the smooth zoom-in effect.
              */}
              <Image
                src={src} 
                alt={`Gallery image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}