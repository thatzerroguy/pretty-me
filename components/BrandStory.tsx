
import React from 'react';

const BrandStory: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="text-center md:text-left animate-fade-in-up">
          <h2 className="font-display text-4xl lg:text-5xl mb-8 leading-tight">
            Designed for the <br />
            <span className="italic text-primary font-light">Unforgettable</span> Moments
          </h2>
          <div className="space-y-8 text-gray-600 text-sm md:text-base leading-[1.8] font-light italic">
            <p>At PrettyMe, we believe that luxury lies in the details. From the meticulous stitching to the drape of our exclusive fabrics, every piece is a testament to superior craftsmanship.</p>
            <p>Our philosophy is simple: create timeless garments that make you feel extraordinary. Whether it's a quiet evening in or a grand celebration, we dress you for the memories you'll cherish forever.</p>
          </div>
          <div className="mt-12">
            <a href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] border-b-2 border-primary pb-2 hover:border-black transition-all">
              Read Our Story
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 h-[500px]">
          <div className="relative overflow-hidden mt-12 shadow-2xl h-full rounded-sm">
            <img 
              alt="Artistic Fashion 1" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjmsJkWVK7IaBUS6FZg0bb4owtSo5sK51-q3z4k8VnVsZzUV-JUUHS6CJAgkl6wKzFhmP2sPR0Dz5ylYQ34B0FbZiovT8dOYBJ_Phcx7wUf6J3fnG5rU4YeU25o9wClMffo9iU2vQgU7wmpicjsXygRed4XED_SP-EEckzG-3ZO0Z2wBwmZS8WJkolbk_671fPtrX8L5417yJdPeJ9nsmav99EkWelK5b2vePuYYmjbsablf8VKVJaMwMSXe7U_gtJsM0my_VeEnB7"
            />
          </div>
          <div className="relative overflow-hidden mb-12 shadow-2xl h-full rounded-sm">
            <img 
              alt="Artistic Fashion 2" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEV01DXZYTShxhqxXcsWE13-CQfdfPiUYuci8grg27sR3HP9zlkGjUSaNAMUQA0QPZGzh7REUdUTRS_3382FulkAiDjIb6TXr_-YThGF1yPZY8UJgixPJRwgMFk5BkNE8N3bytJDDEx2LCwst3QGjIdf0k5rOG5k4J9y41LXfUgeLoHi9Hiq3s60l_yu4JrprpxRZJ50M9JMWKkX1ZNHSXvZrZQvE-U9bkAs5El8M9tKrk1HLuDpD8ddf5uQTy6dq7W5vzEhrJYzcR"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
